import angular from 'angular';
import apiConstants from './constants';
import Devices from './devices/devices';
// import Readings from './readings/readings';
const components = angular.module('app.components', [Devices])
	.constant('apiConstants', apiConstants)
	.name;

export default components;
