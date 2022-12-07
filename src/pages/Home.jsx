import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return ( 
        <div className="home">
            <div className="landing">
            <button onClick={() => navigate('/profile/mahdi')}>
                Nivagate to profile
            </button>
            </div>

        </div>
    );
}

export default Home;