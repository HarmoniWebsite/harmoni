import daun from "../../assets/daun.svg"
import './titleHeader.css'

function TitleHeader() {
    return (
        <section className="titleContact">
            <div className="mainTitleCont">
                <div className="bigOne">
                    <h1>Let’s Talk Tech. We’re <span>Happy</span> to <span>Help!</span></h1>
                </div>
                <div className="smallOne">
                    <p>Whether you need <span>expert advice, technical support,</span> or <span>a custom solution for your business,</span> our team at Tech Solution is <span>here for you.</span> <img width="17" height="17" src={daun} alt="" /></p>
                </div>
            </div>
        </section>
    )
}

export default TitleHeader