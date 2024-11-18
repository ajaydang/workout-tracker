const router = require('express').Router();

//User Profile
const UserController = require("../controllers/user.controllers");
router.post("/user/add", UserController.createUser);
router.get("/user",UserController.getUser);

//Workout Plan
const WorkoutPlanController = require("../controllers/workoutPlan.controllers");
router.post('/workout-plan/',WorkoutPlanController.createWorkoutPlan);
router.get('/workout-plan/',WorkoutPlanController.getWorkoutPlan);
router.get('/workout-plan/:id',WorkoutPlanController.getWorkoutPlanById);
router.get('/workout-plan/user/:uid',WorkoutPlanController.getWorkoutPlanByUserId);
router.put('/workout-plan/update/:id',WorkoutPlanController.updateWorkoutPlanById);
router.delete('/workout-plan/delete/:id',WorkoutPlanController.deleteWorkoutPlanById);

//Exercise
const ExerciseController = require("../controllers/exercise.controllers");
router.post('/exercise/',ExerciseController.createExercise);
router.get('/exercise/',ExerciseController.getExerciseData);
router.put('/exercise/update/:id',ExerciseController.updateExerciseById);
router.delete('/exercise/delete/:id',ExerciseController.deleteExerciseById);

module.exports= router;