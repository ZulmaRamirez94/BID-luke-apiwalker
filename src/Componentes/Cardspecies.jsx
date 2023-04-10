import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ContSpecies = {
    margin:'auto',
    marginTop:'30px',
    paddingTop:'10px' ,
    paddingLeft:'15px' ,
    textAlign:'justify', 
    borderRadius:'10px 10px',
    backgroundColor:'rgb(192, 196, 194)',
    width:'500px',
    height:'620px', 
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

const Cardspecies = () => {
    const params = useParams();
    const [species, setSpecies] = useState({})

    
    useEffect(() => {
        axios.get("https://swapi.dev/api/species/" + params.id)
            .then(response => response.data)
            .then(result => {
                console.log(result);
                setSpecies(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [params.id])

    return (
        <div style={ContSpecies}>
            <h1 style={Titulo}>Ruta Species: {params.id}</h1>
            <h5>Name: {species.name}</h5>
            <h5>Classification: {species.classification}</h5>
            <h5>Designation: {species.designation}</h5>
            <h5>Average Height: {species.average_height}</h5>
            <h5>Skin Colors: {species.skin_colors}</h5>
            <h5>Hair Colors: {species.hair_colors}</h5>
            <h5>Eye colors: {species.eye_colors}</h5>
            <h5>Average Lifespan: {species.average_lifespan}</h5>
            <h5>Language: {species.language}</h5>
        </div>
    )
}

export default Cardspecies