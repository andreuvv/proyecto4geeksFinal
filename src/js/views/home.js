import React from "react";
import '../../styles/home.css';
import { Card } from '../component/card.js';
import { Link } from "react-router-dom";

export const Home = () => {
	return (
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="card" style={{ width: 100 + "%" }}>
                    <Link to="/detail">
                        < Card />
                    </Link>   
                    </div>
                    <br></br>
                    <div class="card" style={{ width: 100 + "%" }}>
                    <Link to="/detail">
                        < Card />
                    </Link> 
                    </div>
                    <br></br>
                    <div class="card" style={{ width: 100 + "%" }}>
                    <Link to="/detail">
                        < Card />
                    </Link> 
                    </div>
                    <br></br>
                    <div class="card" style={{ width: 100 + "%" }}>
                    <Link to="/detail">
                        < Card />
                    </Link> 
                    </div>
                </div>
            </div>
        </div>
	);
};
