import imgInsta from '../assets/pngegg (20).png'
import imgWhtsapp from '../assets/pngegg (22).png'
const Footer = () => {

    return ( 
        <div className="footer">
            <a href="">
                <img className='icone-social' src={imgInsta} alt="" />
            </a>
            <a href="">
                <img className='icone-social' src={imgWhtsapp} alt="" />
            </a>
        </div>
    );
}

export default Footer;