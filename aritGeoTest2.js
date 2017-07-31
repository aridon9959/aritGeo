const assert = require("chai").assert;
const should = require("chai").should();
const expect = require("chai").expect;
const app = require("./aritGeo.js");


describe("aritGeo", () => {

	describe("Test for array is a geometric sequence",()=>{
	it("should return Geometric when function is passed [2,4,8]", ()=>{
		expect(app.aritGeo([8,4,2])).to.equal("Geometric")
	});

	it("should return Geometric when function is passed [1,4,16,64]", ()=>{
		assert.equal(app.aritGeo([1,4,16,64,256,1024]), "Geometric");
	});

	it("should return Geometric when function is passed [3,9,27,81]", ()=>{
		assert.equal(app.aritGeo([3,9,27,81,243,729]), "Geometric");
	})
});

describe("Test for array is an Arithmetic sequence",()=>{

	it("should return Arithmetic when function is passed [40,37,34,31,28,25,22,19,16,13,10,7,4,1]", ()=>{
		assert.equal(app.aritGeo([40,37,34,31,28,25,22,19,16,13,10,7,4,1]), "Arithmetic");
	})

	it("should return Arithmetic when function is passed [10,15,20,25,30,35,40,45,50,55,60,65,70,75,80]", ()=>{
		assert.equal(app.aritGeo([10,15,20,25,30,35,40,45,50,55,60,65,70,75,80]), "Arithmetic");
	})

	it("should return Arithmetic when function is passed [4,10,16,22,28,34,40,46,52]", ()=>{
		assert.equal(app.aritGeo([4,10,16,22,28,34,40,46,52]), "Arithmetic");
	})
});

describe("Test for an empty Array",()=>{

	it("should return 0 when function is passed []", ()=>{
		assert.equal(app.aritGeo([]), 0);
	})
});

describe("Test for an array that is neither Arithmetic or Geometric", ()=>{
	it("should return -1 when function is passed [9,657,98,7,2,56,21,34]", ()=>{
		expect(app.aritGeo([9,67,98,7,2,56,21,4])).to.equal(-1)
	});
	it("should return -1 when function is passed [0,467,76,23,6452,98]", ()=>{
		expect(app.aritGeo([0,4,7,23,62,98])).to.equal(-1)
	});
	it("should return -1 when function is passed [1,3,9]", ()=>{
		app.aritGeo([6,6,87,3,3,21,45]).should.be.a("number")
	});
})
});

