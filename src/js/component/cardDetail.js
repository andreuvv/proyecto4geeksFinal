import React from 'react';
import '../../styles/card.css'
import { Sumarse } from './sumarse';
import { EditEvent } from './editevent';
import { Bajarse } from './bajarse';


export const CardDetail = () => {
    return (

        <div className="card" >
            <img className="card-img-top"  src="https://lh6.googleusercontent.com/proxy/Hi3ZjYOGMawOBoLbmjKFWfNUrqppa6MMevzY9vY-bPvmcqnppPpZcFm-ksSV0ZiSRGo-SarnKCCVquZjvVo_7tfFBTRw0WWE8ZFhDieilOo6s-2_PM0KcLALIQ" alt="Card cap"></img>
            <div className="card-body">
                <h6 className="card-subtitle text-muted float-right">Estado</h6>
                <h5 className="card-title">Titulo del Evento</h5>
                <p className="card-text">Algunos Requerimientos</p>
                <p className="card-text">Algunos Requerimientos</p>
                <Bajarse />
                <Sumarse />                
                <EditEvent /> 

            </div>
        </div>
    );
}        