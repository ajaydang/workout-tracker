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


exports.getWorkoutPlan = async function(){
  try {
    const workoutPlanData = await prisma.WorkoutPlan.findMany();
    return workoutPlanData;
  } catch (error) {
    throw Error("Error while retrieving workout plan.")
  }
}

exports.getWorkoutPlanById = async function(id){
  try {
    const workoutPlanIdData = await prisma.WorkoutPlan.findMany({
      where:{
        id:Number(id),
      },
      orderBy:{
        id:"desc"
      }
    });

    console.log(workoutPlanIdData,'dataasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfas');
    return workoutPlanIdData;
  } catch (error) {
    console.log(error,'this is error')
    throw Error("Error while updating Workout Plan.")
  }
}