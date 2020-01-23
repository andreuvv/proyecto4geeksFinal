import React from "react";
import '../../styles/login.css';

export const Login = () => {
	return (
        <div class="container">
            <div class="row">
                <div class="col-6">
                   <h1>JoinUs</h1>
                </div>
                <div class="col-6 left-side">

                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Correo electrónico"></input>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" placeholder="Contraseña"></input>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                            </div>
                            <div class="form-group">
                                <a href="#">¿Olvidaste tu contraseña?</a>
                            </div>
                            <div class="form-group">
                                <label>¿No tienes una cuenta? </label>
                                <a href="#"> Regístrate</a>
                            </div>
                        </form>
                </div>
            </div>
        </div>
	);
};
