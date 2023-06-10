// create a new Agent 
import { useState, useContext } from "react"
import { APIContext } from "../context/ApiProvider"

// you cannot just make any faction. It must be one of these
// COSMIC
// VOID
// GALACTIC
// QUANTUM
// DOMINION

export default function CreateNewAgent () {

    const {api, player, setPlayer, setToken} = useContext(APIContext)

    const [agent, setAgent] = useState('')
    const [faction, setFaction] = useState('')
    const [factionInputError, setfactionInputError] = useState(false)
    const [symbolInputError, setSymbolInputError] = useState(false)
    const [error, setError] = useState('')


    function handleSubmit(e){
        e.preventDefault()

        // clear previous errors 
        setfactionInputError(false)
        setSymbolInputError(false)
        setError('')

        const data = {
            "symbol": agent,
            "faction": faction
        }

        fetch(`${api}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.error && data.error.code === 422){
                activateErrorHilighting(data.error)
                setError(displayError(data.error))
            } 
            if(data.token) {
                saveTokenToStorage(data.token)
                setPlayer(data)
            }
        })
        .catch(err => {
            setError(err.message)
            console.log(err)
        })

    }

    function saveTokenToStorage (token) {
        localStorage.setItem('spaceTradersToken', token)
    }

    function displayError (res) {

        const el = []

        Object.values(res.data).forEach(e => {
            const item = <span key={e}>{e}</span>
            el.push(item)
        })
        
        return el
    }

    function activateErrorHilighting (res) {
        if(res.data.faction){
            setfactionInputError(true)
        }
        if(res.data.symbol){
            setSymbolInputError(true)
        }
    }

    if(!player){
        return (
            <>
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1em',
                        padding: '1em',
                        borderRadius: '.5em'
                    }}
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <span>Create New Agent</span>

                    {error &&
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <p style={{color:'red'}}>{error}</p> 
                        </div>
                    }
                    <input
                        placeholder="Agent Name (symbol)" 
                        style={{borderColor: symbolInputError ? 'red' : null}}
                        value={agent}
                        onChange={(e) => setAgent(e.target.value) }
                    />
                    <select
                        placeholder="Faction"
                        style={{borderColor: factionInputError ? 'red' : null}}
                        value={faction}
                        onChange={(e) => setFaction(e.target.value) }
                    >
                        <option value=''>Select Faction</option>
                        <option value='COSMIC'>COSMIC</option>
                        <option value="VOID">VOID</option>
                        <option value="GALACTIC">GALACTIC</option>
                        <option value="QUANTUM">QUANTUM</option>
                        <option value="DOMINION">DOMINION</option>
                    </select>
                    <button type="submit" >Create</button>
                </form>
            </>
        )
    }
}