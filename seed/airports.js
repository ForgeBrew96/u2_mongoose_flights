const db = require('../db')
const { Airport } = require('../models')

db.on(`error`, console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const newAirports = [
        {
            name: "John F. Kennedy International Airport",
            location: "New York City, New York, USA",
            code: "JFK"
        },
        {
            name: "Miami International Airport",
            location: "Miami, Florida, USA",
            code: "MIA"
        },
        {
            name: "Atlanta Hartsfield-Jackson International Airport",
            location: "Atlanta, Georgia, USA",
            code: "ATL"
        },
        {
            name: "Boston Logan International Airport",
            location: "Boston, Massachusetts, USA",
            code: "BOS"
        }
    ]
    await Airport.insertMany(newAirports);

    console.log(`created airports!`)
}

const run = async () => {
    await main();
    db.close();
}

run();