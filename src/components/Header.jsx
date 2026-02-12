import { NavLink } from "react-router-dom";
function Header() {
    return (
        <header className = "header">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Create a Listing</NavLink>
                <NavLink to="/view">View Listings</NavLink>
            </nav>
        </header>
    )
}
export default Header;