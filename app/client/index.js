import App from './app';
import angular from 'angular';

angular.element(document).ready(() => {
	angular.bootstrap(document, [App], {strictDI: true});
});

