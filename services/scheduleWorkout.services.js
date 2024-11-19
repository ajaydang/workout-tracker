const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createSchedule = async function (query) {
    try {
        const scheduleWorkoutData = await prisma.ScheduleWorkout.create(query);
        return scheduleWorkoutData;
    } catch (error) {
        throw Error('Error while creating schedule workout plan.');
    }
};

exports.getScheduleExercise = async function () {
    try {
        const scheduleData = await prisma.ScheduleWorkout.findMany();
        return scheduleData;
    } catch (error) {
        throw Error('Error while retrieving schdule workout.');
    }
};

exports.updateScheduleById = async function (query, id) {
    try {
        const updateScheduleData = await prisma.ScheduleWorkout.update({
            where: {
                id: Number(id),
            },
            data: query,
        });
        return updateScheduleData;
    } catch (error) {
        throw Error('Error while updating Workout Plan.');
    }
};

exports.deleteScheduleWorkout = async function (id) {
    try {
        const deleteScheduleWorkout = await prisma.ScheduleWorkout.delete({
            where: {
                id: Number(id),
            },
        });
        return deleteScheduleWorkout;
    } catch (error) {
        throw Error('Error while deleting Workout Plan.');
    }
};

exports.getWorkoutReport = async function (userId) {
    try {
        const pastWorkouts = await prisma.ScheduleWorkout.findMany({
            where: {
                user_id: userId,
                completed: true,
            },
            include: {
                exercise: true,
                workoutPlanExercise: true,
            },
            orderBy: {
                schedule_date: 'desc',
            },
        });

        const totalWorkouts = await prisma.ScheduleWorkout.count({
            where: { user_id: userId },
        });

        const completedWorkouts = await prisma.ScheduleWorkout.count({
            where: { user_id: userId, completed: true },
        });

        const progressPercentage = totalWorkouts > 0 ? (completedWorkouts / totalWorkouts) * 100 : 0;

        return {
            pastWorkouts,
            progress: {
                totalWorkouts,
                completedWorkouts,
                progressPercentage,
            },
        };
    } catch (error) {
        throw Error('Error while retrieving workout report.');
    }
};
