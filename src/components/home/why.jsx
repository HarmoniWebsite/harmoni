import { useState } from 'react';
import './why.css'

function Why() {
    const [isVisible, setIsVisible] = useState({
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false
    });

    const [styleP, setStyleP] = useState({
        a: {
            height: "150px", overflow: "hidden", transition: "height 0.5s ease, margin-top 0.5s ease", marginTop: "20px",
        },
        b: {
            height: 0, overflow: "hidden", transition: "height 0.5s ease, margin-top 0.5s ease", marginTop: 0,
        },
        c: {
            height: 0, overflow: "hidden", transition: "height 0.5s ease, margin-top 0.5s ease", marginTop: 0,
        },
        d: {
            height: 0, overflow: "hidden", transition: "height 0.5s ease, margin-top 0.5s ease", marginTop: 0,
        },
        e: {
            height: 0, overflow: "hidden", transition: "height 0.5s ease, margin-top 0.5s ease", marginTop: 0,
        },
        f: {
            height: 0, overflow: "hidden", transition: "height 0.5s ease, margin-top 0.5s ease", marginTop: 0,
        }
    }
    )

    function trans(key) {

        if (key === "a") {
            setStyleP(prevStyle => ({
                ...prevStyle,
                a: {
                    ...prevStyle.a,
                    height: isVisible.a ? "220px" : 0,
                    marginTop: isVisible.a ? "20px" : 0
                }
            }))
        } else {
            const newHeight = isVisible[key] ? 0 : "220px";
            const newMarginTop = isVisible[key] ? 0 : "20px";

            setStyleP(prevStyle => ({
                ...prevStyle,
                [key]: {
                    ...prevStyle[key],
                    height: newHeight,
                    marginTop: newMarginTop
                }
            })
            )
        }


    }

    const handleOnClick = (e) => {
        const key = e.currentTarget.id;

        switch (key) {
            case "a":
                setIsVisible(prevState => {
                    return {
                        ...prevState,
                        a: !prevState.a
                    }
                });
                trans(key);
                break;
            case "b":
                setIsVisible(prevState => {
                    return {
                        ...prevState,
                        b: !prevState.b
                    }
                });
                trans(key);
                break;
            case "c":
                setIsVisible(prevState => {
                    return {
                        ...prevState,
                        c: !prevState.c
                    }
                });
                trans(key);
                break;
            case "d":
                setIsVisible(prevState => {
                    return {
                        ...prevState,
                        d: !prevState.d
                    }
                });
                trans(key);
                break;
            case "e":
                setIsVisible(prevState => {
                    return {
                        ...prevState,
                        e: !prevState.e
                    }
                });
                trans(key);
                break;
            case "f":
                setIsVisible(prevState => {
                    return {
                        ...prevState,
                        f: !prevState.f
                    }
                });
                trans(key);
                break

        }
    }

    return (
        <section className="whyCont">
            <div className='title'>
                <h2>Why It's Better With Us?</h2>
            </div>
            <ul className='lists'>
                <li id='a' onClick={handleOnClick}>
                    <h3>Comprehensive, All-in-One Solutions</h3>
                    <p style={styleP.a} >Harmoni simplifies your IT and consumer needs by offering a wide range of products and services in one place. As your all-in-one provider, we make it easier, more efficient, and cost-effective to access essential solutions, reducing complexity and allowing you to focus on growing your business.</p>
                </li>
                <li id='b' onClick={handleOnClick}>
                    <h3>Innovation at the Core</h3>
                    <p style={styleP.b} >We embrace innovation by leveraging technologies. Whether it’s cloud migration, AI-driven applications, or automation, Harmoni provides solutions that enhance productivity, streamline workflows, and drive growth, helping your business stay ahead in today’s evolving digital environment.</p>
                </li>
                <li id='c' onClick={handleOnClick}>
                    <h3>Tailored to Your Needs</h3>
                    <p style={styleP.c}>Every business is unique, and we recognize that. Harmoni offers customized solutions tailored to your industry, goals, and challenges. Our approach ensures that you receive the best strategies, tools, and support needed to optimize operations, boost productivity, and drive long-term success.</p>
                </li>
                <li id='d' onClick={handleOnClick}>
                    <h3>Exceptional Customer Service</h3>
                    <p style={styleP.d}>Your satisfaction is our priority. Our friendly and professional team provides rapid, reliable support, ensuring your needs are met without delays. We focus on delivering outstanding service, resolving issues efficiently, and keeping your business on track, so you never fall behind in today’s fast-moving digital world.</p>
                </li>
                <li id='e' onClick={handleOnClick}>
                    <h3>Security You Can Trust</h3>
                    <p style={styleP.e}>Your data and operations are secure with us. We prioritize security at every level, from cloud protection to smart office security. Our disaster recovery solutions ensure minimal downtime, keeping your business running while protecting critical information from cyber threats, breaches, and disruptions.</p>
                </li>
                <li id='f' onClick={handleOnClick}>
                    <h3>Long-Term Partnerships</h3>
                    <p style={styleP.f}>We’re not just a provider—we strive to be your partner. Harmoni works closely with you, offering expert support and innovative solutions to drive growth, improve efficiency, and achieve digital transformation, ensuring your business stays competitive and adapts to the technology landscape.</p>
                </li>
            </ul>
        </section >
    )
}

export default Why;