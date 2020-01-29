import React from 'react';
import { Link } from "react-router-dom";


export const Modal = () => {
    return (
        <div class="container">           
            <div class="modal " id="dialogo1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" >Crea tu evento</h4>
                            <Link to="/newregister"></Link>
                            <button type="button" class="close" data-dismiss="modal">X</button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;