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
