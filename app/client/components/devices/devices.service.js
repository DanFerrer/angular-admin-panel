class DevicesService {
	constructor($http) {
		'ngInject';
		this.$http = $http;
	}

	fetchDevices() {
		return this.$http.get('api/devices').then((response) => response.data);
	}

	fetchDeviceCount() {
		return this.$http.get('api/devices/count').then((response) => response.data);
	}

	fetchDevice(id) {
		return this.$http.get(`api/devices/${id}`).then((response) => response.data);
	}

	createDevice(obj) {
		return this.$http.post('api/devices',obj).then((response) => response.data);
	}

	deleteDevice(id) {
		return this.$http.delete(`api/devices/${id}`).then((response) => response.data);
	}
}

export default DevicesService;
