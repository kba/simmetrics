'use strict';
/**
 * Module dependencies.
 */
var should = require('should');
var SmithWatermanGotoh = require('../lib/similaritymetrics/SmithWatermanGotoh');

/**
 * Globals
 */
var smg;

describe('SmithWatermanGotoh Matching', function () {
    beforeEach(function (done) {
        smg = new SmithWatermanGotoh();
        done();
    });

    //straight out of the java version
    it('test strings should match', function() {
        var result = smg.getSimilarity("Test String1", "Test String2");

        result.should.be.approximately(0.9166667, 0.1);
    });

    it('matches Barb and Barbara perfectly', function() {
        var result = smg.getSimilarity('Barb', 'Barbara');
        result.should.equal(1);
    });

    it('matches Andy and Andrew well enough', function() {
        var result = smg.getSimilarity('Andy', 'Andrew');
        result.should.be.approximately(.75, 0.1);
    });

    it('matches Wendy and Windy well enough', function() {
        var result = smg.getSimilarity('Wendy', 'Windy');
        result.should.be.approximately(.95, 0.1);
    });

});
