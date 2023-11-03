import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sabores from "../paginas/sabores";
import Sobre from "../paginas/sobre";
import PaginaInicial from "../paginas/Home";


const  Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path= '/' element={<PaginaInicial/>}/>
            <Route path='/sabores' element={<Sabores/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default Rotas;