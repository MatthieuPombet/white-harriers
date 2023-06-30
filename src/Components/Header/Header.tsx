import logo from '../../assets/logo.png';
import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <div className="logoName">
                <img src={logo} width={100}/>
                <div className="name">White Harriers de Suresnes</div>
            </div>
            <div className="links">
                <div className="club">Le Club</div>
                <div className="inscriptions">Les inscriptions</div>
                <div className="actu">Actualités</div>
            </div>
        </div>
    )
}

export default Header;