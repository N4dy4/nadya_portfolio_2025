import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div role="tablist" className="tabs tabs-bordered">
            <Link to="/" className="tab" role="tab" aria-label="Home">Home</Link>
            <Link to="/activities" className="tab" role="tab" aria-label="Activities">Activities</Link>
            <Link to="/projects" className="tab" role="tab" aria-label="Projects">Projects</Link>
            <Link to="/contact" className="tab" role="tab" aria-label="Contact">Contact</Link>
        </div>
    );
};

export default Navbar;
