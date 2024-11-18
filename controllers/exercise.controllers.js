const exerciseServices = require('../services/exercise.services');

exports.createExercise = async function(req,res,next){
  try {
    const exerciseData = await exerciseServices.createExercise({data:req.body});
    res.json({ status: 200, data: exerciseData, message: "Created!!!!!" });
  } catch (error) {
next(error)
  }
}

exports.getExerciseData = async function(req,res,next){
  try {
    const exerciseData = await exerciseServices.getExercise({});
    res.json({ status: 200, data: exerciseData, message: "Retrieved" });
  } catch (error) {
    throw Error("Error while retrieving workout plan.")
  }
}


exports.updateExerciseById = async function (req,res,next){
  const {id}= req.params;
  
  try {
    const updateExerciseData = await exerciseServices.updateExerciseById(req.body, id);
    
    res.json({ status: 200, data: updateExerciseData, message: "Updated Success" });
    
  } catch (error) {
    next(error);
  }
}