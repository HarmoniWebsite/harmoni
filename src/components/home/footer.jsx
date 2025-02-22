import './footer.css'
import { Link } from 'react-router';

function Footer() {
    return (
        <footer className="footerCont">
            <div className="footer">
                <ul className="link">
                    <li>
                        <Link to="/#services">
                            <a onClick={
                                () => {
                                    const element = document.getElementById('services');
                                    element?.scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                }
                            } >Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/#aboutUs'>
                            <a onClick={
                                () => {
                                    const element = document.getElementById('aboutUs');
                                    element?.scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                }
                            }>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact-us">
                            <a href="">Contact Us</a>
                        </Link>
                    </li>
                </ul>
                <div className="contact">
                    <p className="phone">+62 2150323689</p>
                    <p className="alamat">Gold Coast Office, Pantai Indah Kapuk 2A Floor, Unit K-N, Kamal Muara, Penjaringan, North Jakarta City, Jakarta 14470</p>
                </div>
            </div>
            <p className="copy">©2025 PT Harmoni Makmur Teknologi Solusi</p>
        </footer>
    )
}

export default Footer;