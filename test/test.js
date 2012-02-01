var vows    = require('vows'),
    assert  = require('assert'),
    graffle = require('../lib/index.js');

/**
 * Setup
 */
var suite   = vows.describe('Graffle-JSON');

/**
 * Test
 */
suite.addBatch({

    'Parse': {

        topic: function() {
            graffle.convert('./example/example.oo3', this.callback);
        },

        'no error': function (err, obj) {
            assert.isNull(err);  
        },

        'is an array': function (err, obj) {
            assert.isArray(obj);
        },

        'equals expected result - Its': function (err, obj) {
            assert.equal(obj[0].value, "It's");
        },

        'equals expected result - Usually': function (err, obj) {
            assert.equal(obj[1].value, "Usually");
        },

        'equals expected result - Child': function (err, obj) {
            assert.equal(obj[0].children[0].value, "To");
        },

    },

    'Parse (Complex)': {

        topic: function() {
            graffle.convert('./example/complex.oo3', this.callback);
        },

        'no error': function (err, obj) {
            assert.isNull(err);  
        },

        'is an array': function (err, obj) {
            assert.isArray(obj);
        },

        'equals expected result': function (err, obj) {
            assert.equal(obj[0].value, "Jack");
        },

        'equals expected result': function (err, obj) {
            assert.equal(obj[1].value, "And");
        },

        'equals expected result': function (err, obj) {
            assert.equal(obj[0].children[0].value, "To");
        },

    },

})

/**
 * Export
 */
.export(module);