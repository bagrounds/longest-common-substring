/**
 * Tests for longest-common-substring-1
 */
;(function () {
  /* global describe, it */
  'use strict'

  /* Imports */
  var expect = require('chai').expect

  var longestCommonSubstring1 = require('../lib/longest-common-substring-a')

  /* Tests */
  describe('longest-common-substring-a', function () {
    it('should find the longest common substring', function () {
      var exampleInput = [
        'Everything is awesome!',
        'Hello World is awesome!'
      ]

      var solution = ' is awesome!'

      var result = longestCommonSubstring1({
        inputStrings: exampleInput
      })

      expect(result).to.equal(solution)
    })
    it('should find the longest common substring', function () {
      var exampleInput = [
        'Everything is awesome!',
        'Hello World is awesomE!'
      ]

      var solution = ' is awesom'

      var result = longestCommonSubstring1({
        inputStrings: exampleInput
      })

      expect(result).to.equal(solution)
    })
    it('should find the longest common substring', function () {
      var exampleInput = [
        'adsfasdfasdfasdfasdfadfasdfasTHELONGESTCOMMONSUBSTRINGxdf',
        'asdfasxTHELONGESTCOMMONSUBSTRINGdfasdfasdfadsfasdf'
      ]

      var solution = 'THELONGESTCOMMONSUBSTRING'

      var result = longestCommonSubstring1({
        inputStrings: exampleInput
      })

      expect(result).to.equal(solution)
    })
    it('should return the empty string if no characters match', function () {
      var exampleInput = [
        'abc',
        'def'
      ]

      var solution = ''

      var result = longestCommonSubstring1({
        inputStrings: exampleInput
      })

      expect(result).to.equal(solution)
    })
  })
})()
