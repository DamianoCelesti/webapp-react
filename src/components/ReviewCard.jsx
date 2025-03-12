const ReviewCard = (props) => {
    return (
        <div>
            <p>voto:{props.reviewProp.vote}</p>
            <p>nome:{props.reviewProp.name}</p>
            <p>{props.reviewProp.text}</p>
        </div>
    )
}



export default ReviewCard