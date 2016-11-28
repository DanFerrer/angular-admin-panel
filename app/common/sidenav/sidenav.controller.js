class SidenavController {
	constructor($mdSidenav) {
		this.$mdSidenav = $mdSidenav;
		'ngInject';
	}

	toggleSideBar() {
		this.$mdSidenav('left').toggle();
	}
}

export default SidenavController;
