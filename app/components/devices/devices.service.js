import { API_BASE_URL } from './constants.js';

class DeviceService {
	constructor($http, ApiMiddleware) {
		"ngInject;"
		this.$http = $http;
	}

	fetchDevices() {
		return this.$http.get(`${API_BASE_URL}/devices`).then((response) => response.data);
	}

	fetchDeviceCount() {
		return this.$http.get(`${API_BASE_URL}/devices/count`).then((response) => response.data);
	}

	fetchDevice(id) {
		return this.$http.get(`${API_BASE_URL}/devices/${id}`).then((response) => response.data);
	}

	createDevice(obj) {
		return this.$http.post(`${API_BASE_URL}/devices`, obj).then((response) => response.data);
	}

	deleteDevice(id) {
		return this.$http.delete(`${API_BASE_URL}/devices/${id}`).then((response) => response.data);
	}
};

export default DeviceService;
