'use strict';

var beAdminSettings = function (options) {
	var self = this;
	this.sidebarEnabled = false;
	this.beBackdrop = '';
	this.beSidebar = '';
	this.beHeaderBar = '';
	this.beSidebarClose = '';

	self.beBackdrop = document.getElementById('beBackdrop');
	self.beSidebar = document.getElementById('beSidebar');
	self.beHeaderBar = document.getElementById('beHeaderBar');
	self.beSidebarClose = document.getElementById('beSidebarClose');

	// var beHeaderBar = document.getElementById('beHeaderBar');
	// var beSidebar = document.getElementById('beSidebar');
	self.beHeaderBar.addEventListener('click', function (e) {
		self.beSidebar.classList.add('show');
		self.beBackdrop.classList.add('show');
	});

	self.beSidebarClose.addEventListener('click', function (e) {
		self.beSidebar.classList.remove('show');
		self.beBackdrop.classList.remove('show');
	});

	$(document).on('click', '.be-sidebar-toggle', function (e) {
		e.preventDefault();

		if ($(this).parent().hasClass('open')) {
			$(this).parent().removeClass('open');
		} else {
			$(this).parent().addClass('open');
		}
	});
};
