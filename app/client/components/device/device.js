import angular from 'angular';

import DeviceComponent from './device.component';
import DeviceService from './device.service';

const device = angular.module('device', [])
	.service('DeviceService', DeviceService)
	.component('device', DeviceComponent)
	.name;

export default device;
