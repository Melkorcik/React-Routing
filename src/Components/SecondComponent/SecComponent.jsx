import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './style.css';
import Project from './Project/Project';
import What from './What/What';
import About from './About/About';
import Events from './Events/Events';
import Career from './Career/Career';
import Contact from './Contact/Contact';
import Err from './Err/Err';
import Nav from './Nav/Nav';
import background from './img/istockphoto-1455884361-2048x2048.jpg';

export default function Menu(){
    
    return(
        <section style={{backgroundImage:`url(${background})`}} className="content-menu">
            <header>
                <h1 className="title-logo"><strong>Arcworks.</strong></h1>     
                <BrowserRouter>
                    <Nav/>
                    <Routes>
                        <Route exect path="*" element={<Err/>}></Route>
                        <Route exect path="/project" element={<Project/>}></Route>
                        <Route exect path="/what" element={<What/>}></Route>
                        <Route exect path="/about" element={<About/>}></Route>
                        <Route exect path="/events" element={<Events/>}></Route>
                        <Route exect path="/career" element={<Career/>}></Route>
                        <Route exect path="/contact" element={<Contact/>}></Route>
                    </Routes>
                </BrowserRouter>
            </header>
            
        </section>
    )
}