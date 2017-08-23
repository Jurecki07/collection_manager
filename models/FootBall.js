const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FootBallSchema = new Schema({
    team: {
        type: String,
        required: true

    },

    location: {
        state: {
            type: String,
            min: 0,
            max: 2,
            default: null
        },
        city: {
            type: String,
            default: null
        }

    },
    logo: {
        type: String,
        required: true
    },
    homeColor: {
        type: String
    },
    awayColor: {
        type: String
    }
});

module.exports = mongoose.model("FootBall", FootBallSchema);