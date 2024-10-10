const db = require('./db')
const { Flight } = require('./models')
const { Airport } = require('./models')
const flightSchema = require('./models/flight')

async function main() {
  try {
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}


//CRUD Changes ----------------------------

// const findFlight = async () => {
//   const flights = await Flight.findOne()
//   console.log(flightSchema)
// }

// const createFlight = async () => {
//   const airport = await Airport.findOne()

//   let flight = await Flight.create({
//     airline: ,
//     flightNumber: ,
//     price: ,
//     numberOfSeats: ,
//     departingAirport: [0]._id,
//     arrivalAirport: [0]._id,
//     departureDateTime: new Date("")
//   })
//   console.log(flight)
// }

// const updateFlight = async (flightNumber, updateData) => {
//   const updated = await flight.updateOne(
//       { flightnumber: flightNumber },
//       { $set: updateData }
//   )
//   console.log(updated)
// }

// const deleteFlight = async () => {
//   let deleted = await Flight.deleteOne({ flightnumber: '' })
//   console.log(deleted)
// }

// async function main() {
//   try {
//       await findFlight({flightNumber: "AA 100"})
//       await createFlight()
//       await updateFlight('AA 100', { flightNumber: 'AA 200' })
//       await deleteFlight()
//   } catch (error) {
//       console.log(error)
//   } finally {
//       await db.close()
//   }
// }

main()



