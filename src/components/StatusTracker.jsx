import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { APIContext } from '../context/ApiProvider';

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

    const statusDot = <div 
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
                flexDirection: 'column', 
                alignContent: 'center',
                justifyContent: 'center',
                border: '1px solid white',
                borderRadius: '.5em'
            }}
        >
            <h4
                style={{display: 'flex', alignItems: 'center', gap: '.25em', width: '100%'}}
            >
                Status: {res.status ? 'Online' : 'Offline'} {statusDot}
            </h4>
            <h4>Agents Online: {res.stats ? res.stats.agents : '?'}</h4>
            <h4>Active Ships: {res.stats ? res.stats.ships : '?'} </h4>
        </div>
    )
}