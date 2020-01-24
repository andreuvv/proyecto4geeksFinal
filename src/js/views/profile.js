import React from "react";
import '../../styles/profile.css';

export const Profile = () => {
	return (
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGXDtCoDkikD9LPG1XFz_MpX1XKhs9mT9veS6F53PmsSoqTmC&s" class="profilePicture"/>
                </div>
                <div class="col-8">
                    <div class="card" style={{ width: 100 + "%" }}>
                        <div class="card-body">
                            <h1 class="card-title">Juanito Pérez</h1>
                            <h5 class="card-title">@Juanipe</h5>
                            <h5 class="card-title">Santiago, Chile</h5>
                            <p>Amo los gatos, el café, Gamer, Hijo de Maria Tereza</p>
                            <p>¡Vive y de vivir!</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                <nav className="navbar navbar-light bg-light mb-3">
			        <a to="#">
				        <span className="navbar-brand mb-1 h1">Participando</span>
			        </a>
			        <a to="#">
				        <span className="navbar-brand mb-2 h1">Creados</span>
			        </a>
		        </nav>
                </div>                
            </div>
        </div>
	);
};
