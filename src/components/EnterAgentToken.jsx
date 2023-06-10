import { useContext, useState } from "react"
import { APIContext } from "../context/ApiProvider"
// todo: localStorage hook 

export default function EnterAgentToken() {
    
    const {player, setToken} = useContext(APIContext)

    const [token, setT] = useState('')
    
    function handleSubmit (e) {
        e.preventDefault()
        setToken(token)
    }

    if(!player) {
        return(
            <form onSubmit={e => handleSubmit(e)}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em',
                    padding: '1em',
                    borderRadius: '.5em'
                }}
            >
                <label htmlFor="token">Enter Agent Token</label>
                <input placeholder="Your Token" value={token} onChange={e => setT(e.target.value)} type="text" name="token" id="token" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}