
import StatusTracker from "./StatusTracker"
import CreateNewAgent from "./CreateNewAgent"
import UserBug from "./UserBug"
import EnterAgentToken from "./EnterAgentToken"

import { useState } from "react"

// todo : styling needs some work

export default function NavBar () {

    const [tab, setTab] = useState(0)

    function renderTab () {
        switch (tab) {
            case 1:
                return <EnterAgentToken />
            default:
                return <CreateNewAgent />
        }
    }

    function changeTab () {
        if (tab === 0) {
            setTab(1)
        } else {
            setTab(0)
        }
    }

    function buttonText () {
        if (tab === 0) {
            return 'Enter Agent Token'
        } else {
            return 'Create New Agent'
        }
    }

    return (
        <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            position: 'fixed',
            padding: '1em',
            top: '0',
            left: '0',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,.5)',
            padding:'0 1em'
        }}>
            <div>
                <StatusTracker />
            </div>
            <div>
                <article style={{
                    border: '1px solid white',
                    borderRadius: '.5em',
                }}>
                    {renderTab()}
                    <button onClick={changeTab}>{buttonText()}</button>
                </article>
                <UserBug />
            </div>
        </nav>
    )
}