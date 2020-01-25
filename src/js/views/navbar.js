import React from 'react';

export const Navbar = () => {
    return (

        <div class="row">
            <div class="col-md-11 text-center">
                <nav class="navbar fixed-top navbar-light bg-light">

                    <h1 class="navbar-brand">JoinUs</h1>

                    <div class="col-md-7">
                        <button type="button" class="btn btn-primary btn-sm  float-right" >HOME</button>
                    </div>

                    <button type="button" class="btn btn-success btn-sm  float-right">PERFIL</button>

                    <div class="col-md-1">
                        <button type="button" class="btn btn-warning btn-sm float-right" href="#">NUEVO PROYECTO</button>
                    </div>

                    <div class="col-md-1">
                        <button type="button" class="btn btn-danger btn-sm  float-right">CERRAR SESIÓN</button>
                    </div>
                </nav>
            </div>
        </div>

    )
}


