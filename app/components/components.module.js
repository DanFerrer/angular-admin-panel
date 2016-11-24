import angular from 'angular';
import { DevicesModule } from './devices/devices.module';
import { ReadingsModule } from './readings/readings.module';

export const ComponentsModule = angular
	.module('app.components', [
		DevicesModule,
		ReadingsModule
	])
	.name;
