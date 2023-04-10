import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ContPlenet = {
    margin:'auto',
    marginTop:'30px',
    paddingTop:'10px' ,
    paddingLeft:'15px' ,
    textAlign:'justify', 
    borderRadius:'10px 10px',
    backgroundColor:'rgb(192, 196, 194)',
    width:'500px',
    height:'550px', 
    fontSize:'20px',
}
const Titulo ={
    margin:'auto',
    marginTop:'30px',
    paddingTop:'10px' ,
    paddingLeft:'15px' ,
    textAlign:'center', 
    color:'green',
}
const Cardplanets = () => {
    const params = useParams();
    const [planeta, setPlaneta] = useState({})
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + params.id)
            .then(response => response.data)
            .then(result => {
                console.log(result);
                setPlaneta(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [params.id])

    return (
        <div style={ContPlenet}>
            <h1 style={Titulo}>Ruta Planets: {params.id}</h1>
            <h5>Name: {planeta.name}</h5>
            <h5>Rotation Period: {planeta.rotation_period}</h5>
            <h5>Orbital Period: {planeta.orbital_period}</h5>
            <h5>Diameter: {planeta.diameter}</h5>
            <h5>Climate: {planeta.climate}</h5> 
            <h5>Population: {planeta.population}</h5>
            <h5>Terrain: {planeta.terrain}</h5>
            <h5>Rotacion Periodica: {planeta.rotation_period}</h5>
        </div>
    )
}
export default Cardplanets 