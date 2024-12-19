const router = require('express').Router();
const authentication = require('../middleware/authenticateJWT');

//User Profile
const UserController = require('../controllers/user.controllers');
router.post('/user/add', UserController.createUser);
router.post('/user', UserController.getUser);

//Workout Plan
const WorkoutPlanController = require('../controllers/workoutPlan.controllers');
router.post('/workout-plan/', WorkoutPlanController.createWorkoutPlan);
router.get('/workout-plan/', authentication.authenticateJWT, WorkoutPlanController.getWorkoutPlan);
router.get('/workout-plan/:id', authentication.authenticateJWT, WorkoutPlanController.getWorkoutPlanById);
router.get('/workout-plan/user/:uid', authentication.authenticateJWT, WorkoutPlanController.getWorkoutPlanByUserId);
router.put('/workout-plan/update/:id', authentication.authenticateJWT, WorkoutPlanController.updateWorkoutPlanById);
router.delete('/workout-plan/delete/:id', authentication.authenticateJWT, WorkoutPlanController.deleteWorkoutPlanById);

//Exercise
const ExerciseController = require('../controllers/exercise.controllers');
router.post('/exercise/', authentication.authenticateJWT, ExerciseController.createExercise);
router.get('/exercise/', authentication.authenticateJWT, ExerciseController.getExerciseData);
router.put('/exercise/update/:id', authentication.authenticateJWT, ExerciseController.updateExerciseById);
router.delete('/exercise/delete/:id', authentication.authenticateJWT, ExerciseController.deleteExerciseById);

//Workout Plan Exercise
const WorkoutPlanExerciseController = require('../controllers/workoutPlanExercise.controllers');
router.post(
    '/workout-plan-exercise/',
    authentication.authenticateJWT,
    WorkoutPlanExerciseController.createWorkoutPlanExercise
);
router.get(
    '/workout-plan-exercise/',
    authentication.authenticateJWT,
    WorkoutPlanExerciseController.getWorkoutPlanExercise
);
router.get(
    '/workout-plan-exercise/:id',
    authentication.authenticateJWT,
    WorkoutPlanExerciseController.getWorkoutPlanExerciseById
);
router.get(
    '/workout-plan-exercise/user/:uid',
    authentication.authenticateJWT,
    WorkoutPlanExerciseController.getWorkoutPlanExerciseByUserId
);
router.put(
    '/workout-plan-exercise/update/:id',
    authentication.authenticateJWT,
    WorkoutPlanExerciseController.updateWorkoutPlanExerciseById
);
router.delete(
    '/workout-plan-exercise/delete/:id',
    authentication.authenticateJWT,
    WorkoutPlanExerciseController.deleteWorkoutPlanExerciseById
);

router.post('/workout-plan-exercise/add', WorkoutPlanExerciseController.saveWorkoutPlanExerciseData);

//Schedule Workout Plan
const ScheduleWorkoutController = require('../controllers/scheduleWorkout.controllers');
router.post('/schedule-workout/', authentication.authenticateJWT, ScheduleWorkoutController.createSchedule);
router.get('/schedule-workout/', authentication.authenticateJWT, ScheduleWorkoutController.getScheduleExercise);
router.put(
    '/schedule-workout/update/:id',
    authentication.authenticateJWT,
    ScheduleWorkoutController.updateScheduleById
);
router.delete(
    '/schedule-workout/delete/:id',
    authentication.authenticateJWT,
    ScheduleWorkoutController.deleteScheduleWorkout
);
router.get('/schedule-workout/report/:uid', authentication.authenticateJWT, ScheduleWorkoutController.getWorkoutReport);

module.exports = router;
