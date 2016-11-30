import angular from 'angular';

import DevicesComponent from './devices.component';
import DevicesService from './devices.service';

const device = angular.module('device', [])
	.service('DevicesService', DevicesService)
	.component('device', DevicesComponent)
	.name;

export default device;
