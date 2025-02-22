import './quotes.css'
import image1 from '../../assets/quotesImage/quo1.png'
import image2 from '../../assets/quotesImage/quo2.png'
import image3 from '../../assets/quotesImage/quo3.png'

function Quotes() {
    return (
        <section className="quotesCont">
            <div className='title'>
                <div className='rectaCont'>
                    <div className='recta lightG'></div>
                    <div className="recta green"></div>
                    <div className="recta darkG"></div>
                </div>
                <p className='text'>
                    At Harmoni, we believe in <span className='lightG'>creating seamless harmony between technology, efficiency, and your needs</span>. Let’s shape the future together— <span className='lightG'>because</span><span className='green'> when you grow,</span><span className='darkG'> we grow.</span>
                </p>
            </div>
            <div className='images'>
                <div className="leftImage">
                    <img className='leftOne' src={image1} />
                    <div className="leftOneTwo">
                        <div className='leftTwo'></div>
                        <img className='leftThree' src={image3} />
                    </div>
                </div>
                <div className="rightImage">
                    <div className='rightOne'></div>
                    <img className='rightTwo' src={image2} />
                </div>
            </div>
        </section>
    )
}

export default Quotes;