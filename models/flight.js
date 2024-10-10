const { Schema } = require('mongoose');

const flightSchema = new Schema(
    {
    airline: { type: String, required: true },
    flightNumber: { type: String, required: true },
    price: { type: Number, required: true },
    numberOfSeats: { type: Number, required: true },
    // Nested location fields below
    departingAirport: { type: Schema.Types.ObjectId, ref: "airport_id" },
    arrivalAirport: { type: Schema.Types.ObjectId, ref: "airport_id" },
    departureDateTime: { type: Date, required: true }
    }
)

module.exports = flightSchema