import { useState } from "react"
import axios from "axios";


const ReviewForm = (movieId, reloadReviews) => {


    const initialValue = { name: "", text: "", vote: 1 };
    // variabile di stato per info del form
    const [formData, setFormData] = useState({ initialValue })
    // funzione di creazione oggetto valori form
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    const urlEndpoint = `http://localhost:3000/movies/${movieId}/reviews`
    // funzione di invio richiesta al submit del form
    const submitReview = (e) => {
        e.PreventDefault();
        axios.post(urlEndpoint, formData)
            .then(
                () => {
                    setFormData(initialValue)
                    reloadReviews()
                }
            )
            .catch(err => console.log(err)
            )
    }




    return (
        <>
            <h4>add review</h4>
            <div>
                <form onSubmit={submitReview}>
                    <div>
                        <label>Nome</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div>
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue} ></textarea>
                    </div>
                    <div>
                        <label>Voto</label>
                        <input type="number" min="1" max="5" className="form-control" name='vote' value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}


export default ReviewForm