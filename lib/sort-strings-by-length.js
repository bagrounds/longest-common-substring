/**
 * Sorts an array of strings by length in ascending order.
 *
 * @module sort-strings-by-length
 */
;(function () {
  module.exports = sortStringsByLength

  /**
   * Sort strings by length.
   *
   * @function sortStringsByLength
   * @alias sort-strings-by-length
   *
   * @param {Array<String>} strings to be sorted
   *
   * @returns {Array<String>} sorted from smallest to largest
   */
  function sortStringsByLength (strings) {
    return strings.sort(function compare (a, b) {
      if (a.length < b.length) {
        return -1
      }
      if (a.length > b.length) {
        return 1
      }
      // a must be equal to b
      return 0
    })
  }
})()
