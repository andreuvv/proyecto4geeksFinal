import React, { useState, useEffect, useContext }  from 'react';
import '../../styles/formregister.css';
import { Context } from "../store/appContext";

export const FormRegister = () => {

    const { store, actions } = useContext(Context);

    const [state,setState] = useState({

            nombre:"",
            apellido:"",
            correo:"",
            contrasena:"",
            nombre_usuario:""
        });
    
    function handleChange(e, propiedad) {
        setState({...state, [propiedad]: e.target.value});
    }

    function handleSubmit(e) {
        actions.post("http://localhost:5000/usuario", "usuario", state );
        e.preventDefault();
        console.log(state);
    }


    return (
        <div className="container-fluid">
            <div className="col" className="text-center" id="reg">
                <h1> Regístrate</h1><br></br><br></br>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="Nombre" value={state.nombre} onChange={(e)=>handleChange (e,"nombre")} required />
                    </div>
                    <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="Apellido" value={state.apellido} onChange={(e)=>handleChange (e,"apellido")} required /><br></br>
                    </div>

                    <div className="col-md-12">
                        <input type="email" className="form-control" placeholder="Correo electrónico" value={state.correo} onChange={(e)=>handleChange (e,"correo")} required /><br></br>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Nombre de Usuario" value={state.nombre_usuario} onChange={(e)=>handleChange (e,"nombre_usuario")} required /><br></br>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6 ">
                        <input type="password" className="form-control" placeholder="Contraseña" value={state.contrasena} onChange={(e)=>handleChange (e,"contrasena")} minLength="8" required />
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-primary btn-block" type="submit" value="Submit" >Registrar</button>
                    </div>
                </div>
            </form>
        </div >
    )
}
