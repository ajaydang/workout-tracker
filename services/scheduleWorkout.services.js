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