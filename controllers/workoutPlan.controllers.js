const workoutServices = require('../services/workoutplan.services');

exports.createWorkoutPlan = async function(query){
  try {
    const workoutPlanData = await workoutServices.create({data:query});
    return workoutPlanData;
  } catch (error) {
    throw Error("Error while creating workout plan.")
  }
}

exports.getWorkoutPlan = async function(req,res,next){
  try {
    const workoutPlanData = await workoutServices.getWorkoutPlan({});
    res.json({ status: 200, data: workoutPlanData, message: "Retrieved" });
  } catch (error) {
    throw Error("Error while retrieving workout plan.")
  }
}