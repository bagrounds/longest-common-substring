/**
 * 1st method to find the longest common substring. A naive implementation.
 *
 * 1. sort input strings
 * 2. for each substring S in the shorter string, from largest to smallest
 * 3. use S as a regular expression and search in the bigger string
 * 4. when a match is found, it must be the longest common substring
 *
 * @function longest-common-substring-a
 */
;(function () {
  'use strict'

  /* Imports */
  var sortStringsByLength = require('./sort-strings-by-length')

  /* Exports */
  module.exports = longestCommonSubstringA

  /**
   * Finds the longest common substring. Attempt to use minimal developer time.
   *
   * @function longestCommonSubstringA
   * @alias longest-common-substring-a
   *
   * @param {Object} options all function parameters
   * @param {Array<String>} options.inputStrings to compare
   *
   * @return {String} the longest common substring
   */
  function longestCommonSubstringA (options) {
    var sortedInputStrings = sortStringsByLength(options.inputStrings)

    var smallString = sortedInputStrings[0]
    var bigString = sortedInputStrings[1]

    return subRoutine(smallString, bigString)
  }

  /**
   * Double while loop.
   *
   * @param {String} smallString the smaller string
   * @param {String} bigString the larger string
   * @returns {String} the longest common substring
   */
  function subRoutine (smallString, bigString) {
    var searchLength = smallString.length

    while (searchLength >= 0) {
      var searchPosition = bigString.length - searchLength

      while (searchPosition >= 0) {
        var stringSegment = smallString.slice(
          searchPosition,
          searchPosition + searchLength
        )

        var regex = new RegExp(stringSegment)

        var result = regex.exec(bigString)

        if (result) return result[0]

        searchPosition--
      }
      searchLength--
    }
  }
})()
