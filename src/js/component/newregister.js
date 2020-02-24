import React, { useState, useEffect, useContext, Redirect, Route } from 'react';
import { Context } from "../store/appContext";

export const NewRegister = (props) => {

    const { store, actions } = useContext(Context);
    console.log(store.sesionUsuario)
    const [state, setState] = useState({
        titulo: "",
        descripcion: "",
        fecha_limite: "",
        estado_evento: "Activo",
        usuario_id: 0
    });

    function handleChange(e, propiedad) {
        setState({ ...state, [propiedad]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let state2 = Object.assign(state, {usuario_id:store.sesionUsuario.id});
        actions.post("http://localhost:5000/evento", "eventos", state2,props.history);
    }


    return (
        <div>
        <span className="navbar-brand mb-0 h1" data-toggle="modal" data-target="#crearEvento">
            Crear Evento 
        </span>
        <div className="modal fade" id="crearEvento" tabindex="-1" role="dialog" aria-labelledby="creacionEvento" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="creacionEvento">Crear nuevo evento</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <form onSubmit={handleSubmit} enctype='multipart/form-data'>
                                <div className="row">
                                    <div className="col-12" ><br></br>
                                        <input type="text" className="form-control" placeholder="Nombre del evento" value={state.titulo} onChange={(e) => handleChange(e, "titulo")} required></input><br></br>
                                    </div>
                                    <div className="col-12 ">
                                        <input type="text" className="form-control" placeholder="Descripción del evento" value={state.descripcion} onChange={(e) => handleChange(e, "descripcion")} required></input><br></br>
                                    </div>
                                </div>
                                <label for="avatar">Seleccione foto del evento: </label>
                                <div className="col-md-0"></div>
                                <input type="file" accept="image/png, image/jpeg" name='photo'></input><br></br><br></br><br></br>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Fecha Término</label>
                                        <input type="date" className="form-control" placeholder="Fecha término del evento" value={state.fecha_limite} onChange={(e) => handleChange(e, "fecha_limite")} required/><br></br>
                                    </div>
                                </div>
                                <br></br>
                                <label>Requerimientos</label>
                                <div className="row">
                                    <div className="col-md-3 ">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary"  type="submit" onClick={handleSubmit} >Publicar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
