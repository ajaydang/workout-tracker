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

exports.updateScheduleById = async function (query,id){
  try {
    const updateScheduleData = await prisma.ScheduleWorkout.update({
      where: {
        id: Number(id),
      },
      data: query,
    });
    return updateScheduleData;
  } catch (error) {
    throw Error("Error while updating Workout Plan.")
  }
}


exports.deleteScheduleWorkout = async function (id){
  try {
    const deleteScheduleWorkout = await prisma.ScheduleWorkout.delete({
      where: {
        id: Number(id),
      }
    });
    return deleteScheduleWorkout;
  } catch (error) {
    throw Error("Error while deleting Workout Plan.")
  }
}