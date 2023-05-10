import { createContext } from 'react';
import { useState } from 'react';


// contect APIProvider for the API
const APIContext = createContext()


function APIProvider ({children}) {

  const [token, setToken] = useState('')

  let data = {
    api: 'https://api.spacetraders.io/v2/',
    token: token,
    setToken: setToken
  }

    return (
        <APIContext.Provider value={data}>
            {children}
        </APIContext.Provider>
    )
}

export {APIProvider, APIContext}