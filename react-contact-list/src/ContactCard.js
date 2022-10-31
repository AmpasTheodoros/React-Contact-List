import React from 'react'

export const ContactCard = () => {
    return (
        <div className="contact-card">
            <img src="https://via.placeholder.com/150" alt='profile'></img>
            <div className="user-details">
                <p>Name: Jenny Han</p>
                <p>Email: Jenny@gmail.com</p>
                <p>Age: 25</p>
            </div>
        </div>
    )
}

export default ContactCard;