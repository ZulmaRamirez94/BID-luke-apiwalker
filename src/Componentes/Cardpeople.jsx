import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContPeople = {
    margin:'auto',
    marginTop:'30px',
    paddingTop:'10px' ,
    paddingLeft:'15px' ,
    textAlign:'justify', 
    borderRadius:'10px 10px',
    backgroundColor:'rgb(192, 196, 194)',
    width:'500px',
    height:'380px', 
    fontSize:'20px',
}
const Titulo = {
    margin:'auto',
    marginTop:'30px',
    paddingTop:'10px' ,
    paddingLeft:'15px' ,
    textAlign:'center', 
    color:'green',
}
const Cardpeople = (props) => {
    const params = useParams();
    const [persona, setPersona] = useState({});
    const [planeta, setPlaneta] = useState({})

useEffect(() => {
    axios.get("https://swapi.dev/api/people/" + params.id)
        .then(response => response.data)
        .then(result => {
            console.log(result);
            setPersona(result);
        })
        .catch(error => {
            console.log(error);
        })
}, [ params.id])

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
        <div style={ContPeople}>
            <h1 style={Titulo}>Ruta Personas: {params.id}</h1>
            <h5>Name: {persona.name}</h5>
            <h5>Height: {persona.height}</h5>
            <h5>Hair Color: {persona.hair_color}</h5>
            <h5>Bird Year: {persona.birth_year}</h5>
            <h5>Homeworld: {planeta.name} </h5>
        </div>
    )
}
export default Cardpeople
