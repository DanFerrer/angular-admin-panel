import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import './app.css';
import 'font-awesome/css/font-awesome.css';
import 'angular-material/angular-material.css';

import AppComponent from './app.component';
import Components from './components/components';
import Common from './common/common';
import { config } from './config';

const app = angular.module('app', [
	Components,
	Common,
	uiRouter,
	'ngMaterial'])
	.config(config)
	.component('app', AppComponent).name;

export default app;
