import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import './Program.css';
import Nav from './Nav'

function MyLog(){
    return(
        <div className="m">
            <Nav></Nav>
            <div className="pContainer">
                <div className="pTagline">My Log</div> 
            </div>
            <div className="tagline">
               My Total Footprint score is... 
            </div>
            <div className="scoreC">
                <div className="score">
                    1800
                </div>
            </div>
              
        </div>
    )    
}

export default MyLog;