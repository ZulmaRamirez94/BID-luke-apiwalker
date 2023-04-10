import { createBrowserRouter } from "react-router-dom";
import Films from "../Componentes/Cardfilms";
import Home from "../Componentes/Cardhome";
import Planets from "../Componentes/Cardplanets";
import People from "../Componentes/Cardpeople";
import Species from "../Componentes/Cardspecies";
import Starships from "../Componentes/Cardstarschips";
import Vehicles from "../Componentes/Cardvehicles";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/people/:id",
        element: <People/>,
    },
    {
        path: "planets/:id",
        element: <Planets/>,
    },
    {
        path: "species/:id",
        element: <Species/>,
    },
    {
        path: "films/:id",
        element: <Films/>,
    },
    {
        path: "starships/:id",
        element: <Starships/>,
    },
    {
        path: "vehicles/:id",
        element: <Vehicles/>,
    },
]);