import angular from 'angular';

import sidenav from './sidenav/sidenav';
import toolbar from './toolbar/toolbar';
import commonConfig from './common.config';

const common = angular.module('app.common', [sidenav, toolbar, 'ngMaterial'])
	.config(commonConfig)
	.name;

export default common;
