import "./LeClub.css";
import { Card } from 'primereact/card';
import logo from '../../assets/ecole.jpg';

const LeClub = () => {
    return (<div>
        <Card title="Histoire" className="histoire">
            <p className="m-0">
                Le club des White Harriers a été fondé en 1908...
            </p>
        </Card>
        <Card title="Ecole d'athlétisme (4-11 ans)" className="ecole">
            <p className="m-0">
                Le club d'athlétisme de Suresnes accueille cette saison plus de 90 jeunes athlètes dans ces catégories d'âges. Ce qui classe le club de Suresnes dans le top des clubs formateurs du département. Le club propose 2 séances par semaine pour les jeunes athlètes. Des compétitions sont également prévues chaque saison (3-4 par saison)
            </p>
            <p>Les jours d'entrainements et les horaires sont les suivants :</p>
            <p>- Mardi 17h00 à 18h30</p>
            <p>- Mercredi 14h00 à 15h30</p>
            <p>- Samedi 10h00 à 11h30</p>
            <img src={logo} width={500}/>
            <p>Que fait-on à l'école d'athlétisme ?</p>
            <p>Aux Whites Harriers de Suresnes, on apprend les disciplines de l'athlétisme en s'amusant!
Les séances commencent toujours par un footing en commun. C'est un moment où l'on discute et rigole avec ses copains tout en préparant le début de séance.
Etirements et gammes sont les mots d'ordres, les exercices sont choisis par les athlètes et démontrés par les entraineurs ou athlètes confirmés. 
Ensuite, des ateliers sont mis en place par les entraineurs visant à améliorer leur technique sur les disciplines.</p>
        </Card>
        <div className="jeunes">
            <h1>Jeunes (12-15 ans)</h1>
            <p>Blablabla</p>
        </div>
        <div className="competition">
            <h1>Compétition</h1>
            <p>Blablabla</p>
        </div>
        <div className="loisir">
            <h1>Athle loisir et marche nordique</h1>
            <p>Blablabla</p>
        </div>
    </div>)
}

export default LeClub;