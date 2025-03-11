import { Link } from "react-router-dom"

const MoviesPage = () => {
    return (
        <>
            <div>
                <h2>titolo movie</h2>
                <h3>regista</h3>
                <p>biografia film</p>
            </div>

            <section>
                <h4> reviews</h4>
                <p>card delle reviews</p>
            </section>

            <div>
                <Link to="/">Back to home</Link>
            </div>
        </>
    )
}

export default MoviesPage