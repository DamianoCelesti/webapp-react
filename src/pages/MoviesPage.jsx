import { Link } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"

const MoviesPage = () => {
    return (
        <>
            <div>
                <h2>titolo movie</h2>
                <img src="http://localhost:3000/img/movies/inception.jpg" alt="img" />
                <h3>regista</h3>
                <p>biografia film</p>
            </div>

            <section>
                <div>
                    Reviews
                </div>
                <ReviewCard />
            </section>

            <div>
                <Link to="/">Back to home</Link>
            </div>
        </>
    )
}

export default MoviesPage