import React from 'react';


export const Bajarse = () => {
    return (
        <div class="container-fluid">
            <div>
                <button type="button" id="bajarse" className="btn btn-danger" data-toggle="modal" data-target="#bajarse1" >
                    Bajarse
                </button>
                <div className="modal fade" id="bajarse1" tabindex="-1" role="dialog" aria-labelledby="bajarse" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="sumarse2">Requerimiento a bajar del evento sumado </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <form>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-10 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-10 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-10 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-10 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-10 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-10 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-10 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-check col-1" >
                                                <input type="checkbox" class="form-check-input" id="Check1"></input>
                                                <label class="form-check-label" for="Check1"></label>
                                            </div>
                                            <div className="col-md-10 ">
                                                <input type="text" className="form-control"></input><br></br>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                            <div className="row">
                            <div className="col-md-5">
                                <button type="button" className="btn btn-danger">Bajar requerimientos</button>
                                </div>
                                <div className="col-md-7">
                                <button type="button" className="btn btn-primary">Bajar requerimientos seleccionados </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}