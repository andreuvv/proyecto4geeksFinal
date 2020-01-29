import React from "react";
import '../../styles/login.css';
import { Link } from "react-router-dom";

export const Login = () => {
	return (
        <div className="container">
            <div className="row">
                <div id="loginLogo" className="col-12">
                    <img id="logo" src="https://i.imgur.com/JiDOyLU.png" className="img-fluid rounded float-left"></img>
                </div>
                <div id="loginImage" className="col-6 left-align">
                    <img src="https://i.imgur.com/MH5zeke.jpg" className="img-fluid"></img>
                </div>
                <div className="col-6 right-side">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Correo electrónico"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="Contraseña"></input>
                        </div>
                        <div className="form-group">
                            <Link to="/home" className="btn btn-primary">Iniciar sesión</Link>
                        </div>
                        <div className="form-group">
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div className="form-group">
                            <label>¿No tienes una cuenta? </label>
                            <Link to="/formregister">
                            <a> Regístrate</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
	);
};
