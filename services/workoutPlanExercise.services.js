const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createWorkoutPlanExercise = async function (query) {
    try {
        const workoutPlanExerciseData = await prisma.WorkoutPlanExercise.create(query);
        return workoutPlanExerciseData;
    } catch (error) {
        throw Error('Error while creating workout plan Exercise.');
    }
};

exports.getWorkoutPlanExercise = async function () {
    try {
        const workoutPlanExerciseData = await prisma.WorkoutPlanExercise.findMany();
        return workoutPlanExerciseData;
    } catch (error) {
        throw Error('Error while retrieving workout plan Exercise.');
    }
};

exports.getWorkoutPlanExerciseById = async function (id) {
    try {
        const workoutPlanExerciseIdData = await prisma.WorkoutPlanExercise.findUnique({
            where: {
                id: Number(id),
            },
            include: {
                scheduleWorkout: true,
            },
        });

        return workoutPlanExerciseIdData;
    } catch (error) {
        throw Error('Error while getting Workout Plan Exercise.');
    }
};

exports.getWorkoutPlanExerciseByUserId = async function (id) {
    try {
        const workoutPlanExerciseIdData = await prisma.WorkoutPlanExercise.findMany({
            where: {
                user_id: Number(id),
            },
            orderBy: {
                id: 'desc',
            },
            include: {
                scheduleWorkout: true,
            },
        });

        return workoutPlanExerciseIdData;
    } catch (error) {
        throw Error('Error while getting Workout Plan Exercise.');
    }
};

exports.updateWorkoutPlanExerciseById = async function (query, id) {
    try {
        const updateWorkoutPlanExerciseById = await prisma.WorkoutPlanExercise.update({
            where: {
                id: Number(id),
            },
            data: query,
            include: {
                scheduleWorkout: true,
            },
        });
        return updateWorkoutPlanExerciseById;
    } catch (error) {
        throw Error('Error while updating Workout Plan Exercise.');
    }
};

exports.deleteWorkoutPlanExerciseById = async function (id) {
    try {
        const deleteWorkoutPlanExerciseById = await prisma.WorkoutPlanExercise.delete({
            where: {
                id: Number(id),
            },
        });
        return deleteWorkoutPlanExerciseById;
    } catch (error) {
        throw Error('Error while deleting Workout Plan.');
    }
};

exports.saveWorkoutPlanExercise = async (query) => {
    const [workoutPlan, workoutPlanExercise] = query;
    console.log(workoutPlanExercise, 'mathi ko');

    await prisma.$transaction(async (tx) => {
        const workoutPlanData = await tx.WorkoutPlan.create({ data: workoutPlan });

        const workoutIdExercises = workoutPlanExercise.map((exercise) => ({
            ...exercise,
            workout_id: workoutPlanData.id,
            user_id: 1,
            sets: parseInt(exercise.sets),
            reps: parseInt(exercise.reps),
            weight: parseInt(exercise.weight),
        }));

        const workoutPlanExerciseData = await tx.WorkoutPlanExercise.createMany({
            data: workoutIdExercises,
        });

        return { workoutPlanData, workoutPlanExerciseData };
    });
};
