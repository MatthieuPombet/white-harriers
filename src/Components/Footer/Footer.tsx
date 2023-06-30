import insta from '../../assets/insta.png';
import facebook from '../../assets/facebook.png';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="stade">
                <h3>White Harriers Suresnes</h3>
                <p>Stade Maurice Hubert</p>
                <p>21 Av. Alexandre Maistrasse, 92500 Rueil-Malmaison</p>
            </div>
            <div className="Contacts">
                <h3>Contacts</h3>
                <p>Mail : whiteharriers@hotmail.fr</p>
                <p>Téléphone : 06.07.41.46.58</p>
            </div>
            <div className="reseaux">
                <h3>Suivez-nous !!!</h3>
                <div className="icones">
                <a href="https://www.instagram.com/whiteharriers/?hl=fr"><img src={insta} width={50}/></a>
                <a href="https://www.facebook.com/WhiteHarriers/"><img src={facebook} width={50} /></a></div>
            </div>
        </div>
    )
}

export default Footer;