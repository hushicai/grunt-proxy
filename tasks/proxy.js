/*
 * grunt-proxy
 * 
 *
 * Copyright (c) 2012 Andrei V. Toutoukine
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	var httpProxy = require('http-proxy');
	
	grunt.registerMultiTask('proxy', 'Start proxy server', function() {
		var options = this.options(); 
		
		if ( options.target ) {
			httpProxy.createServer( options.target.port, options.target.host ).listen( options.port );
            grunt.log.writeln('Starting proxy server on ' + options.target.host + ':' + options.target.port + '.');
        } else if (options.router) {
			httpProxy.createServer( { router:options.router} ).listen( options.port );
            Object.keys(options.router).forEach(function(route) {
                grunt.log.writeln('Starting proxy router on "' + route + '" to "' + options.router[route] + '".');
            });
        }
	});
	
};
