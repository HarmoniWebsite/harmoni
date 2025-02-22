import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './emailForm.css'

function EmailForm({ sendData }) {
    const [sendM, setSendM] = useState("Send message")
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);

        emailjs
            .sendForm('service_4d26s1d', 'template_i1ama2i', form.current, {
                publicKey: 'eAMBhJmbNtErOZmoc',
            })
            .then(
                () => {
                    setSendM("Sending . . .");
                    console.log('success!');
                    setTimeout(() => {
                        form.current.reset();
                        setSendM("Send message");
                        setIsButtonDisabled(false);
                        sendData("notif show")
                    }, 1000)
                },
                (error) => {
                    console.log('Filed . . . ', error.text)
                    setIsButtonDisabled(false);
                }
            )
    }

    // --------------------------------------

    const [formData, setFormData] = useState({
        from_name: "",
        phone: "",
        from_email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const isValidForm = Object.values(formData).every((value) => value.trim() !== "");

    return (
        <section className="formCont">
            <h3>How Can We Help?</h3>
            <form ref={form} onSubmit={sendEmail} className='emailCont' >
                <input pattern='[A-Za-zА-Яа-яЁё ]{2,}' name='from_name' className='name' type="text" required placeholder='Name*' onChange={handleChange} minLength="2" />
                <input pattern='^\+?\d*$' name='phone' className='phone' type="tel" required placeholder='Phone*' onChange={handleChange} minLength="2" />
                <input pattern='^[^0-9][^@]+@[^0-9]+\.[^0-9]+$' name='from_email' className='email' type="email" required placeholder='Email*' onChange={handleChange} minLength="2" />
                <input name='message' className='message' type="text" placeholder='Message' onChange={handleChange} />
                <button className={isValidForm ? "enableBtn" : "disableBtn"} type="submit" disabled={!isValidForm || isButtonDisabled}>{sendM}</button>
            </form>
        </section>
    )
}

export default EmailForm;