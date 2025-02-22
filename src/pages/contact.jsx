import Nav from "../components/home/nav";
import TitleHeader from "../components/contact/titleHeader";
import Graphic from '../components/home/footerGraph.jsx'
import Footer from '../components/home/footer.jsx'
import EmailForm from "../components/contact/emailForm.jsx";
import Notif from "../components/contact/notif.jsx";
import './contact.css'
import { useState } from "react";

function Contact() {
    const [childD, setChildD] = useState('notif');

    const handleData = (data) => {
        setChildD(data);
        setTimeout(() => [
            setChildD('notif')
        ], 3500)
    }

    return (
        <>
            <Nav></Nav>
            <main className="contactMain">
                <TitleHeader></TitleHeader>
                <Notif show={childD}></Notif>
                <EmailForm sendData={handleData}></EmailForm>
                <Graphic></Graphic>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Contact