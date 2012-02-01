#!/usr/bin/env node

/**
 * Omnigraffle to JSON parser.
 *
 * @package  graffle-json
 * @author  Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var fs 		= require('fs'),
	graffle = require('../lib/index');

/**
 * Parse options
 */
var path 		= process.argv[process.argv.length - 1];
var filename 	= path.split('/');
filename 		= filename[filename.length - 1].split('.')[0];

/**
 * Init
 */
graffle.convert(path, function(err, a) {
	var pretty 	= JSON.stringify(a, null, 4);
	var fsw 	= './' + filename + '.json';

	fs.writeFile(fsw, pretty, function (err) {
	  	if (err) throw err;

	  	console.log(pretty);
	  	console.log('####')
	  	console.log('JSON saved! ' + fsw);
	  	console.log(' ');
	});
});