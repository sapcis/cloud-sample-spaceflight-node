/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"space/itineraries/company/ui/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});