import imgDsn1 from '../assets/pngegg (32).png'
import imgDsn2 from '../assets/pngegg.png'

const Design = () => {
    return (
        <div className="design">
            <div className="card">
                <img src={imgDsn1} alt="" />
                <h3>Création LOGO</h3>
                <h5>à partir de 149 DHS</h5>
                <button>Créer un LOGO</button>
            </div>
            <div className="card">
                <img src={imgDsn2} alt="" />
                <h3>Conception Affiche & Flyer</h3>
                <h5>à partir de 149 DHS</h5>
                <button>Créer une Affiche</button>
            </div>
        </div>
    )
}

export default Design