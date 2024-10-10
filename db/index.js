const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://christianbmendoza96:cometshaddol29@student-cluster.2qeno.mongodb.net/flightsDatabase?retryWrites=true&w=majority&appName=student-cluster
    `)

    .then(() => {
        console.log(`Successfully Connected to MongoDB`)
    })
    .catch((e) => {
        console.error(`Connection error`, e.message)
    })
mongoose.set('debug', true);
const db = mongoose.connection
module.exports = db