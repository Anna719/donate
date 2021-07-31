import React from 'react';
import './footer.css';

export default function Footer(){
    return(
        <div className="footer">
            <div className="centeredButton">
               <button className='buttonDonate'>donate</button>
            </div>
            <ul className="footerList">
                <li className="footerListItem">about</li>
                <li className="footerListItem">legal</li>
                <li className="footerListItem">become broker</li>
            </ul>

        </div>
    )
}