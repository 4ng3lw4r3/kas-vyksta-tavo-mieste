const mongoose = require("mongoose")

const eventSchema = mongoose.Schema(
    {
        host: {
            type: String,
            required: [true, "Please add the host"],
        },
        email: {
            type: String,
            required: [true, "Please add your contact email"],
            unique: true,
        },
        event_location: {
            type: String,
            required: [true, "Please add the event's location"],
        },
        event_date: {
            type: String,
            required: [true, "Please add the event's date"],
        },
        event_duration: {
            type: String,
            required: [true, "Please add the event's duration"],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Event", eventSchema)