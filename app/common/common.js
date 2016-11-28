import angular from 'angular';

import sidenav from './sidenav/sidenav';
import toolbar from './toolbar/toolbar';

const common = angular.module('app.common', [sidenav, toolbar]).name;

export default common;
