const assert = require("chai").assert
const sayHello = require("../index").sayHello

// describe('Index', function(){
//     it('index should return hello world', function(){
//         assert.equal(index(), "Hello World")
//     })
// })

describe("sayHello", function(){
	it('sayHello should return hello world', function(){
		let result = sayHello()
		assert.equal(result, "Hello World")
	})

	it('sayHello should return a string', function(){
		let result = sayHello()
		assert.typeOf(result, "string")
	})
})







// describe('#buildHistogram', function() {
// 	let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// 	"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// 	it("collects assigns each letter as a key and the number of occurrences as the value", function() {
// 		let result = {"a": 1, "c": 2, "e": 6, "h": 2, "i": 1, "l": 1, "m": 1, "n": 1, "o": 2, "r": 2, "s": 2, "t": 2}
// 		let functionResult = buildHistogram(magazine)
// 		expect(functionResult["e"]).toEqual(6)
// 		expect(functionResult["h"]).toEqual(2)
// 	})
// })

// describe('#canBuildNote', function() {
// 	it("returns false if cannot build the note", function() {
// 		let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// 		"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// 		let note = "handitover"
// 		expect(canBuildNote(magazine, note)).toEqual(false)
// 	})

// 	it("returns false if cannot build the note with repeated letters", function() {
// 		let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// 		"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// 		let note = "iisat"
// 		expect(canBuildNote(magazine, note)).toEqual(false)
// 	})

// 	it("returns true if can build the note", function() {
// 		let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// 		"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// 		let note = "hereisat"
// 		expect(canBuildNote(magazine, note)).toEqual(true)
// 	})
// })
