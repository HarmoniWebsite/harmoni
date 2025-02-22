import { useRef, useState } from 'react';
import './notif.css'

function Notif({ show }) {
    const not = useRef()
    /*`${show}`*/
    return (
        <section ref={not} className={`${show}`}>
            <div className="notifCont">
                <h2 className="notifHead">
                    Thanks for getting in touch with Harmoni!
                </h2>
                <p className="notifText">
                    We’ll be in touch soon to chat more about how we can help with your tech needs.
                </p>
            </div>
        </section>
    )
}

export default Notif;