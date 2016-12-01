class DeviceService {
	constructor($http) {
		'ngInject';
		this.$http = $http;
	}

	fetchDevice() {
		return this.$http.get('api/device').then((response) => response.data);
	}

	fetchDeviceCount() {
		return this.$http.get('api/device/count').then((response) => response.data);
	}

	fetchDeviceById(id) {
		return this.$http.get(`api/device/${id}`).then((response) => response.data);
	}

	createDevice(obj) {
		return this.$http.post('api/device', obj).then((response) => response.data);
	}

	deleteDevice(id) {
		return this.$http.delete(`api/device/${id}`).then((response) => response.data);
	}
}

export default DeviceService;
