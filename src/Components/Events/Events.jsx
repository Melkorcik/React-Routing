import './style.css';
import data from "./data";
export default function Events(){
    return(
        <section className="container-events">
                <div className="box-ev">
                    <h1 style={{fontSize:'40px'}}>Events</h1>
                    <button style={{backgroundColor:'rgba(29, 0, 0, 0)', padding:'12px', width:'122px'}}>All Events</button>
                </div>
                <div className="box-desc-ev">
                    {
                        data.map(el => {
                            return(
                                <div className="card-events">
                                    <p>{el.date}</p>
                                    <h1>{el.title}</h1>
                                    <h3>{el.marker}</h3>
                                </div>
                            )
                        })
                    }
                </div>
        </section>
    )
}