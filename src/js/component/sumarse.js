import React from 'react';
import '../../styles/sumarse.css'


export const Sumarse = () => {
    return (
        <div class="container-fluid">
            <div>
                <button type="button" id="sumarse" className="btn btn-success" data-toggle="modal" data-target="#sumarse1" >
                    Sumarse
        </button>
                <div className="modal fade" id="sumarse1" tabindex="-1" role="dialog" aria-labelledby="sumarse" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="sumarse2">Aporte de requerimiento </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <h6 className="modal-title" id="requerimiento">Seleccione requerimiento </h6>
                                            </div>
                                            <div className="col-md-5 ">
                                                <h6 className="modal-title" id="cantidad" >Cantidad a aportar</h6><br></br>
                                             </div>
                                        </div>

                                    <div className="row">
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="col-md-4 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="col-md-4 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="col-md-4 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="col-md-4 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="col-md-4 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="col-md-4 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="col-md-4 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="text" className="form-control"></input>
                                            </div>
                                            <div className="col-md-4 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>

                                    </div>
                                    </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary">Aportar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}