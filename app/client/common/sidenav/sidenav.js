import angular from 'angular';

import SidenavComponent from './sidenav.component';

const sidenav = angular.module('sidenav', [])
	.component('sidenav', SidenavComponent)
	.name;

export default sidenav;
