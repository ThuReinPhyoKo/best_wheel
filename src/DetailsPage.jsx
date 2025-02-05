import { useParams } from "react-router-dom"
import { useState } from "react";
import './Details.css'
import './additional.css'
import { carDetails } from "./App";


function DetailsPage() {
    const {model} = useParams();
    const [ isFormVisible , setIsFormVisible ] = useState(false);
    const [ buyForm, setBuyForm ] = useState(false);
    const [ formData, setFormData ] = useState({
        name: '',phone: '',date: '',time: ''
    })
    const [ data, setData ] = useState({
        holdername: '', card: '', expirydate: '', cvv: '' 
    })

    const car = carDetails.find(car => car.model === model);

    const handleBuyChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    

    const buyFormDisplay = () => {
        setBuyForm(true);
    }
    const buyFormClose = () => {
        setBuyForm(false);
    }
    const testFormClose = () => {
        setIsFormVisible(false)
    }
    const testFormDisplay = () => {
        setIsFormVisible(true)
    }
    const proceedBtn = () => {
        alert("Your payment is being reviewed. We will contact you after verification.")
        setBuyForm(false)
        setData({
            holdername: '', card: '', expirydate: '', cvv: ''
        })
    }

    const submitAlert = () => {
        alert("Congratulation, You form has been submitted! We will contact you via phone to confirm your test drive.")
        setIsFormVisible(false)
        setFormData({
            name: '',phone: '',date: '',time: ''
        })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <>
            <div className={`details-page ${isFormVisible || buyForm? 'blur' : ''}`}>
                <div className="detail-img-container">
                    <img src={car.img} alt={car.model} className="detail-car-img"/>
                </div>
                <div className="detail-info-container">
                    <h3 className="model">{car?.model || 'Unknown Model'}</h3>
                    <p className="price">Price: {car?.price || 'Price is not available'}</p>
                    <p className="year">Year: {car?.year || 'Unknown'}</p>
                    <p className="type">Type: {car?.type || 'Unknown'}</p>
                    <p className="origin">Origin: {car?.origin || 'Unknown'}</p>
                    <p className="mileage">Mileage: {car?.mileage || 'Unknown'}</p>
                    <p className="description">Description: {car?.description || 'Description coming soon ...'}</p>
                    <div className="detail-button-container">
                        <button className="test-drive" onClick={testFormDisplay}>Test Drive</button>
                        <button className="contact-now" onClick={buyFormDisplay}>Purchase</button>
                    </div>
                </div>
            </div>
            {isFormVisible && (
                <div className="test-form">
                    <div className="test-form-header">
                        <h3 className="test-header">Please fill out the form <br /> for test drive</h3>
                    </div>
                    <div className="client-name">
                        <label htmlFor="name" id="label-name">Name</label>
                        <input type="text" name="name" className="name-input" placeholder="Enter your name"
                        value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div className="client-phone-number">
                        <label htmlFor="phone-number" id="label-number">Phone Number</label>
                        <input type="number" name="phone" className="phone-input"
                        value={formData.phone} onChange={handleChange} required/>
                    </div>
                    <div className="test-date">
                        <label htmlFor="date" id="label-test-date">Test Date</label>
                        <input type="date" name="date" className="date-input"
                        value={formData.date} onChange={handleChange} required/>
                    </div>
                    <div className="test-time">
                        <label htmlFor="time" id="label-time">Time</label>
                        <input type="time" className="time-input" name="time"
                        value={formData.time} onChange={handleChange} required/>
                    </div>
                    <div className="test-confirm">
                        <button id="test-cancel-btn" onClick={testFormClose}>Cancel</button>
                        <button id="test-submit-btn" onClick={submitAlert}>Submit</button>
                    </div>
                </div>
            )}
            {buyForm && (
                <div className="buy-form">
                    <div className="buy-form-header">
                        <h3 className="buy-form-header-text">
                            Please fill out the form <br/> for payment
                        </h3>
                    </div>
                    <div className="buy-form-name">
                        <label htmlFor="name" id="buy-name">Card Holder Full Name</label>
                        <input type="text" name="holdername" className="buy-name-input"
                        value={data.holdername} onChange={handleBuyChange} placeholder="Enter your full name" />
                    </div>
                    <div className="buy-form-card">
                        <label htmlFor="card" id="buy-card">Card Number</label>
                        <input type="number" name="card" className="buy-card-input"
                        value={data.card} onChange={handleBuyChange} placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="buy-form-date">
                        <label htmlFor="date & cvv" id="buy-datecvv">Expiry Date / CVV</label>
                        <div className="split">
                            <input type="date" name="expirydate" className="buy-date-input"
                            value={data.expirydate} onChange={handleBuyChange} />
                            <input type="number" name="cvv" className="buy-cvv-input"
                            value={data.cvv} onChange={handleBuyChange} placeholder="CVV" />
                        </div>
                    </div>
                    <div className="buy-car-detail-box">
                        <h3 className="buy-car-detail-model"><span>Car:</span> {car.model}</h3>
                        <h3 className="buy-car-detail-price"><span>Price:</span> {car.price}</h3>
                    </div>
                    <div className="terms-conditions">
                        <input type="checkbox" className="checkbox" />
                        <label htmlFor="checkbox" className="agree">I agree to the terms and conditions</label>
                    </div>
                    <div className="buy-form-btns">
                        <button onClick={buyFormClose} className="buy-cancel">Cancel</button>
                        <button className="buy-proceed" onClick={proceedBtn}>Proceed</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default DetailsPage