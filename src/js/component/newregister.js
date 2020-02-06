import React from 'react';
import '../../styles/newregister.css';


export const NewRegister = () => {
    return (
        <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#crearEvento">
            Crear Evento
        </button>
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
                            <form>
                                <div className="row">
                                    <div className="col-12" ><br></br>
                                        <input type="text" className="form-control" placeholder="Nombre del evento"></input><br></br>
                                    </div>
                                    <div className="col-12 ">
                                        <input type="text" className="form-control" placeholder="Descripción del evento"></input><br></br>
                                    </div>
                                </div>
                                <label for="avatar">Seleccione foto del evento: </label>
                                <div className="col-md-0"></div>
                                <input type="file" accept="image/png, image/jpeg"></input><br></br><br></br><br></br>
                                <input type="text" className="form-control" placeholder="Link video demostrativo"></input><br></br>
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <label>Fecha inicio </label>
                                        <input type="date" className="form-control" placeholder="Fecha inicio del evento"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Fecha Término</label>
                                        <input type="date" className="form-control" placeholder="Fecha término del evento"/><br></br>
                                    </div>
                                    <div className="col-md-6 ">
                                        <label>Hora inicio </label>
                                        <input type="time" className="form-control" placeholder="Hora inicio"/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <label>Hora término</label>
                                        <input type="time" className="form-control" placeholder="Hora término"/><br></br>
                                    </div>
                                </div>
                                <input type="text" className="form-control" placeholder="Dirección del evento"/><br></br>
                                <label>Requisitos</label>
                                <div className="row">
                                    <div className="col-md-3 ">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="col-md-3 ">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="col-md-3 ">
                                        <input type="text" className="form-control"></input><br></br>
                                    </div>
                                    <div className="col-md-3 ">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="col-md-3 ">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="col-md-3 ">
                                        <input type="text" className="form-control"></input><br></br>
                                    </div>
                                    <div className="col-md-3 ">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="col-md-3 ">
                                        <input type="text" className="form-control"></input><br></br>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Publicar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
