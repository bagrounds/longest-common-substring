/**
 * Given 2 strings, find the longest common substring.
 *
 * @module longest-common-substring
 */
;(function () {
  'use strict'

  /* Imports */
  var typeCheck = require('type-check').typeCheck

  var algorithms = {
    lcsA: require('./lib/longest-common-substring-a')
  }

  /* Exports */
  module.exports = longestCommonSubstring

  /**
   *
   *
   * @function longestCommonSubstring
   * @alias longest-common-substring
   *
   * @param {options} options contains all function parameters
   * @param {Array<String>} options.inputStrings to compare
   * @param {Function} callback handles results
   */
  function longestCommonSubstring (options, callback) {
    var error = invalidOptions(options)

    if (!error) {
      var solution = algorithms['lcsA'](options)
    }

    callback(error, solution)
  }

  /**
   * Test for invalid inputs.
   *
   * @param {Object} options passed to the main function
   * @param {Array<String>} options.inputStrings to find the LCS of
   * @return {Error} if inputs are invalid
   */
  function invalidOptions (options) {
    if (!typeCheck('[String]', options.inputStrings)) {
      return new Error('Invalid input! Please provide an array of strings.')
    }

    if (options.inputStrings.length !== 2) {
      return new Error('Currently, only 2 input strings are supported.')
    }

    return null
  }
})()
