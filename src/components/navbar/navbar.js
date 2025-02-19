import './navbar.css'
import {Link} from "react-router-dom";
import car from '../../assets/images/noun_Truck_3667956.svg'
import tel from '../../assets/images/noun_Telephone_637372.svg'

const Navbar = () => {
    return (
        <div className={'nav-bar-container'}>
            <div className={'nav-bar-sub-container'}>
                <div className={'nav-bar-left'}>
                    <div className={'nav-bar-item2'}>
                        <img src={tel} className={'img-car'}/>
                        <span>Appelez-nous au : <span>01 30 95 56 10.</span></span>
                    </div>
                    <div className={'nav-bar-item2'}>
                        <img src={car} className={'img-car'}/>
                        <span>Livraison offerte dès <span>59€ *</span></span>
                    </div>
                </div>
                <div className={'nav-bar-right'}>
                    <div className={'nav-bar-item'}>
                        <Link to="/">Blog</Link>
                    </div>
                    <div className={'nav-bar-item'}>
                        <Link to="/">Contacter-Nous</Link>
                    </div>
                    <div className={'nav-bar-item'}>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
