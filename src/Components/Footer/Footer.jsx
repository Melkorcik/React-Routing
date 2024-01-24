import { useState } from 'react';
import './style.css';

export default function Footer(){
    const[value, setValue] = useState('');
    return(
        <footer>
            <div className="container-footer-data">
                <h1 className="title-design-footer">Design Home</h1>
                <div className="data-contact">
                    <div className="email-mode">
                        <p>310.900.4000</p>
                        <p>offce@ark.works</p>
                        <p>Mondy-Sunday 8:00 - 22:00</p>
                    </div>
                    <div className="address-content">
                        <p>212 Wilshire Blvd, Suite 1245</p>
                        <p>San Francisco, California</p>
                        <p>CA 90015</p>
                    </div>
                    <form className="email-address">
                        <h3>Newsletter Sing Up</h3>
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            value={value} 
                            onChange={e => setValue((e.target.value).toUpperCase())} 
                            style={{
                                border:`1px solid grey`
                            }}
                            className="Email_Address"
                        /><button className="button-footer"><strong>submit</strong></button><br/>
                        <span style={{color:'whitesmoke', fontSize:'11px'}}>{value.length > 20 ? 'address email is too long' : ''}</span>
                    </form>
                </div>
            </div>
        </footer>
    )
}