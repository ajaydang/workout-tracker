const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.createSchedule = async function(query){
  try {
    const scheduleWorkoutData = await prisma.ScheduleWorkout.create(query);
    return scheduleWorkoutData;
  } catch (error) {
    throw Error("Error while creating schedule workout plan.")
  }
}

exports.getScheduleExercise = async function(){
  try {
    const scheduleData = await prisma.ScheduleWorkout.findMany();
    return scheduleData;
  } catch (error) {
    throw Error("Error while retrieving schdule workout.")
  }
}