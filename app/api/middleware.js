import { API_BASE_URL } from './constants.js';

function apiMiddleWare($http, config) {
	"ngInject";

	config.url = API_BASE_URL + config.url;
	config.headers = config.headers || {"Content-Type": "application/json"};

	return $http(config);
};
