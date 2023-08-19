import { Card } from 'primereact/card';
import logo from '../../assets/actu1.jpg';
import logo1 from '../../assets/actu2.jpg';
import "./Actus.css";

const Actus = () => {
    return (<div className='Actus'>
        <Card title="Les grosses performances s’enchaînent sur les LIFA et aux meetings" className="actu">
            <p className="m-0">Clement est trop beau !! Meme si c'est pixelisé</p>
            <img src={logo} width={300}/>
        </Card>
        <Card title="La fête a battu son plein le week-end du 20 et 21 mai" className="actu">
            <img src={logo1} width={300}/>
            <p className="m-0">Le week-end dernier avaient lieu les traditionnels championnats interclubs. Plus de 150 athlètes ont été monopolisés afin de former les 2 équipes de l’entente Athlé 92. 
Ces dernières ont été constituées de concert par Fabrice Manouvrier, Cyril Pocréaux et Romain Mondet. 
Nous leur adressons un grand merci pour leur investissement depuis maintenant plus d’un mois, ensemble ils ont oeuvré dans l'objectif d'avoir des équipes les plus compétitives possibles. </p>
        </Card>
    </div>)
}

export default Actus;