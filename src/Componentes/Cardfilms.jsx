import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const card = {
    margin:'auto',
    marginTop:'30px', 
    paddingTop:'10px' , 
    paddingLeft:'15px' , 
    textAlign:'justify', 
    backgroundColor:'rgb(192, 196, 194)', 
    borderRadius:'10px 10px',
    width:'700px', 
    height:'550px', 
    fontSize:'20px',
}
const Titulo = {
    color:'green',
    margin:'auto',
    textAlign:'center'
}
const Opening = {
    textAlign:'justify',
    paddingRight:'15px'
}

const Cardfilms = () => {
    const params = useParams();
    const [films, setFilms] = useState({})
    
    useEffect(() => {
        axios.get("https://swapi.dev/api/films/" + params.id)
            .then(response => response.data)
            .then(result => {
                console.log(result);
                setFilms(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [params.id])

    return (
        < div style={card}>
        
            <h1 style={Titulo}>Ruta Films: {params.id}</h1>
            <h5>Title: {films.title}</h5>
            <h5>Director: {films.director}</h5>
            <h5>Producer: {films.producer}</h5>
            <h5>Episode: {films.episode_id}</h5>
            <h5 style={Opening}>Opening Crawl: {films.opening_crawl}</h5>
            <h5>Release Date: {films.release_date}</h5>
        </div>
    )
}

export default Cardfilms