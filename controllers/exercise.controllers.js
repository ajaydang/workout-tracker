const exerciseServices = require('../services/exercise.services');

exports.createExercise = async function(req,res,next){
  try {
    const exerciseData = await exerciseServices.createExercise({data:req.body});
    res.json({ status: 200, data: exerciseData, message: "Created!!!!!" });
  } catch (error) {
next(error)
  }
}