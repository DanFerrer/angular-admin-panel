import angular from 'angular';
import Device from './device/device';
// import Readings from './readings/readings';
const components = angular.module('app.components', [Device]).name;

export default components;
