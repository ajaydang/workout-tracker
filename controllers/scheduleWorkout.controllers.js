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
