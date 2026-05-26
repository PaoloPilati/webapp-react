import axios from "axios";
import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";



function ReviewForm({movie_id, refreshReviews}) {

    //API endpoint da chiamare
    const apiUrl = `http://localhost:3000/api/movies/${movie_id}/reviews`;
    
    const { setIsLoading } = useGlobal();
    //valore default oggetto form
    const initialValueForm = {
        "text": "",
        "name": "",
        "vote": 1
    } 

    //Variabile di stato + destructuring target evento
    const [formData, setFormData] = useState(initialValueForm);

    const setFieldValue = (e) =>{
        const {name, value} = e.target;

        //setting valore in oggetto della var di stato
        setFormData({...formData, [name]: value})
    }

    //funzione di gestione dell'invio dati del form
    const handleSubmit = e => {
    e.preventDefault();

    setIsLoading(true);

    axios.post(apiUrl, formData, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(() => {
            setFormData(initialValueForm);
            refreshReviews();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} required />
                    </div>
                    <div className="form-group">
                        <label>Review:</label>
                        <textarea name="text" className="form-control" value={formData.text} onChange={setFieldValue} required></textarea>
                    </div>
                    <div className="form-group">
                        <label>Vote:</label>
                        <input type="number" name="vote" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} required />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm;