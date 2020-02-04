import React, { Component } from 'react';
import '../../styles/formregister.css';




export const FormRegister = () => {
    return (
        <div className="container-fluid">
            <div className="col" className="text-center" id="reg">
                <h1> Regístrate</h1><br></br><br></br>
            </div>
            <form >
                <div className="row">
                    <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="Nombre" required />
                    </div>
                    <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="Apellido" required /><br></br>
                    </div>

                    <div className="col-md-12">
                        <input type="email" className="form-control" placeholder="Email" required /><br></br>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 ">
                        <select className="form-control" placeholder="código de área" required >
                            <option value="">Código de área</option>
                            <option value="Celular">+569</option>
                            <option value="Fijo">+562</option>
                        </select>
                    </div>


                    <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="Número de contacto" required /><br></br>
                    </div>

                    <div className="col-md-12">
                        <input type="email" className="form-control" placeholder="Usuario" required /><br></br>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6 ">
                        <input type="password" className="form-control" placeholder="Contraseña" minLength="8" required />
                    </div>
                    <div className="col-md-6 ">
                        <input type="password" className="form-control" placeholder="Confirmar contraseña" minLength="8 " required /><br></br>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-primary btn-block">Registrar</button>
                    </div>
                </div>
            </form>
        </div >
    )
}
