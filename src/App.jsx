import { useState, createContext } from 'react'
import './App.css'
import axios from 'axios'
import {APIProvider} from './context/ApiProvider'
import StatusTracker from './components/StatusTracker'
import CreateNewAgent from './components/CreateNewAgent'

function App() {

  return (
    <>
      <APIProvider>
        <StatusTracker />
        <CreateNewAgent />
      </APIProvider>
    </>
  )
}

export default App
