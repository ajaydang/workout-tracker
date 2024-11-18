const scheduleWorkoutServices = require("../services/scheduleWorkout.services");

exports.createSchedule = async function(req,res,next){
  try {
    console.log(req.body)
    const scheduleWorkout = await scheduleWorkoutServices.createSchedule({data:req.body});
    res.json({ status: 200, data: scheduleWorkout, message: "Created!!!!!" });
  } catch (error) {
next(error)
  }
}

exports.getScheduleExercise = async function(req,res,next){
  try {
    const scheduleData = await scheduleWorkoutServices.getScheduleExercise({});
    res.json({ status: 200, data: scheduleData, message: "Retrieved" });
  } catch (error) {
    throw Error("Error while retrieving workout plan.")
  }
}