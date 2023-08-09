import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";


import "select2/dist/css/select2.min.css";
import "select2/dist/js/select2.min.js";


require('utilities/utilities.js')

global.$ = $;

var {main} = require('./main.js')

$(document).ready(() => {
	main()
});
