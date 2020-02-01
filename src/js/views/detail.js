import React from "react";
import '../../styles/detail.css';
import { CardUser } from '../component/cardUser.js';
import { CardDetail } from '../component/cardDetail.js';
import { Link } from "react-router-dom";

export const Detail = () => {
	return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div class="card" style={{ width: 100 + "%" }}>
                        < CardDetail />   
                    </div>
                </div>
                <div className="col-4 right-side">
                    <div class="card" style={{ width: 100 + "%" }}>
                        <Link to="/profile" className="cardlink">
                            < CardUser />
                        </Link>   
                    </div>
                </div>
            </div>
        </div>
	);
};
