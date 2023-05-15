import { useContext, useState } from "react";
import { APIContext } from "../context/ApiProvider";

export default function UserBug () {

    const [hover, sethover] = useState(false)

    const {player, setPlayer} = useContext(APIContext)

    function handleLogout(){
        localStorage.removeItem('spaceTradersToken')
        setPlayer('')
    }


    if(player) {
        return (
            <article style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid white',
                borderRadius: '.5em',
                padding: '1em',
                }}
                onMouseEnter={() => sethover(true)}
                onMouseLeave={() => sethover(false)}
            >
                {hover ? <h4>{player.symbol}</h4> : null }
                <span>HQ: {player.headquarters}</span>
                <span>Credits: <span className="accent">{player.credits}</span></span>
                 {hover ? <button onClick={handleLogout}>Logout</button> : null }
            </article>
        )
    }

}