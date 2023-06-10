import './App.css'
import {APIProvider} from './context/ApiProvider'
import NavBar from './components/NavBar'
import TabSwitcher from './components/TabSwitcher'

function App() {

  return (
    <>
      <APIProvider>
        <NavBar />
        <TabSwitcher />
      </APIProvider>
    </>
  )
}

export default App
