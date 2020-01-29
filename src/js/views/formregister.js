import React, { Component } from 'react';
import '../../styles/formregister.css';




export const FormRegister = () => {
    return (
        <div class="container">
            <div class="col-md-12 text-center" id="reg">
                <h1> Regístrate</h1>
            </div>
            <form >          
                <div class="row">
                    <div class="col-md-6 ">
                        <input type="text" class="form-control" placeholder="Nombre" required />
                    </div>                    
                    <div class="col-md-6 ">
                        <input type="text" class="form-control" placeholder="Apellido" required /><br></br>
                    </div>
                    <div class="col-md-8">
                        <input type="email" class="form-control" placeholder="Email" required/><br></br>
                    </div>
                    <div class="col-md-6">
                        <select class="form-control" required >
                            <option value="">Codigo de área</option>
                            <option value="celular">+569</option>
                            <option value="fijo">+562</option>
                        </select><br></br>
                        <input type="text" class="form-control" placeholder="Usuario" required /><br></br>
                    </div>
                    <div class="col-md-6 ">
                        <input type="text" class="form-control" placeholder="Número de contacto" required/><br></br>
                    </div>
                    <div class="col-md-6 ">
                        <input type="password" class="form-control" placeholder='Contraseña' minLength="5" required/>
                    </div>
                    <div class="col-md-6 ">
                        <input type="password" class="form-control" placeholder='Confirmar contraseña' minLength="5" required/><br></br>
                    </div>
                    <button class="btn btn-primary btn-block">Registrarme</button>
                </div>
               
            </form>
        </div>
    )
}
