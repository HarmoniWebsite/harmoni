import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './services.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from 'swiper/modules';
import NavButton from './navButton';

// Image
import image1 from '../../assets/servicesImage/ser1.png';
import image2 from '../../assets/servicesImage/ser2.png';
import image3 from '../../assets/servicesImage/ser3.png';
import image4 from '../../assets/servicesImage/ser4.png';
import image5 from '../../assets/servicesImage/ser5.png';
import image6 from '../../assets/servicesImage/ser6.png';

const images = [image1, image2, image3, image4, image5, image6];


function Services() {
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src
        })
    }, [])

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [hash])

    const [number, setNumber] = useState('01');

    const handleSlideChange = (swiper) => {
        const images = [image1, image2, image3, image4, image5, image6];
        const realIndex = swiper.realIndex;

        setNumber("0" + (realIndex + 1));

        swiper.slides.forEach(slide => {
            slide.style.borderTop = "15px solid #D9D9D9";
            slide.style.background = `linear-gradient(165deg, #F9F9F9 18.56%, rgba(217, 217, 217, 0.00) 174.71%)`
            slide.style.opacity = "0.5";
            slide.style.color = "#376A25"
        });

        const activeSlide = swiper.slides[swiper.activeIndex];
        console.log(images[realIndex]);
        if (activeSlide) {
            activeSlide.style.borderTop = "15px solid #8DBE40";
            activeSlide.style.background = `linear-gradient(165deg, #1A3E1A 18.56%, rgba(55, 106, 37, 0.00) 174.71%), url(${images[realIndex]}) `;
            activeSlide.style.backgroundSize = "cover";
            activeSlide.style.opacity = "1";
            activeSlide.style.color = "#F9F9F9"
        }

        console.log(realIndex)
    };


    return (
        <section id='services' className="servicesCont">
            <Swiper onSlideChange={handleSlideChange} loop={true} className="swiperCont" modules={[Navigation]} speed={700} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 } }}>
                <div className='titleCont'>
                    <div className="sTitle">
                        <h1>Services</h1>
                        <h1>{number}<span>/06</span></h1>
                    </div>
                    <NavButton></NavButton>
                </div>

                <SwiperSlide id='s1' className="service">
                    <div className="title">
                        <h2 className="name">Cloud Solutions</h2>
                        <p className="type">Service</p>
                    </div>
                    <ul className="info">
                        <li>Cloud Migration</li>
                        <li>Cloud Management</li>
                        <li>Cloud Platforms</li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide id='s2' className="service">
                    <div className="title">
                        <h2 className="name">IT Security Services</h2>
                        <p className="type">Service</p>
                    </div>
                    <ul className="info">
                        <li>Security assessments</li>
                        <li>Continuous monitoring</li>
                        <li>Disaster recovery services</li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide id='s3' className="service">
                    <div className="title">
                        <h2 className="name">Application Development</h2>
                        <p className="type">Service</p>
                    </div>
                    <ul className="info">
                        <li>Custom web and mobile application development</li>
                        <li>Cloud-based software integrations</li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide id='s4' className="service">
                    <div className="title">
                        <h2 className="name">IT Consulting</h2>
                        <p className="type">Service</p>
                    </div>
                    <ul className="info">
                        <li>IT strategy</li>
                        <li>System architecture</li>
                        <li>Latest technologies for business transformation</li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide id='s5' className="service">
                    <div className="title">
                        <h2 className="name">Software Solutions</h2>
                        <p className="type">Product</p>
                    </div>
                    <ul className="info">
                        <li>Custom business applications</li>
                        <li>Collaboration tools</li>
                        <li>Security applications</li>
                    </ul>
                </SwiperSlide>
                <SwiperSlide id='s6' className="service">
                    <div className="title">
                        <h2 className="name">Business Process Outsourcing</h2>
                        <p className="type">Product</p>
                    </div>
                    <ul className="info">
                        <li>Automation systems</li>
                        <li>Smart lighting</li>
                        <li>Security solutions</li>
                    </ul>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default Services;