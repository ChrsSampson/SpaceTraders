import { createContext, useEffect } from 'react';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// todo: localStorage hook

// contect APIProvider for the API
const APIContext = createContext()

function APIProvider ({children}) {

  const [player, setPlayer] = useState('')
  const [token, setToken] = useLocalStorage('spaceTradersToken', '')
  const [error, setError] = useState(null)

  useEffect(() => {
    if(token !== undefined && token !== null && token !== '') {
      // look up the player
       const data = fetch('https://api.spacetraders.io/v2/my/agent', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(res => {
        setPlayer(res.data)
      })
      .catch(err => {
        setToken(null)
        setError(err.message)
        console.warn(err)
      }) 

    }
  }, [token])

  let data = {
    api: 'https://api.spacetraders.io/v2/',
    player: player,
    setPlayer: setPlayer,
    setToken: setToken,
    error: error,
    setError: setError,
  }

    return (
        <APIContext.Provider value={data}>
            {children}
        </APIContext.Provider>
    )
}

export {APIProvider, APIContext}