import { Outlet } from "react-router-dom"
import { Navbar } from "../Components/NavbarMaktabUz"
import { Footer } from "../Components/Footer.jsx"

export const Layout = () =>{
    return(
        <div style={{width:'100%',height:'auto'}} className="Container">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}