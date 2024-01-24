import './style.css';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav>
            <ul>
                <Link to="/project" className="LI">Project</Link>
                <Link to="/what" className="LI">What We Do</Link>
                <Link to="/about" className="LI">About Us</Link>
                <Link to="/events" className="LI">Events</Link>
                <Link to="/career" className="LI">Career</Link>
                <Link to="/contact" className="LI">Contact</Link>
            </ul>
        </nav>
    )
}