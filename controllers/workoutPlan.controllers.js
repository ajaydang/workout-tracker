const workoutServices = require('../services/workoutplan.services');

exports.createWorkoutPlan = async function(req,res,next){
  try {
    const workoutPlanData = await workoutServices.createWorkoutPlan({data:req.body});
    res.json({ status: 200, data: workoutPlanData, message: "Created!!!!!" });
  } catch (error) {
next(error)
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

    res.json({ status: 200, data: workoutPlanByUserId, message: "Retrieved Success" });
    
  } catch (error) {
    next(error);
  }
}

exports.updateWorkoutPlanById = async function (req,res,next){
  const {id}= req.params;
  
  try {
    const updateWorkoutPlanData = await workoutServices.updateWorkoutPlanById(req.body, id);
    
    res.json({ status: 200, data: updateWorkoutPlanData, message: "Updated Success" });
    
  } catch (error) {
    next(error);
  }
}

exports.deleteWorkoutPlanById = async function (req,res,next){
  const {id}= req.params;
  
  try {
    const deleteWorkoutPlanData = await workoutServices.deleteWorkoutPlanById(id);
    
    res.json({ status: 200, data: deleteWorkoutPlanData, message: "Deleted Success" });
    
  } catch (error) {
    next(error);
  }
}