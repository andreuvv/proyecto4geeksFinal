import React, { Component } from 'react';
import '../../styles/formregister.css';




export const FormRegister = () => {
    return (
        <div class="container-fluid">
            <div class="col" id="reg">
                <h1> Regístrate</h1><br></br><br></br>
            </div>
            <form >
                <div class="row">
                    <div class="col-md-6 ">
                        <input type="text" class="form-control" placeholder="Nombre" required />
                    </div>
                    <div class="col-md-6 ">
                        <input type="text" class="form-control" placeholder="Apellido" required /><br></br>
                    </div>

                    <div class="col-md-12">
                        <input type="email" class="form-control" placeholder="Email" required /><br></br>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 ">
                        <select class="form-control" placeholder="código de área" required >
                            <option value="">Código de área</option>
                            <option value="Celular">+569</option>
                            <option value="Fijo">+562</option>
                        </select>
                    </div>


                    <div class="col-md-6 ">
                        <input type="text" class="form-control" placeholder="Número de contacto" required /><br></br>
                    </div>

                    <div class="col-md-12">
                        <input type="email" class="form-control" placeholder="Usuario" required /><br></br>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-6 ">
                        <input type="password" class="form-control" placeholder="Contraseña" minLength="8" required />
                    </div>
                    <div class="col-md-6 ">
                        <input type="password" class="form-control" placeholder="Confirmar contraseña" minLength="8 " required /><br></br>
                    </div>
                    <div class="col-md-12">
                        <button class="btn btn-primary btn-block">Registrar</button>
                    </div>
                </div>
            </form>
        </div >
    )
}
