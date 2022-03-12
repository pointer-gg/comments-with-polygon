'use strict'
// Note this is small letters
var expect = require('chai').expect
var truncateMiddle = require('../index')

describe('truncateMiddle', function () {
  it('should perform a basic test', function () {
    expect(truncateMiddle('the quick brown', 5, 5, '...')).to.equal('the q...brown')
  })

  it('should perform auto fill in ellipses', function () {
    expect(truncateMiddle('the quick brown', 5, 5)).to.equal('the q&hellip;brown')
  })

  it('should have return empty string when null', function () {
    expect(truncateMiddle(null)).to.equal('')
  })

  it('should have return empty string when empty', function () {
    expect(truncateMiddle('')).to.equal('')
  })

  it('should have handle no backLength', function () {
    expect(truncateMiddle('the quick brown', 5, 0)).to.equal('the q&hellip;')
  })

  it('should have handle 0 backLength, 0 frontLength', function () {
    expect(truncateMiddle('the quick brown', 0, 0)).to.equal('the quick brown')
  })
})
