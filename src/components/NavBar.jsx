
import StatusTracker from "./StatusTracker"
import CreateNewAgent from "./CreateNewAgent"
import UserBug from "./UserBug"
import EnterAgentToken from "./EnterAgentToken"

// todo : styling needs some work

export default function NavBar () {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            padding:'0 1em'
        }}>
            <div>
                <StatusTracker />
            </div>
            <div>
                <EnterAgentToken />
                <CreateNewAgent />
                <UserBug />
            </div>
        </nav>
    )
}