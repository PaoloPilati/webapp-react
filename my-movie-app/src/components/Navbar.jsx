import { NavLink } from "react-router-dom";

export default function Navbar () {
    return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
            <div className="navbar-brand">
            <NavLink to="/">
                <img className="img-fluid w-25 rounded" src="https://fakestoreapi.com/icons/logo.png" alt="logo" />
            </NavLink> 
            </div>
            <div className="navbar-nav">
                   
                <NavLink to="/" end className="nav-link">Home</NavLink>
                <NavLink to="/movies/:id" end className="nav-link">MovieDetails</NavLink>

            </div>
        </div>
    </nav>
    )
}