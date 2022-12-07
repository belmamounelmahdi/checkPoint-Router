import imgMrk1 from '../assets/pngegg (1).png'
import imgMrk2 from '../assets/pngegg (2).png'

const DigitalMarketing = () => {
    return (
        <div className="marketing">
            <div className="card">
                <img src={imgMrk1} alt="" />
                <h3>Gestion des pages réseaux sociaux</h3>
                <h5>à partir de 499 DHS/mois</h5>
                <button>Profiter</button>
            </div>
            <div className="card">
                <img src={imgMrk2} alt="" />
                <h3>Création des campagnes Publicitaires </h3>
                <h5>à partir de 999 DHS/mois</h5>
                <button>Profiter</button>
            </div>
        </div>
    )
}

export default DigitalMarketing