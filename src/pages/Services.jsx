import { Link, Outlet } from "react-router-dom";

const Services = () => {
    return ( 
        <div className="services">
            <h1>My Services</h1> 
            <br />
            <br />
            <nav>
                <Link to="marketing">Digital Marketing</Link>
                <Link to="design">Design</Link>
            </nav>
            <Outlet />
        </div>
        
    );
}

export default Services;