import React from 'react';
import '../../styles/newregister.css';


export const NewRegister = () => {
    return (
        <div className="container-fluid">
            <form>
                <div className="row">
                    <div className="col-12" ><br></br>
                        <input type="text" className="form-control" placeholder="Nombre del evento" /><br></br>
                    </div>
                    <div className="col-12 ">
                        <input type="text" className="form-control" placeholder="Descripción del evento"></input><br></br>
                    </div>
                </div>
                <label for="avatar">Seleccione foto del evento: </label>
                <div className="col-md-0"></div>
                <input type="file" accept="image/png, image/jpeg" /><br></br><br></br><br></br>
                <input type="text" className="form-control" placeholder="Link video demostrativo" /><br></br>
                <div className="row">
                    <div className="col-md-6 ">
                        <label>Fecha inicio </label>
                        <input type="date" className="form-control" placeholder="Fecha inicio del evento" />
                    </div>
                    <div className="col-md-6">
                        <label>Fecha Término</label>
                        <input type="date" className="form-control" placeholder="Fecha término del evento" /><br></br>
                    </div>
                    <div className="col-md-6 ">
                        <label>Hora inicio </label>
                        <input type="time" className="form-control" placeholder="Hora inicio" />
                    </div>
                    <div className="col-md-6 ">
                        <label>Hora término</label>
                        <input type="time" className="form-control" placeholder="Hora término" /><br></br>
                    </div>
                </div>
                <input type="text" className="form-control" placeholder="Dirección del evento" /><br></br>
                <label>Requisitos</label>
                <div className="row">
                    <div className="col-md-3 ">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 ">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 ">
                        <input type="text" className="form-control" /><br></br>
                    </div>
                    <div className="col-md-3 ">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 ">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 ">
                        <input type="text" className="form-control" /><br></br>
                    </div>
                    <div className="col-md-3 ">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 ">
                        <input type="text" className="form-control" /><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button type="button" className="btn btn-primary ">Crear evento</button>
                    </div>
                    <div className="col-6">
                        <button type="button" className="btn btn-primary">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
