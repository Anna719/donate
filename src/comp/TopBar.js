import React from 'react';
import './topBar.css';
import logo from'../img/ox21logo_concept02b.png';
export default function TopBar() {
    return(
        <div className="topBar">
            <img
                className="topImg"
                src={logo}
                alt=""
            />
            <div className="topButton">
                <button className='buttonLogin'>broker login</button>
            </div>
        </div>
    )
}