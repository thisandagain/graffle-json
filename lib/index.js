/**
 * Omnigraffle to JSON parser.
 *
 * @package  graffle-json
 * @author  Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var async   = require('async'),
    fs      = require('fs'),
    xml2js  = require('xml2js');

/**
 * Converts XML file (path) into JSON object.
 *
 * @param  String  File path
 *
 * @returns  Object
 */
var xml = function (path, callback) {
    var parser = new xml2js.Parser();

    fs.readFile(path + '/contents.xml', function(err, data) {
        parser.parseString(data, function (err, a) {
            callback(err, a);
        });
    });
};

/**
 * Parses omnigraffle (omnioutliner .oo3) file data from XML converter.
 *
 * @params  Object  Object from 
 *
 * @returns  Object
 */
var parse = function(data, callback) {
    
    // Recursive item processor
    var proc_item = function(obj, callback) {
        // Is child
        if (typeof obj.item !== 'undefined') {
            obj = obj.item;
        }

        // Storage object
        var a = {
            value: obj.values.text.p.run.lit
        };

        // Parse children
        if(Object.prototype.toString.call(obj.children) === '[object Array]' ) {
            async.map(obj.children, proc_item, function (err, b) {
                a.children = b;
                callback(null, a);
            });
        } else if (typeof obj.children === 'object') {
            proc_item(obj.children, function (err, b) {
                a.children = [b];
                callback(null, a); 
            });
        } else {
            callback(null, a);
        }
    }

    // Init
    async.map(data.root.item, proc_item, function (err, a) {
        callback(err, a);
    });

};

// ----------------------------

var convert = function (path, callback) {

    async.auto({
        
        xml:    function (callback) {
            xml(path, function (err, a) {
                callback(err, a);
            });
        },

        parse:  ['xml', function (callback, results) {
            parse(results.xml, function (err, a) {
                callback(err, a);
            });
        }],

    }, function (err, a) {
        return callback(err, a.parse);
    });

};

/**
 * Exports
 */
exports.convert = convert;