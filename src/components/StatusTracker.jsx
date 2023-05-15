import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { APIContext } from '../context/ApiProvider';
import {RiSpaceShipFill} from  'react-icons/ri'
import {MdOutlineSupportAgent} from 'react-icons/md'

// gets the status of the API and render a component based on the status

// example response from the API
// {
//     "status": "SpaceTraders is currently online and available to play",
//     "stats": {
//       "agents": 1332,
//       "ships": 2228,
//       "systems": 5000,
//       "waypoints": 25172
//     },
//     "leaderboards": {
//       "mostCredits": [
//         {
//           "agentSymbol": "FERB287",
//           "credits": 79776769
//         },
//         {
//           "agentSymbol": "RIHAN",
//           "credits": 71797006
//         },
//         {
//           "agentSymbol": "FEBA0000",
//           "credits": 22865909
//         },
//         {
//           "agentSymbol": "MAYLEEN",
//           "credits": 4439633
//         },
//         {
//           "agentSymbol": "GILBERVF",
//           "credits": 1039988
//         }
//       ],
//       "mostSubmittedCharts": [
//         {
//           "agentSymbol": "RIHAN",
//           "chartCount": 14976
//         },
//         {
//           "agentSymbol": "HEDGEHOG",
//           "chartCount": 3216
//         },
//         {
//           "agentSymbol": "FEBA0000",
//           "chartCount": 1177
//         },
//         {
//           "agentSymbol": "FEBACHART02",
//           "chartCount": 15
//         },
//         {
//           "agentSymbol": "FEBACHART08",
//           "chartCount": 13
//         }
//       ]
//     }
//   }


export default function StatusTracker() {
    const {api} = useContext(APIContext)

    const [res, setRes] = useState(false)

    useEffect(() => {
        axios.get(api)
            .then(res => {
                setRes(res.data)
            })
            .catch(err => {
                setRes(err.status)
            })
    }, [api])

    const statusDot = <span
                        style={{
                            height: '10px',
                            width: '10px', 
                            backgroundColor: res.status ? 'green' : 'red',
                            borderRadius: '50%' 
                        }}
                    />

    return (
        <div 
            style={{
                display: 'flex', 
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid white',
                borderRadius: '.5em',
                padding: '1em'
            }}
        >
            <p
                style={{display: 'flex', alignItems: 'center', gap: '.25em', width: '100%'}}
            >
                Status: {res.status ? 'Online' : 'Offline'} {statusDot}
            </p>
            <div style={{
                display:'flex',
                gap: '1em'
            }}>
                <sub><MdOutlineSupportAgent /> {res.stats ? res.stats.agents : '?'}</sub>
                <sub><RiSpaceShipFill /> {res.stats ? res.stats.ships : '?'} </sub>
            </div>
        </div>
    )
}