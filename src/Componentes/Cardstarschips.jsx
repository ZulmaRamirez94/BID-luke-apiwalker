import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ContStarschips = {
    margin:'auto',
    marginTop:'30px',
    paddingTop:'10px' ,
    paddingLeft:'15px' ,
    textAlign:'justify', 
    borderRadius:'10px 10px',
    backgroundColor:'rgb(192, 196, 194)',
    width:'400px',
    height:'130px', 
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

const Cardstarships = () => {
    const params = useParams();
    const [starships, setStarships] = useState({})
    
    useEffect(() => {
            axios.get("https://swapi.dev/api/starships/" + params.id)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                let opcion = [];
                for (const [key, value] of Object.entries(data)) {
                    opcion.push({ name: key, url: value });
                }
                setStarships(opcion);
            })
    }, [params.id])

    
    return (
        <div style={ContStarschips}>
        <h1 style={Titulo}>No Fount</h1>
        </div>
        
    )
}

export default Cardstarships