import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Cardvehicles = () => {
    const params = useParams();
    const [vehicles, setVehicles] = useState({})

    
    useEffect(() => {
        axios.get("https://swapi.dev/api/vehicles/" + params.id)
            .then(response => response.data)
            .then(result => {
                console.log(result);
                setVehicles(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [params.id])

    return (
        <div style={{margin:'auto', paddingTop:'30px' , textAlign:'center', backgroundColor:'rgb(192, 196, 194)', width:'500px', height:'300px'}}>
            <h1>Ruta vehicles: {params.id}</h1>
        </div>
    )
}

export default Cardvehicles