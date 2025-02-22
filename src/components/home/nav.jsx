import logo from '../../assets/hmtsName.svg';
import './nav.css'
import { Link } from 'react-router';

function Nav() {
    return (
        <>
            <header className="navContainer">
                <nav>
                    <Link to="/">
                        <a href="">
                            <img src={logo} alt="Harmoni Logo" />
                        </a>
                    </Link>

                    <div className='letsCont'>
                        <Link to="/contact-us">
                            <a href="">Let's Talk</a>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Nav
