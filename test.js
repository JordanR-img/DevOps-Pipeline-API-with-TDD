// const request = require("supertest");
// const assert = require("chai").assert;
const { expect } = require("chai");
// const server = require("./index.js");
const CalculatePremium = require("./PremiumCalculator");


describe('CalculatePremium()', () => {
  it("when car value is 10 and risk rating is 3 return 30", function () {
    //arrange
    const carValue = 1000;
    const riskRating = 3;
    const expected = JSON.stringify({"yearlyPremium":30,"monthlyPremium":2.5});
    //act
    const actual = CalculatePremium(carValue, riskRating)
    //assert
    expect(actual).to.equal(expected)
  });

  it('When either input is left at 0', function () {
    //arrange
    const carValue = 0;
    const riskRating = 3;
    const expected = "Values need to be 1 or above!";
    //act
    const actual = CalculatePremium(carValue, riskRating)
    //assert
    expect(actual).to.equal(expected)
  });
  
  it("when risk rating is greater then 5", function () {
    //arrange
    const carValue = 2000;
    const riskRating = 6;
    const expected = "Risk rating can only be between 1 and 5";
    //act
    const actual = CalculatePremium(carValue, riskRating)
    //assert
    expect(actual).to.equal(expected)
  });

  it("Letters are inputed", function () {
    //arrange
    const carValue = 2000;
    const riskRating = "one hundred";
    const expected = 'Letters are not permissible, please use numbers only';
    //act
    const actual = CalculatePremium(carValue, riskRating)
    //assert
    expect(actual).to.equal(expected)
  });

  it("CarValue input returning 0 ", function () {
    //arrange
    const carValue = 0;
    const riskRating = 3;
    const expected = "Vehicle must have a value starting from 1";
    //act
    const actual = CalculatePremium(carValue, riskRating)
    //assert
    expect(actual).to.equal(expected)
  });
  
});

// Why does the quote thing work?
// Why do I need to do Json.stringify?
