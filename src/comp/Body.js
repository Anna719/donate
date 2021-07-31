import React from 'react';
import './body.css';
import lady from '../img/lady_poster.png';
import logo from "../img/ox21logo_concept02b.png";

        

export default function Body () {
    return(

            <div className="bodySection">
                <img
                    className="topImgBody"
                    src={lady}
                    alt=""
                />
                <div className="inputSection">
                    <textarea placeholder="Lorem ip..." autoFocus></textarea>
                </div>
            </div>

    )
}
