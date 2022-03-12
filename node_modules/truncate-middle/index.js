'use strict'
/**
 * There are cases where important information is at the end of the string and truncating the end isn't helpful.
 * This function solves that.
 *
 * @param  {string} str         String to be truncated
 * @param  {number} frontLen    Number of characters to be remained in front.
 * @param  {number} backLen     Number of characters to be remained at the back.
 * @param  {string} truncateStr String that is replaced the truncated portion
 * @return {string}             Truncated string. Defaults to '&hellip;' if unspecified.
 */
module.exports = function (str, frontLen, backLen, truncateStr) {
  if (str === null) {
    return ''
  }
  var strLen = str.length
  // Setting default values
  frontLen = ~~frontLen // will cast to integer
  backLen = ~~backLen
  truncateStr = truncateStr || '&hellip;'
  if (frontLen === 0 && backLen === 0 || frontLen >= strLen || backLen >= strLen || (frontLen + backLen) >= strLen) {
    return str
  } else if (backLen === 0) {
    return str.slice(0, frontLen) + truncateStr
  } else {
    return str.slice(0, frontLen) + truncateStr + str.slice(strLen - backLen)
  }
}
