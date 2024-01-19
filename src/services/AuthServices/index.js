import Router from 'vue-router';
import awsServiceAuth from "@/services/AWSService/awsServiceAuth.js";
import { createStore } from '../../store/createStore';

// Local Storage keys reference
const ACCESS_TOKEN_KEY = 'access_token';

const router = new Router({
	mode: 'history',
});

export async function login(credentials) {
	let r = await awsServiceAuth
		.signIn(credentials.username, credentials.password)

	return r
}

export async function logout() {
	await awsServiceAuth
		.signOut()
}

export async function requireAuth(to, from, next) {
	let isLogged = await isLoggedIn();

	if (!isLogged.status) {
		next({
			path: '/home'
		});
	} else {
		next();
	}
}

export async function requireGuest(to, from, next) {
	let isLogged = await isLoggedIn();

	if (isLogged.status) {
		next({
			path: '/',
		});
	} else {
		next();
	}
}

export async function isLoggedIn() {

	let r = await createStore();
	return r;
}

