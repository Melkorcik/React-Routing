import './style.css';
import data from './data';
export default function Galery(){
    return(
        <section className="container-galery">
            <div style={{position:'relative', marginTop:'136px', marginLeft:'211px'}}>
                <h1 className="title-galery">Projects</h1>
                <button className="btn-arrow"><strong>All Projects</strong></button>
            </div>
            <div className="container-home">
                {
                    data.map((el, i) => {
                        let cl = "container-photos" + String(`-${i}`);
                        return(<figure key={el.id} className={cl}>
                            <img src={el.photo} alt="img" className="img-home"/>
                                <figcaption>
                                    <h1 className="title-home"><strong>{el.title}</strong></h1>
                                    <p className="description-home">{el.description}</p>
                                </figcaption>
                        </figure>)
                    })
                }
            </div>
            <footer className="footer">
                <h2>Cultur of design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsum iure, numquam 
                   nobis eveniet, exercitationem aliquam voluptatibus tenetur assumenda perspiciatis ab alias debitis 
                   necessitatibus minus laborum voluptas quibusdam repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsum iure, numquam 
                   nobis eveniet, exercitationem aliquam voluptatibus tenetur assumenda perspiciatis ab alias debitis 
                   necessitatibus minus laborum voluptas quibusdam repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsum iure, numquam 
                   nobis eveniet, exercitationem aliquam voluptatibus tenetur assumenda perspiciatis ab alias debitis 
                   necessitatibus minus laborum voluptas quibusdam repellendus?</p>
                <button className="btn-team">Meet the team</button>
            </footer>
        </section>
    )
}