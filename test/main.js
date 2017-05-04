// test/main.js
var should = require('should')
const yijing = require('../lib/yijing')
const oracle = yijing.getOracle()
describe('Verify Oracle', function() {
    describe('with no arguments', function() {
        it('return true', function() {
            var result = oracle["䷀"]["nom"]
            result.should.eql("1. Khien / Qian")
        })
    })
})
