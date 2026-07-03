import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/favourites"> Favourites </Link>
        </>
    );
}

export default Navbar