class DevicesController {
	constructor (DevicesService) {
		'ngInject';
		this.devicesService = DevicesService;
		this.devices = [];
	}

	$onInit() {
		this.devicesService.fetchDevices().then((response) => this.devices = response);
	}
}

export default DevicesController;
