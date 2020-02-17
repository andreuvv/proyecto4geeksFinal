import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			var obj = new Object();
					obj.titulo = "pintar la biblioteca";
					obj.descripcion = "tapar todos los grafitis";
					obj.fecha_limite = "18/12/2019";
					obj.estado_evento = "Activo";
					obj.usuario_id = "1";

			state.actions.get("http://localhost:5000/evento", "eventos");
			state.actions.get("http://localhost:5000/usuario", "usuario");
			//state.actions.put("http://localhost:5000/evento/4", "eventos", obj );
		}, []);

		
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
