import React, { useState, useEffect, useContext, Redirect, Route }  from 'react';
import '../../styles/login.css';
import { Link } from "react-router-dom";
import { Footer } from '../component/footer.js';
import { Context } from "../store/appContext";

export const Login = (props) => {
    
    const { store, actions } = useContext(Context);

    const [state,setState] = useState({

        correo:"",
        contrasena:""
    });

    function handleChange(e, propiedad) {
        setState({...state, [propiedad]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        actions.postUser("http://localhost:5000/login", "sesionUsuario", state , props.history);
    }
   
	return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div id="loginImage" className="col-6 left-align bg-primary">
                    <img src="/assets/images/logo.svg" alt="logo" className="img-fluid"></img>
                </div>
                <div className="col-6 right-side">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Correo electrónico" value={state.correo} onChange={(e)=>handleChange (e,"correo")} required></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="Contraseña" value={state.contrasena} onChange={(e)=>handleChange (e,"contrasena")} required ></input>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-primary" type="submit" onClick={handleSubmit} >Iniciar sesión</button>
                        </div>
                        <div className="form-group">
                            <button href="..." id="contraseña">¿Olvidaste tu contraseña?</button>
                        </div>
                        <div className="form-group">
                            <label>¿No tienes una cuenta? </label>
                            <Link to="/formregister">
                            <button href="..." id="registro"> Regístrate</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
        <Footer />
        </>
    );
};
