import { Link } from "react-router-dom"


const MovieCard = (props) => {


    return (
        <div>
            <img src={props.movieProp.image} alt="img" />
            <h5>{props.movieProp.title}</h5>
            <p>{props.movieProp.director}</p>
            <Link to={`movies/${props.movieProp.id}`}>detail</Link>
        </div>
    )
}



export default MovieCard