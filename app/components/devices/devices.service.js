class DevicesService {
	constructor($http) {
		'ngInject';
		// this.headers = apiConstants.HEADERS,
		// this.url = apiConstants.API_BASE_URL,
		this.$http = $http;
	}

	fetchDevices() {
		return this.$http.get(`${this.url}/devices`, this.headers).then((response) => response.data);
	}

	fetchDeviceCount() {
		return this.$http.get(`${this.url}/devices/count`).then((response) => response.data);
	}

	fetchDevice(id) {
		return this.$http.get(`${this.url}/devices/${id}`).then((response) => response.data);
	}

	createDevice(obj) {
		return this.$http.post(`${this.url}/devices`, obj).then((response) => response.data);
	}

	deleteDevice(id) {
		return this.$http.delete(`${this.url}/devices/${id}`).then((response) => response.data);
	}
}

export default DevicesService;
