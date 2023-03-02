const asyncHandler = require("express-async-handler");

const eventSchema = require("../models/EventModel");

// @desc Set new event
// @route POST /api/events
// @access Public
const setEvent = asyncHandler(async (req, res) => {
  if (
    !req.body.host ||
    !req.body.email ||
    !req.body.event_location ||
    !req.body.event_date ||
    !req.body.event_duration
  ) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const createEvent = await eventSchema.create({
    host: req.body.host,
    email: req.body.email,
    event_location: req.body.event_location,
    event_date: req.body.event_date,
    event_duration: req.body.event_duration,
  });
  res.status(200).json(createEvent);

});

// @desc get events
// @route GET /api/events
// @access Public
const getEvents = asyncHandler(async (req, res) => {
    const events = await eventSchema.find();
    res.status(200).json(events);
})

// @desc update events
// @route PUT /api/events/:id
// @access private
const updateEvent = asyncHandler(async (req, res) => {
    const event = await eventSchema.findById(req.params.id);
    if (!event){
        res.status(404);
        throw new Error("Event not found");
    }

    // check for user
    if (!req.user) { 
        res.status(401);
        throw new Error("User not found");
    }

    //make sure the logged in user matches the goal user
    if (event.user.toString() !== req.user.toString()){
        res.status(401);
        throw new Error("Not authorized");
    }

    const updateEvent = await eventSchema.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    //make sure the logged in user matches the goal user
    if (event.user.toString() !== req.user.id && req.user.role){
        res.status(401);
        throw new Error("Not authorized");
    }

    // if admin or event creator can edit
    if (req.user.role === "admin" || event.user.toString() === req.user.id){
        const updateEvent = await eventSchema.findByIdAndUpdate(req.params.id, req.body ,{
            new: true
        })
    }

    res.status(200).json(updateEvent);
})

// @desc delete events
// @route DELETE /api/events/:id
// @access private

const deleteEvent = asyncHandler(async (req, res) => {
    const event = await eventSchema.findById(req.params.id);
    if (!event){
        res.status(404);
        throw new Error("Event not found");
    }

    // check for user
    if (!req.user) {
        res.status(401);
        throw new Error("User not found");
    }

    //make sure the logged in user matches the goal user
    if (event.user.toString() !== req.user.toString()){
        res.status(401);
        throw new Error("Not authorized");
    }

    await event.remove();
    res.status(200).json({message: "Event removed"});
})


module.exports = {
    setEvent,
    getEvents,
    updateEvent,
    deleteEvent
};
