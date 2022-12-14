const CalculatePremium = require('./PremiumCalculator')
const express = require("express")
const http = require('http')




const server = express()
const env = require('dotenv')
env.config()
server.use(express.json())

const PORT = process.env.PORT || 3002
server.listen(PORT, () => {
    console.log("i'm listening on port", PORT)
})

// let cars = {"Make": "toyota", "Make": "honda"}

// console.log(cars.Make)


// function testPremium(car) {
//     return {'cool': car.car_value * car.risk_rating / 100};
// }


server.post("/PremiumQuote", (req, res) => {

    let carValue = req.body.carValue
    let riskRating = req.body.riskRating

    // console.log(carValue)
    // console.log(riskRating)
     const quote = CalculatePremium(carValue, riskRating)

        res.send(quote)
    // res.send(quote)
    // res.sendStatus(quote)
})

// res.send(quote + "") // In case the send breaks, try this


// let testCar = {"car_value": 6614, "risk_rating": 5}
// testPremium(testCar);

// server.get("/testing", (req, res) => {
//     res.send(res.body)
// })

// server.get("/test", (req, res) => {
//    res.send(testCar)
// })

// server.post("/premium", (req, res) => {
//     res.sendStatus(45);
// })


// function testPremium2() {
//     return testCar2.car_value * testCar2.risk_rating / 100
// }


// console.log(testPremium2())

module.exports = server;
// module.exports = testPremium()



