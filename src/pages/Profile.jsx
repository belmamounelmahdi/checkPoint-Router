import { useParams } from "react-router-dom";

const Profile = () => {


        const params = useParams()
        console.log()
    return ( 
        <div className="profile">
            <h4>Welcome Mr.{params.name} </h4>

        </div>
    );
}

export default Profile;