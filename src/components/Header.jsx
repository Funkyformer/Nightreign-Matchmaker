import { NavLink } from "react-router-dom";
import styles from './CSS Modules/Header.module.css'
function Header() {
    return (
        <header className = {styles.header}>
            <nav className = {styles.nav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">Create a Listing</NavLink>
                <NavLink to="/view">View Listings</NavLink>
            </nav>
        </header>
    )
}
export default Header;