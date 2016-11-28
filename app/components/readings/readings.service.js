import { API_BASE_URL } from './constants.js';

class ReadingsService {
	constructor($http) {
		'ngInject;';
		this.$http = $http;
	}

	fetchReadings() {
		return this.$http.get(`${API_BASE_URL}/readings`).then((response) => response.data);
	}

	fetchReading(id) {
		return this.$http.get(`${API_BASE_URL}/readings/${id}`).then((response) => response.data);
	}

	createReading(obj) {
		return this.$http.post(`${API_BASE_URL}/Readings`, obj).then((response) => response.data);
	}
}

export default ReadingsService;
