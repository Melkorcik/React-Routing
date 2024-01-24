import './style.css';
import arrow from './free-icon-switch-arrows-9266535.png';
import image from './istockphoto-1722731942-2048x2048.jpg';
import image2 from './istockphoto-804312470-2048x2048.jpg';

export default function ThirdComponent(){
    return(
        <section className="section-with-two-images">
            <img src={image} alt="img" className="image"/>
            <img src={image2} alt="img" className="image_"/>
            <img src={arrow} alt="img" className="arrow"/>
        </section>
    )
}