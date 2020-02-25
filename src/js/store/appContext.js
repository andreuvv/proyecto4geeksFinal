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
			
			state.actions.get("http://localhost:5000/evento", "eventos");
			state.actions.get("http://localhost:5000/usuario", "usuarios");
			state.actions.get("http://localhost:5000/item", "items");
			//state.actions.post("http://localhost:5000/evento", "eventos", obj );
		
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
