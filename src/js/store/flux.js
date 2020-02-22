const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			usuarios: [],
			sesionUsuario: [],
			eventos: [],
			loggedIn: false,
			error: null
		},
		actions: {

			sesion: () => {
				setStore({ loggedIn: false})
			},

			get: (url, propiedad) => {
				fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
						var obj = data;
						setStore({ [propiedad]: obj });
					})
					.catch(error => {
						console.log(error);
					});
			},
			post: (url, propiedad, update, history) => {
				fetch(url, {
					method: "POST",
					body: JSON.stringify(update),
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(resp => {
						console.log(resp);
						if (resp.status === 404)
							alert("Usuario o contraseña inconrrecta");
						else
							return resp.json();
					})
					.then(data => {
						console.log(data);
						var obj = data;
						//setStore( {[propiedad]: obj })
						getActions().get(url, propiedad);
						history.push("/home");
					})
					.catch(error => {
						console.log(error);
					});
			},
			postUser: (url, propiedad, update, history) => {
				fetch(url, {
					method: "POST",
					body: JSON.stringify(update),
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(resp => {
						console.log(resp);
						if (resp.status === 404)
							alert("Usuario o contraseña inconrrecta");
						else
							return resp.json();
					})
					.then(data => {
						console.log(data);

						if (data.msg) {
							setStore({
								error: data.msg
							})
						} else {
							var obj = data;
							setStore({ 
								[propiedad]: obj,
								loggedIn: true,
								error: null
							 });
							 history.push("/home");
						}
					})
					.catch(error => {
						console.log(error);
					});
			},
			put: (url, propiedad, update) => {
				fetch(url, {
					method: "PUT",
					body: JSON.stringify(update),
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
						var obj = data;
						setStore({ [propiedad]: obj });
					})
					.catch(error => {
						console.log(error);
					});
			},
			delete: (url, propiedad) => {
				fetch(url, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}

				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						console.log(data);
						var obj = data;
						setStore({ [propiedad]: obj });
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;


