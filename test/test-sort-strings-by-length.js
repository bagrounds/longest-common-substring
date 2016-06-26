/**
 * Tests for sort-strings-by-length
 */
;(function () {
  /* global describe, it */
  'use strict'

  /* Imports */
  var expect = require('chai').expect

  var sortStringsByLength = require('../lib/sort-strings-by-length')

  /* Tests */
  describe('sort-strings-by-length', function () {
    it('should sort an array of strings by length', function () {
      var exampleInput = [
        'longest string',
        'short string',
        'longer string'
      ]

      var expectedResult = [
        'short string',
        'longer string',
        'longest string'
      ]

      var sortedStrings = sortStringsByLength(exampleInput)

      expect(sortedStrings).to.deep.equal(expectedResult)
    })
  })
})()
