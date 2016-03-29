/*!
 * Villa Unloader v1.0.0 (http://getvilla.org/)
 * Copyright 2013-2016 Kabana's Info & Mowe
 * Licensed under MIT (https://github.com/mowekabanas/ladorni/blob/master/LICENSE)
*/

var Unloader = (function () {

	/**
	 * Content Unloader constructor
	 * @param elements {Array||object}
	 * @constructor
	 */
	function Unloader(elements) {

		var self = this;

		this.elements = elements || [];

		if (this.elements.length)
			this.init();

	}

	Unloader.prototype.load = function () {

		for (var i = this.elements.length; i--;)
			this.elements[i].unloader.load();

	};

	Unloader.prototype.init = function () {

		for (var i = this.elements.length; i--;)
			this.elements[i].unloader = new UnloaderElement(this.elements[i]);

	};

	return Unloader;

})();
