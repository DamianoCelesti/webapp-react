import { Link } from "react-router-dom"


const MovieCard = () => {
    return (
        <div>
            <img src="http://localhost:3000/img/movies/inception.jpg" alt="img" />
            <h5>titolo movie</h5>
            <p>nome autore</p>
            <Link to="movies/1">detail</Link>
        </div>
    )
}



export default MovieCard