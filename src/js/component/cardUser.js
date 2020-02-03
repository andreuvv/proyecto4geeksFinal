import React from 'react';

export const CardUser = () => {
    return (

        <div className="card" style={{ width: 100 + "%" }}>
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGXDtCoDkikD9LPG1XFz_MpX1XKhs9mT9veS6F53PmsSoqTmC&s" alt="Card cap"></img>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Juanito Pérez</h5>
                        <p className="card-text">@Juanete</p>
                        <p className="card-text"><small className="text-muted">Creador</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}  