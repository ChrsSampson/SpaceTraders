import './App.css'
import {APIProvider} from './context/ApiProvider'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      <APIProvider>
        <NavBar />
        <section>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}> 
    
          </div>
        </section>
      </APIProvider>
    </>
  )
}

export default App
