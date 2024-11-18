const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();  


exports.createExercise = async function(query){
  try {
    const exerciseData = await prisma.Exercise.create(query);
    return exerciseData;
  } catch (error) {
    throw Error("Error while creating exercise.",error)
  }
}


exports.getExercise = async function(){
  try {
    const exerciseData = await prisma.Exercise.findMany();
    return exerciseData;
  } catch (error) {
    throw Error("Error while retrieving exercise.")
  }
}

exports.updateExerciseById = async function (query,id){
  try {
    const updateExerciseById = await prisma.Exercise.update({
      where: {
        id: Number(id),
      },
      data: query,
      include: {
        workoutPlanExercise: true,
        scheduleWorkout:true
      },
    });
    return updateExerciseById;
  } catch (error) {
    throw Error("Error while updating Workout Plan.")
  }
}