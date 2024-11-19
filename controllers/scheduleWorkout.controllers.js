const scheduleWorkoutServices = require('../services/scheduleWorkout.services');

exports.createSchedule = async function (req, res, next) {
    try {
        const scheduleWorkout = await scheduleWorkoutServices.createSchedule({ data: req.body });
        res.json({ status: 200, data: scheduleWorkout, message: 'Created!!!!!' });
    } catch (error) {
        next(error);
    }
};

exports.getScheduleExercise = async function (req, res, next) {
    try {
        const scheduleData = await scheduleWorkoutServices.getScheduleExercise({});
        res.json({ status: 200, data: scheduleData, message: 'Retrieved' });
    } catch (error) {
        throw Error('Error while retrieving workout plan.');
    }
};

exports.updateScheduleById = async function (req, res, next) {
    const { id } = req.params;

    try {
        const updateScheduleData = await scheduleWorkoutServices.updateScheduleById(req.body, id);

        res.json({ status: 200, data: updateScheduleData, message: 'Updated Success' });
    } catch (error) {
        next(error);
    }
};

exports.deleteScheduleWorkout = async function (req, res, next) {
    const { id } = req.params;

    try {
        const deleteWorkoutPlanData = await scheduleWorkoutServices.deleteScheduleWorkout(id);

        res.json({ status: 200, data: deleteWorkoutPlanData, message: 'Deleted Success' });
    } catch (error) {
        next(error);
    }
};

exports.getWorkoutReport = async function (req, res, next) {
    try {
        const { userId } = req.params;
        const workoutReport = await scheduleWorkoutServices.getWorkoutReport(userId);
        res.json({ status: 200, data: workoutReport, message: 'Retrieved workout report.' });
    } catch (error) {
        next(error);
    }
};
