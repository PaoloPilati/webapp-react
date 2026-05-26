import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


function AddMoviePage() {

   //API endpoint da chiamare
    const apiUrl = `http://localhost:3000/api/movies/`;
    //valore default oggetto form
    const initialValueForm = {
        "title": "",
        "director": "",
        "genre": "",
        "release_year": "",
        "abstract": "",
        "image": null
    } 

    //Variabile di stato + destructuring target evento
    const [formData, setFormData] = useState(initialValueForm);

    const setFieldValue = (e) =>{
        const {name, value} = e.target;

        //setting valore in oggetto della var di stato
        if (name === "image") setFormData({ ...formData, image: e.target.files[0] });
        else setFormData({...formData, [name]: value})
    }

    //funzione di gestione dell'invio dati del form
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(apiUrl, formData, {
            headers: { 'Content-Type': 'multipart/form-data'}
        })
        .then(() => {
            setFormData(initialValueForm);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    
    return (
        <>
            <div className="card">
                <header className="card-header">
                    <h2>Upload a movie in our library</h2>
                </header>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Title:</label>
                            <input type="text" name="title" className="form-control" value={formData.title} onChange={setFieldValue} required/>
                        </div>
                        <div className="form-group">
                            <label>Director:</label>
                            <input type="text" name="director" className="form-control" value={formData.director} onChange={setFieldValue} required/>
                        </div>
                        <div className="form-group">
                            <label>Genre:</label>
                            <input type="text" name="genre" className="form-control" value={formData.genre} onChange={setFieldValue} required/>
                        </div>
                        <div className="form-group">
                            <label>Year:</label>
                            <input type="number" name="release_year" className="form-control" value={formData.release_year} onChange={setFieldValue} required/>
                        </div>
                        <div className="form-group">
                            <label>Abstract:</label>
                            <textarea name="abstract" className="form-control" value={formData.abstract} onChange={setFieldValue} required></textarea>
                        </div>
                        <div className="form-group">
                            <label>Image:</label>
                            <input name="image" type="file" className="form-control" onChange={setFieldValue} required/>
                        </div>
                        <div className="d-flex justify-content-end gap-2 pt-3">
                            <Link className="btn btn-secondary" to="/">Back</Link>
                            <button type="submit" className="btn btn-primary">
                                Add Movie
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}   

export default AddMoviePage;