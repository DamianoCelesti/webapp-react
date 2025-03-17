import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"
import ReviewForm from "../components/ReviewForm"


const MoviePage = () => {

    // recupero l'id del movie richiesto
    const { id } = useParams();

    // utilizzo per il redirect 
    const redirect = useNavigate();

    // settiamo lo stato del componente
    const [movie, setMovie] = useState({});

    // chiamata api per il movie
    const fetchMovie = () => {
        axios.get("http://localhost:3000/movies/" + id)
            .then(
                res => {
                    // console.log(res.data);
                    setMovie(res.data)
                }
            )
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
            }

            )
    }

    // chiamata all'api al montaggio del componente
    useEffect(fetchMovie, [])

    // funzione di rendering delle review
    const renderReviews = () => {
        return movie.reviews?.map(
            review => <ReviewCard key={review.id} reviewProp={review} />
        )
    }

    return (
        <>
            <div>
                <h2>{movie.title}</h2>
                <img src={movie.image} alt={movie.title} />
                <h3>{movie.director}</h3>
                <p>{movie.abstract}</p>
            </div>

            <section>
                <div>
                    Reviews
                </div>
                {renderReviews()}
            </section>
            <section>
                <ReviewForm movieId={movie.id} />
            </section>
            <div>
                <Link to="/">Back to home</Link>
            </div>
        </>
    )
}

export default MoviePage