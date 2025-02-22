import './iCreate.css'
import iconSVG from '../../assets/icon.svg'
import icon1 from '../../assets/iCreate/Innovative.svg';
import icon2 from '../../assets/iCreate/Collaboration.svg';
import icon3 from '../../assets/iCreate/Responsibility.svg';
import icon4 from '../../assets/iCreate/Excellence.svg';
import icon5 from '../../assets/iCreate/Accountability.svg';
import icon6 from '../../assets/iCreate/Trust.svg';
import icon7 from '../../assets/iCreate/Empathy.svg';

function ICreate() {
    const icons = [icon1, '', icon2, icon3, icon4, icon5, icon6, '', icon7];

    const boxes = [];
    const contents = [
        {
            letter: 'I',
            name: 'nnovative',
            title: 'We embrace visionary solutions.'
        },
        {
            letter: '',
            name: '',
            title: ''
        },
        {
            letter: 'C',
            name: 'ollaboration',
            title: 'We value teamwork to achieve goals.'
        },
        {
            letter: 'R',
            name: 'esponsibility',
            title: 'We act with integrity and ethics.'
        },
        {
            letter: 'E',
            name: 'xcellence',
            title: 'We deliver the highest quality service.'
        },
        {
            letter: 'A',
            name: 'ccountability',
            title: 'We take ownership of our actions.'
        },
        {
            letter: 'T',
            name: 'rust',
            title: 'We build relation through reliability.'
        },
        {
            letter: '',
            name: '',
            title: ''
        },
        {
            letter: 'E',
            name: 'mpathy',
            title: "We care about our clients' success."
        },
    ]

    for (let i = 0; i < 9; i++) {
        if (i === 1 || i === 7) {
            boxes.push(
                <div key={i} className='content'>
                </div >
            )
        } else {
            boxes.push(
                <div key={i} className='content'>
                    <div className='text'>
                        < img src={icons[i]} alt="" />
                        <div className="textDalam">
                            <h3>{contents[i].letter}<span>{contents[i].name}</span></h3>
                            <p>{contents[i].title}</p>
                        </div>
                    </div >
                </div >
            )
        }

    }

    return (
        <section className='createCont'>
            <div className='content'>
            </div >
            <div className='content'>
            </div >
            <div className='title'>
                <h1>I<br /><span>CREATE</span></h1>
            </div>
            {boxes}
        </section>
    )
}

export default ICreate;