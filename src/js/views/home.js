import React from "react";
import '../../styles/home.css';
import { Card } from '../component/card.js';

export const Home = () => {
	return (
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="card" style={{ width: 100 + "%" }}>
                        < Card />
                    </div>
                    <br></br>
                    <div class="card" style={{ width: 100 + "%" }}>
                        < Card />
                    </div>
                    <br></br>
                    <div class="card" style={{ width: 100 + "%" }}>
                        < Card />
                    </div>
                    <br></br>
                    <div class="card" style={{ width: 100 + "%" }}>
                        < Card />
                    </div>
                </div>
            </div>
        </div>
	);
};
