import React from "react";
import '../../styles/home.css';
import { Card } from '../component/card.js';
import { Link } from "react-router-dom";

export const Home = () => {
	return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="card" style={{ width: 100 + "%" }}>
                    <Link to="/detail" className="cardlink">
                        < Card />
                    </Link>   
                    </div>
                    <br></br>
                    <div className="card" style={{ width: 100 + "%" }}>
                    <Link to="/detail" className="cardlink">
                        < Card />
                    </Link> 
                    </div>
                    <br></br>
                    <div className="card" style={{ width: 100 + "%" }}>
                    <Link to="/detail" className="cardlink">
                        < Card />
                    </Link> 
                    </div>
                    <br></br>
                    <div className="card" style={{ width: 100 + "%" }}>
                    <Link to="/detail" className="cardlink">
                        < Card />
                    </Link> 
                    </div>
                </div>
            </div>
        </div>
	);
};
