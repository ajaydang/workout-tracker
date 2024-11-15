const workoutServices = require('../services/workoutplan.services');

exports.createWorkoutPlan = async function(req,res,next){
  try {
    const workoutPlan = await workoutServices.createWorkoutPlan(req.body,res);
    res.json({ status: 200, data: workoutPlan, message: "Workout Plan is successfully created." });
  } catch (error) {
    next(error);
  }
}