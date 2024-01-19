import axios from 'axios';
import config from '@/config';

const baseURL = config.services.kong;

export default () => {
	return axios.create({
		baseURL: baseURL,
		headers: {
			'Content-Type': 'application/json',
			'X-Forwarded-Proto': 'https'
		}
	})
}
