/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/front.scss');

const $ = require('jquery');
global.$ = $;
require('bootstrap');

require('bootstrap/js/dist/tooltip');
require('bootstrap/js/dist/popover');


$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

