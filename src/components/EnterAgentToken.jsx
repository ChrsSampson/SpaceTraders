import { useContext, useState } from "react"
import { APIContext } from "../context/ApiProvider"

// todo: localStorage hook 

export default function EnterAgentToken() {
    
    const {player} = useContext(APIContext)

    const [token, setToken] = useState('')
    
    function handleSubmit (e) {
        e.preventDefault()
        localStorage.setItem('spaceTradersToken', token)
    }

    if(!player) {
        return(
            <form onSubmit={e => handleSubmit(e)}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',
                    border: '1px solid white',
                    padding: '1em',
                    borderRadius: '.5em'
                }}
            >
                <label htmlFor="token">Enter Agent Token</label>
                <input value={token} onChange={e => setToken(e.target.value)} type="text" name="token" id="token" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}