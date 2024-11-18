const {PrismaClient} = require("@prisma/client");
const e = require('express');
const prisma = new PrismaClient();

exports.createWorkoutPlan = async function(query){
  try {
    const workoutPlanData = await prisma.WorkoutPlan.create(query);
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
    const workoutPlanIdData = await prisma.WorkoutPlan.findUnique({
      where:{
        id:Number(id),
      },
      orderBy:{
        id:"desc"
      },
      include: {
        workoutPlanExercise: true,
      },
    });

    return workoutPlanIdData;
  } catch (error) {
    throw Error("Error while getting Workout Plan.")
  }
}

exports.getWorkoutPlanByUserId =async function(id){
  try {
    const workoutPlanIdData = await prisma.WorkoutPlan.findMany({
      where:{
        user_id:Number(id),
      },
      orderBy:{
        id:"desc"
      },
      include: {
        workoutPlanExercise: true,
      },
    });

    return workoutPlanIdData;
  } catch (error) {
    throw Error("Error while getting Workout Plan.")
  }
}


exports.updateWorkoutPlanById = async function (query,id){
  try {
    const updateWorkoutPlanById = await prisma.WorkoutPlan.update({
      where: {
        id: Number(id),
      },
      data: query,
      include: {
        workoutPlanExercise: true,
      },
    });
    return updateWorkoutPlanById;
  } catch (error) {
    throw Error("Error while updating Workout Plan.")
  }
}

exports.deleteWorkoutPlanById = async function (id){
  try {
    const deleteWorkoutPlanById = await prisma.WorkoutPlan.delete({
      where: {
        id: Number(id),
      }
    });
    return deleteWorkoutPlanById;
  } catch (error) {
    throw Error("Error while deleting Workout Plan.")
  }
}