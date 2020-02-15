const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			usuario: {},
			eventos: []
		},
		actions: {
			getUsers: (url, propiedad) => {
				fetch(url, {
					method: "GET",
					headers:{
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



		