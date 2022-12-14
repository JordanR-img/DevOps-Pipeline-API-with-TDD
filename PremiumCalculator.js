function CalculatePremium(carValue, riskRating) {

    const yearlyPremium = (carValue * riskRating) / 100;
    const monthlyPremium = yearlyPremium / 12;
    
    if (carValue < 0) {
    return "Values need to be 1 or above!";
  } else if (riskRating <= 0 || riskRating > 5) {
    return "Risk rating can only be between 1 and 5";
  } else if (typeof riskRating != 'number' || typeof carValue != 'number'){
    return 'Letters are not permissible, please use numbers only'
  } else if (carValue === 0) {
  return "Vehicle must have a value starting from 1"
  } else return JSON.stringify({'yearlyPremium': yearlyPremium, 'monthlyPremium': monthlyPremium});
}

module.exports = CalculatePremium;

// function CarValueNone (car_value, risk_rating) {
//     const result = (car_value === '' ? "Sorry, you need to input a car value to proceed" : car_value)
//     return result
// }

// module.exports = CarValueNone;
