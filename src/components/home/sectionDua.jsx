import TitleDua from './titleDua.jsx';
import ICreate from './iCreate.jsx';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import './sectionDua.css'

function SectionDua() {
    const { hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [hash])

    return (
        <section id='aboutUs' className='abtUs'>
            <TitleDua></TitleDua>
            <ICreate></ICreate>
        </section>
    )
}

export default SectionDua;