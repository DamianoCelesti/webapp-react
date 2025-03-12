import axios from "axios";
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"



const HomePage = () => {

    // settiamo lo stato della componente
    const [movies, setMovies] = useState([]);
    // funzione di fetching dei dati lista movies (index)
    const fetchMovies = () => {
        axios.get("http://localhost:3000/movies")
            .then(
                res => {
                    // console.log(res.data);
                    setMovies(res.data)
                }
            )
            .catch(err => console.log(err)

            )
    }
    //fetchMovies();
    useEffect(fetchMovies, [])

    // funzione di rendering delle card dei movies
    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <MovieCard key={movie.id} movieProp={movie} />
            )
        })
    }

    return (
        <>
            <h1>Movies</h1>
            <h2>Sottotitolo da mettere</h2>

            {renderMovies()}

        </>
    )

}


export default HomePage