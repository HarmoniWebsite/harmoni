import './lettersMean.css';
import { useState, useEffect } from 'react';

import letterH from '../../assets/letterImage/H.png'
import letterA from '../../assets/letterImage/A.png'
import letterR from '../../assets/letterImage/R.png'
import letterM from '../../assets/letterImage/M.png'
import letterO from '../../assets/letterImage/O.png'
import letterN from '../../assets/letterImage/N.png'
import letterI from '../../assets/letterImage/I.png'

const images = [letterH, letterA, letterR, letterM, letterO, letterN, letterI];

function LettersMean() {
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        })
    }, []);

    const [letter, setLetter] = useState('H');
    const [meaning, setMeaning] = useState(
        <>
            <span>Harness</span> innovation to deliver <span>the best solutions.</span>
        </>
    )

    const [letterImage, setLetterImage] = useState(letterH)

    const handleMouseOver = (e) => {

        switch (e.target.id) {
            case "h":
                setLetter("H");
                setMeaning(
                    <>
                        <span>Harness</span> innovation to deliver <span>the best solutions.</span>
                    </>
                )
                setLetterImage(letterH);
                break;
            case "a":
                setLetter("A");
                setMeaning(
                    <>
                        <span>Actively</span> bring global standards to <span>local markets.</span>
                    </>
                )
                setLetterImage(letterA);
                break;
            case "r":
                setLetter("R");
                setMeaning(
                    <>
                        <span>Respond</span> swiftly to business and  <span>consumer needs.</span>
                    </>
                )
                setLetterImage(letterR);
                break;
            case "m":
                setLetter("M");
                setMeaning(
                    <>
                        <span>Maintain</span> mutually beneficial <span>partnerships.</span>
                    </>
                )
                setLetterImage(letterM);
                break;
            case "o":
                setLetter("O");
                setMeaning(
                    <>
                        <span>Optimize</span> technology for <span>sustainability.</span>
                    </>
                )
                setLetterImage(letterO);
                break;
            case "n":
                setLetter("N");
                setMeaning(
                    <>
                        <span>Nurture</span> seamless and <span>efficient services.</span>
                    </>
                )
                setLetterImage(letterN);
                break;
            case "i":
                setLetter("I");
                setMeaning(
                    <>
                        <span>Integrate</span> integrity into every <span>business step.</span>
                    </>
                )
                setLetterImage(letterI);
                break;
            default:
                setLetter("H");
                setMeaning(
                    <>
                        <span>Harness</span> innovation to deliver <span>the best solutions.</span>
                    </>
                )
        }
    }

    return (
        <section className='lettersCont'>
            <div className='imageCont'>
                <img src={letterImage} alt="H meanings" />
                <div>
                    <p>{meaning}</p>
                </div>
            </div>
            <div className='rectangle'>
                <div className='rectangleSatu'>
                    <div className="letter">
                        <h1>{letter}</h1>
                    </div>
                    <div className='firstRecta'>
                        <div className='firstRectaFirst'>
                            <div className='recta'></div>
                            <div id='h' onMouseOver={handleMouseOver} className='recta'></div>
                        </div>
                        <div className='firstRectaSecond'>
                            <div id='r' onMouseOver={handleMouseOver} className='recta'></div>
                            <div id='a' onMouseOver={handleMouseOver} className='recta'></div>
                        </div>
                    </div>
                </div>
                <div className='secondRecta'>
                    <div id='i' onMouseOver={handleMouseOver} className='recta'></div>
                    <div id='n' onMouseOver={handleMouseOver} className='recta'></div>
                    <div id='o' onMouseOver={handleMouseOver} className='recta'></div>
                    <div id='m' onMouseOver={handleMouseOver} className='recta'></div>
                </div>
            </div>
        </section>
    )
}

export default LettersMean;