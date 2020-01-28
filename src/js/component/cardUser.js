import React from 'react';

export const CardUser = () => {
    return (

        <div class="card" style={{ width: 100 + "%" }}>
            <div class="card-group">
                <div class="card">
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGXDtCoDkikD9LPG1XFz_MpX1XKhs9mT9veS6F53PmsSoqTmC&s" alt="Card image cap"></img>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Juanito Pérez</h5>
                        <p class="card-text">@Juanete</p>
                        <p class="card-text"><small class="text-muted">Creador</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}  