import './style.css';
import background from './img/istockphoto-1491794881-2048x2048.jpg';
import bottomImg from './img/istockphoto-1456643979-2048x2048.jpg';
import upImg from './img/istockphoto-1325867076-2048x2048.jpg';

export default function Begin(){
    return<section style={{backgroundImage:`url(${background})`}} className="main">
        <div className="container">
            <h1 className="title">Design your Home</h1>
            <img src={bottomImg} alt="img" className="bottom"/>
            <img src={upImg} alt="" className="up"/>
        </div>
    </section>
}