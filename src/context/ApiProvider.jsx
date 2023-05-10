import { createContext, useEffect } from 'react';
import { useState } from 'react';


// contect APIProvider for the API
const APIContext = createContext()


function APIProvider ({children}) {

  const [player, setPlayer] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('spaceTradersToken')
    if(token) {
      // look up the player
      fetch('https://api.spacetraders.io/v2/my/agent', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(res => res.json)
      .then(data => {
        setPlayer(data)
      })
      .catch(err => console.log(err))
    }
  }, [])

  let data = {
    api: 'https://api.spacetraders.io/v2/',
    player: player,
    setPlayer: setPlayer
  }

    return (
        <APIContext.Provider value={data}>
            {children}
        </APIContext.Provider>
    )
}

export {APIProvider, APIContext}