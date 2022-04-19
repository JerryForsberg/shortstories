const mongoose = require("mongoose")
const Db = process.env.ATLAS_URI;

var _db;

module.exports = {
    connectToServer: async function (callback) {
        await mongoose.connect(Db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to MongoDB.");
    },
};