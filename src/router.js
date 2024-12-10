import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Layout from "./layout";
import Categories from "./categories";
import Electronics from "./electronics";
import Jewellery from "./jewellery";
import Men from "./mensclothing";
import Women from "./womensclothing";
import Sign from "./signin";



export default function Rout(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route index element={<Categories />} /> 
                    <Route path="/electronics" element={<Electronics/>}   />
                    <Route path="/men's clothing" element={<Men/>}   />
                    <Route path="/Women's clothing" element={<Women/>}   />
                    <Route path="/jewelery" element={<Jewellery/>}   />
                    <Route path="/signin" element={<Sign/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}