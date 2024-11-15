const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.createWorkoutPlan = async function(query){
  try {
    const workoutPlanData = await prisma.WorkoutPlan.create({data:query});
    return workoutPlanData;
  } catch (error) {
    throw Error("Error while creating workout plan.")
  }
}
