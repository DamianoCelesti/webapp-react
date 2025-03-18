// importiamo Link dal modulo react-router
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <Link to="/">MOVIESLOGO</Link>
            <Link to="/movies/create">Crea Movie</Link>
        </>
    )
}


export default Header