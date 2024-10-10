const db = require('../db')
const { Airport, Flight } = require('../models')

db.on(`error`, console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const johnFKennedyIA = await Airport.find({ name: 'John F. Kennedy International Airport'})
    const miamiIA = await Airport.find({ name: 'Miami International Airport'})
    const atlantaHartsfieldIA = await Airport.find({ name: 'Atlanta Hartsfield-Jackson International Airport'})
    const bostonLoganIA = await Airport.find({ name: 'Boston Logan International Airport'})

    const newFlights = [
        {
            airline: "American Airlines",
            flightNumber: "AA 100",
            price: 150.00,
            numberOfSeats: 180,
            // Nested location fields below
            departingAirport: johnFKennedyIA[0]._id,
            arrivalAirport: miamiIA[0]._id,
            departureDateTime: new Date("2024-11-01T14:00:00Z")
        },
        {
            airline: "Delta Airlines",
            flightNumber: "DL 200",
            price: 120.00,
            numberOfSeats: 160,
            // Nested location fields below
            departingAirport: atlantaHartsfieldIA[0]._id,
            arrivalAirport: bostonLoganIA[0]._id,
            departureDateTime: new Date("2024-11-02T10:30:00Z")
        },
        {
            airline: "JetBlue Airways",
            flightNumber: "JB 300",
            price: 90.00,
            numberOfSeats: 150,
            // Nested location fields below
            departingAirport: bostonLoganIA[0]._id,
            arrivalAirport: johnFKennedyIA[0]._id,
            departureDateTime: new Date("2024-11-03T17:45:00Z")
        },
        {
            airline: "Southwest Airlines",
            flightNumber: "SW 400",
            price: 130.00,
            numberOfSeats: 140,
            // Nested location fields below
            departingAirport: miamiIA[0]._id,
            arrivalAirport: atlantaHartsfieldIA[0]._id,
            departureDateTime: new Date("2024-11-04T09:15:00Z")
        },
        {
            airline: "United Airlines",
            flightNumber: "UA 500",
            price: 175.00,
            numberOfSeats: 200,
            // Nested location fields below
            departingAirport: johnFKennedyIA[0]._id,
            arrivalAirport: atlantaHartsfieldIA[0]._id,
            departureDateTime: new Date("2024-11-05T12:00:00Z")
        },
        {
            airline: "Alaska Airlines",
            flightNumber: "AS 600",
            price: 110.00,
            numberOfSeats: 180,
            // Nested location fields below
            departingAirport: bostonLoganIA[0]._id,
            arrivalAirport: miamiIA[0]._id,
            departureDateTime: new Date("2024-11-06T15:30:00Z")
        },
        {
            airline: "Spirit Airlines",
            flightNumber: "NK 700",
            price: 85.00,
            numberOfSeats: 160,
            // Nested location fields below
            departingAirport: miamiIA[0]._id,
            arrivalAirport: bostonLoganIA[0]._id,
            departureDateTime: new Date("2024-11-07T19:00:00Z")
        }
    ];

    await Flight.insertMany(newFlights)
    console.log('Created new flights!!')
}

const run = async () => {
    await main()
    db.close()
}

run()