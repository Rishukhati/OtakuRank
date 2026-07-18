import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";


function Navbar() {
    const { darkmode, toggle } = useContext(ThemeContext)
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/favourites"> Favourites </Link>
            <button onClick={toggle}> {darkmode ? 'DarkTheme' : 'LightTheme'}</button>
        </>
    );
}

export default Navbar