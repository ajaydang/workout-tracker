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

exports.getWorkoutPlanById = async function (req,res,next){
  const {id}= req.params;

  try {
    const workoutPlanByIdData = await workoutServices.getWorkoutPlanById(Number(id));
    res.json({ status: 200, data: workoutPlanByIdData, message: "Retrieved Success" });
  } catch (error) {
    next(error);
  }
}

exports.getWorkoutPlanByUserId = async function (req,res,next){
  const {uid}= req.params;
  
  try {
    const workoutPlanByUserId = await workoutServices.getWorkoutPlanByUserId(Number(uid));
    console.log(workoutPlanByUserId,'dahlkfjahskdj');
    if(workoutPlanByUserId){
      res.json({ status: 200, data: workoutPlanByUserId, message: "Retrieved Success" });
    }else{
      res.json({ status: 200, message: "Data not found." });
    }
  } catch (error) {
    next(error);
  }
}