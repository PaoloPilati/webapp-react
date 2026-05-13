import { NavLink } from "react-router-dom";

export default function Navbar () {
    return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg py-1">
        <div className="container">
            <div className="navbar-brand">
            <NavLink to="/">
                <img src="/movieicon.svg" alt="logo" className="navbar-logo"/>
            </NavLink> 
            </div>
            <div className="navbar-nav">
                   
               <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Home
                </NavLink>


            </div>
        </div>
    </nav>
    )
}