import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const initialData = {
    title: "",
    director: "",
    image: null,
    abstract: ""
}

const endpointApi = "http://localhost:3000/movies";

const CreateMoviePage = () => {

    const navigate = useNavigate();

    const [formDataObj, setFormDataObj] = useState(initialData)


    const setFieldValue = (e) => {
        const { value, name } = e.target;
        if (name === "image") setFormDataObj({ ...formDataObj, image: e.target.files[0] });
        else setFormDataObj({ ...formDataObj, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(endpointApi, formDataObj, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(
                () => { navigate("/") }
            )
            .catch(err => console.log(err)
            )

    }


    return (
        <>
            <div>
                <h2>Add Movie</h2>
                <section>
                    <form onSubmit={handleSubmit}>

                        <div>
                            <label>title</label>
                            <input
                                name="title"
                                type="text"
                                className="form-control"
                                value={formDataObj.title}
                                onChange={setFieldValue}
                                required
                            />
                        </div>

                        <div>
                            <label>director</label>
                            <input
                                name="director"
                                type="text"
                                className="form-control"
                                value={formDataObj.director}
                                onChange={setFieldValue}
                                required
                            />
                        </div>

                        <div>
                            <label>image</label>
                            <input
                                name="image"
                                type="file"
                                className="form-control"
                                onChange={setFieldValue}
                                required
                            />
                        </div>

                        <div>
                            <label>abstract</label>
                            <textarea
                                name="abstract"
                                className="form-control"
                                value={formDataObj.abstract}
                                onChange={setFieldValue}
                                required
                            ></textarea>
                        </div>

                        <div>
                            <button type="submit">Add Movie</button>
                        </div>

                    </form>
                </section>
            </div>
        </>


    )
}

export default CreateMoviePage