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

        'is an object': function (err, obj) {
            assert.isObject(obj);
        },

        'equals expected result - Its': function (err, obj) {
            assert.equal(obj.parse[0].value, "It's");
        },

        'equals expected result - Usually': function (err, obj) {
            assert.equal(obj.parse[1].value, "Usually");
        },

        'equals expected result - Child': function (err, obj) {
            assert.equal(obj.parse[0].children[0].value, "To");
        },

    },

})

/**
 * Export
 */
.export(module);