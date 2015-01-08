/**
 * HarbourController
 *
 * @description :: Server-side logic for managing harbours
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function (req, res) {
		if(req.params('name').match(/a-z+/i)) {
			console.log("Valid Harbour");
		}
	},

	read: function (req, res) {
		
	},

	update: function (req, res) {

	},

	delete: function (req, res) {

	}
};

