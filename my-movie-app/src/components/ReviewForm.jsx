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

    //variabile di stato per validazione
    const [isFormValid, setIsFormValid] = useState(true);

    //funzione check di validazione
    const validateForm = () => {
        if (!formData.text || !formData.name) return false
        if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 5) return false

        return true;
    }

    const setFieldValue = (e) =>{
        const {name, value} = e.target;

        //setting valore in oggetto della var di stato
        setFormData({...formData, [name]: value})
    }

    //funzione di gestione dell'invio dati del form
    const handleSubmit = e => {
        e.preventDefault();

        //check validazione
        if(!validateForm()) {
            setIsFormValid(false);
        return;
        }

    setIsFormValid(true);

    setIsLoading(true);

    axios.post(apiUrl, formData, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(() => {
            setFormData(initialValueForm);
            setIsFormValid(true);
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
                {!isFormValid && <div className="alert alert-danger mb-3">The data in the form is not valid!</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review:</label>
                        <textarea name="text" className="form-control" value={formData.text} onChange={setFieldValue} ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Vote:</label>
                        <input type="number" name="vote" className="form-control" value={formData.vote} onChange={setFieldValue} />
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