sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("space.itineraries.company.ui.controller.ListBookings", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf space.itineraries.company.ui.view.ListBookings
		 */
		onInit: function () {},
		/**
		 *@memberOf space.itineraries.company.ui.controller.ListBookings
		 */
		onRefresh: function (oEvent) {
			this.byId("list0").getBinding("items").refresh();
		}
	});
});