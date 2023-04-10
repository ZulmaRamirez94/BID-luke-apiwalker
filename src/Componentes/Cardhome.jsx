import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const card = {
    margin:'auto',
    marginTop:'30px', 
    paddingTop:'20px' , 
    paddingLeft:'20px' , 
    textAlign:'center', 
    borderRadius:'10px 10px',
    backgroundColor:'rgb(192, 196, 194)', 
    width:'500px', 
    height:'200px', 
    fontSize:'15px',
    color:'Green'
}
const Titulo = {
    textAlign:'center', 
}
const form = {
    margin:'20px',
    textAlign:'justify',
}
const select = {
    margin:'20px',
    textAlign:'center',
    borderRadius:'5px 5px',
    height:'25px',
    width:'105px',
}
const Id = {
    marginLeft:'20px',
    textAlign:'justify',
}
const Input= {
    margin:'20px',
    textAlign:'justify',
    borderRadius:'5px 5px',
    height:'20px',
    width:'105px',
}

const btn = {
    margin:'20px',
    textAlign:'center',
    borderRadius:'5px 5px',
    height:'30px',
    width:'85px',
    color:'White',
    backgroundColor:'blue',
}
const Cardhome = () => {
    let navigate = useNavigate();
    const [opciones, setOpciones] = useState([]);
    const [selected, setSelected] = useState("");
    const [id, setId] = useState("0");
    
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => response.data)
            .then(result => {
                let resList = []
                for (const [key] of Object.entries(result)) {
                    resList.push({ label: key })
                } 
                setOpciones(resList);
                setSelected(resList[0].url);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const handleNavigation = (e) => {
        navigate(`/${selected}/${id}`);
    };

    return (
        <div style={card}>
            <h1 style={Titulo}>Luke APIwalker</h1>
            <form style={form} >
                <select style={select} onChange={e=>setSelected(e.target.value)} >
                    {
                        opciones.map((item, index) =>
                        <option key={item.label + index} value={item.url}> {item.label}</option>)
                    }
                </select>
                <label style={Id}>Id:</label>
                <input style={Input} type={"number"} value={id} onChange={(e) => setId(e.target.value)} />
                <button style={btn} type="submit" onClick={handleNavigation}>BUSCAR</button>
            </form>
        </div>
    )
}

export default Cardhome 