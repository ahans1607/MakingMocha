const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz} = require("../problems/phase-1");
describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    let expected = true
    let actual = isFive(5)

    expect(expected).to.equal(actual)


  });
  it("should return false if the num is NOT 5 ", () => {
    let expected = true
    let actual = isFive(3)

    expect(expected).to.not.equal(actual)
  });
});

describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    let expected = true;
    let actual = isOdd(3);

    expect(expected).to.equal(actual)
  });

  it("should return false if the num is even", () => {
    let expected = true;
    let actual = isOdd(4);

    expect(expected).to.not.equal(actual)
  });

  it("should throw an error if num is not type of Number", () => {
    let expected = Error
    let actual = function () {isOdd("things")}

    expect(actual).to.throw(Error)

  });
});

describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange
      let expected = [1, 2, 3, 4];
      let actual = myRange(1, 4);

      expect(expected).to.eql(actual);

    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      let expected = [2, 4, 6, 8, 10]
      let actual = myRange(2, 10 , 2)

      expect(expected).to.be.eql(actual)

    });
  });
  it("should throw an error if num is not type of Number", () => {
    let actual = function (){ myRange("hats")}
    expect(actual).to.throw(ReferenceError)

  });
});
describe('fizzBuzz(max)', ()=> {
  it('should throw a RangeError if max < 0', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should throw a TypeError if max is not a number', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
})
