//Services
// import nqiServices from "@/services/NqiServices/nqiServices";
import awsServiceAuth from "@/services/AWSService/awsServiceAuth.js";
import store from './index';

export async function createStore() {
	store.dispatch("loader/show");
	let r = await awsServiceAuth
		.currentSession()
		.then((value) => {

			return {
				"data": value,
				"status": true
			}
		})
		.catch((e) => {
			return {
				"data": e,
				"status": false
			}
		})
	// if (r.status) {
	// 	let admin = false;
	// 	let dataUser = await nqiServices.getUserData(r.data.idToken.payload.sub);

	// 	if (dataUser.hasOwnProperty("body")) {
	// 		if (dataUser.body.hasOwnProperty("admin")) {
	// 			admin = true;
	// 		} else {
	// 			admin = false;
	// 		}
	// 	} else {
	// 		await nqiServices.postUserData(r.data.idToken.payload, 0, 2);
	// 		dataUser = r.data.idToken.payload;
	// 		admin = false;
	// 	}
	// 	store.commit('insertUserRol', admin);

	// 	store.commit('insertUserData', dataUser);
	// }
	store.dispatch("loader/hide");
	return r

};
