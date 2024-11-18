const workoutPlanExerciseServices = require('../services/workoutPlanExercise.services');

exports.createWorkoutPlanExercise = async function(req,res,next){
  console.log(req.body,'asdfkajsdlfagsdfhgaj fasdgf jsahdkfjha ksdfajsdg fajgsdfjags kj');

  try {
    const workoutPlanExerciseData = await workoutPlanExerciseServices.createWorkoutPlanExercise({data:req.body});
    res.json({ status: 200, data: workoutPlanExerciseData, message: "Created!!!!!" });
  } catch (error) {
next(error)
  }
}

exports.getWorkoutPlanExercise = async function(req,res,next){
  try {
    const workoutPlanExerciseData = await workoutPlanExerciseServices.getWorkoutPlanExercise({});
    res.json({ status: 200, data: workoutPlanExerciseData, message: "Retrieved" });
  } catch (error) {
    throw Error("Error while retrieving workout plan.")
  }
}

exports.getWorkoutPlanExerciseById = async function (req,res,next){
  const {id}= req.params;

  try {
    const workoutPlanExerciseByIdData = await workoutPlanExerciseServices.getWorkoutPlanExerciseById(Number(id));
    res.json({ status: 200, data: workoutPlanExerciseByIdData, message: "Retrieved Success" });
  } catch (error) {
    next(error);
  }
}

exports.getWorkoutPlanExerciseByUserId = async function (req,res,next){
  const {uid}= req.params;
  
  try {
    const workoutPlanExerciseByUserId = await workoutPlanExerciseServices.getWorkoutPlanExerciseByUserId(Number(uid));

    res.json({ status: 200, data: workoutPlanExerciseByUserId, message: "Retrieved Success" });
    
  } catch (error) {
    next(error);
  }
}

exports.updateWorkoutPlanExerciseById = async function (req,res,next){
  const {id}= req.params;
  
  try {
    const updateWorkoutPlanExerciseData = await workoutPlanExerciseServices.updateWorkoutPlanExerciseById(req.body, id);
    
    res.json({ status: 200, data: updateWorkoutPlanExerciseData, message: "Updated Success" });
    
  } catch (error) {
    next(error);
  }
}

exports.deleteWorkoutPlanExerciseById = async function (req,res,next){
  const {id}= req.params;
  
  try {
    const deleteWorkoutPlanExerciseData = await workoutPlanExerciseServices.deleteWorkoutPlanExerciseById(id);
    
    res.json({ status: 200, data: deleteWorkoutPlanExerciseData, message: "Deleted Success" });
    
  } catch (error) {
    next(error);
  }
}