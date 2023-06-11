const seedExercises = [
    {
        name: "Barbell Bench Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Triceps", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Dumbbell Bench Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Triceps", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Incline Barbell Bench Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Upper Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Triceps", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Incline Dumbbell Bench Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Upper Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Triceps", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Decline Barbell Bench Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Lower Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Triceps", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Decline Dumbbell Bench Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Lower Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Triceps", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Close Grip Bench Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Triceps", percentage: "70-80%" },
          { name: "Pectoralis Major", percentage: "10-20%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Swiss Bar Bench Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Triceps", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Dumbbell Flyes",
        type: "Isolation",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Cable Chest Press",
        type: "Isolation",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Triceps", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Cable Flyes",
        type: "Isolation",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Biceps", percentage: "5-10%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },
      {
        name: "Dips",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Chest",
        musclesUsed: [
          { name: "Pectoralis Major", percentage: "70-80%" },
          { name: "Anterior Deltoids", percentage: "10-20%" },
          { name: "Triceps", percentage: "10-20%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Serratus Anterior", percentage: "5-10%" }
        ]
      },

    {
        name: "Conventional Deadlift",
        type: "Compound",
        movementType: "Hinge",
        bodyPart: "Back",
        musclesUsed: [
          { name: "Erector Spinae", percentage: "40-50%" },
          { name: "Glutes", percentage: "20-30%" },
          { name: "Hamstrings", percentage: "20-30%" },
          { name: "Quadriceps", percentage: "10-20%" },
          { name: "Adductors", percentage: "5-10%" },
          { name: "Calves", percentage: "5-10%" },
          { name: "Forearms", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" }
        ]
      },
      {
        name: "Sumo Deadlift",
        type: "Compound",
        movementType: "Hinge",
        bodyPart: "Back",
        musclesUsed: [
          { name: "Glutes", percentage: "30-40%" },
          { name: "Erector Spinae", percentage: "20-30%" },
          { name: "Quadriceps", percentage: "20-30%" },
          { name: "Hamstrings", percentage: "10-20%" },
          { name: "Adductors", percentage: "10-20%" },
          { name: "Calves", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" }
        ]
      },
      {
        name: "Romanian Deadlift",
        type: "Compound",
        movementType: "Hinge",
        bodyPart: "Back",
        musclesUsed: [
          { name: "Hamstrings", percentage: "40-50%" },
          { name: "Glutes", percentage: "30-40%" },
          { name: "Erector Spinae", percentage: "20-30%" },
          { name: "Quadriceps", percentage: "10-20%" },
          { name: "Calves", percentage: "5-10%" },
          { name: "Trapezius", percentage: "5-10%" },
          { name: "Forearms", percentage: "5-10%" }
        ]
      },
      {
        name: "Bent-Over Barbell Rows",
        type: "Compound",
        movementType: "Pull",
        bodyPart: "Back",
        musclesUsed: [
          { name: "Latissimus Dorsi", percentage: "30-40%" },
          { name: "Rhomboids", percentage: "20-30%" },
          { name: "Trapezius", percentage: "20-30%" },
          { name: "Biceps", percentage: "10-20%" },
          { name: "Rear Deltoids", percentage: "10-20%" },
          { name: "Forearms", percentage: "5-10%" }
        ]
      },
      {
        name: "T-Bar Rows",
        type: "Compound",
        movementType: "Pull",
        bodyPart: "Back",
        musclesUsed: [
          { name: "Latissimus Dorsi", percentage: "30-40%" },
          { name: "Rhomboids", percentage: "20-30%" },
          { name: "Trapezius", percentage: "20-30%" },
          { name: "Biceps", percentage: "10-20%" },
          { name: "Rear Deltoids", percentage: "10-20%" },
          { name: "Forearms", percentage: "5-10%" }
        ]
      },
      {
        name: "Seated Cable Rows",
        type: "Compound",
        movementType: "Pull",
        bodyPart: "Back",
        musclesUsed: [
          { name: "Latissimus Dorsi", percentage: "30-40%" },
          { name: "Rhomboids", percentage: "20-30%" },
          { name: "Trapezius", percentage: "20-30%" },
          { name: "Biceps", percentage: "10-20%" },
          { name: "Rear Deltoids", percentage: "10-20%" },
          { name: "Forearms", percentage: "5-10%" }
        ]
      },
      {
        name: "Wide Grip Pull-Ups",
        type: "Compound",
        movementType: "Pull",
        bodyPart: "Back",
        musclesUsed: [
          { name: "Latissimus Dorsi", percentage: "40-50%" },
          { name: "Rhomboids", percentage: "20-30%" },
          { name: "Trapezius", percentage: "20-30%" },
          { name: "Biceps", percentage: "10-20%" },
          { name: "Rear Deltoids", percentage: "10-20%" },
          { name: "Forearms", percentage: "5-10%" }
        ]
      },
      {
        name: "Close Grip Pull-Ups",
        type: "Compound",
        movementType: "Pull",
        bodyPart: "Back",
        musclesUsed: [
          { name: "Latissimus Dorsi", percentage: "40-50%" },
          { name: "Rhomboids", percentage: "20-30%" },
          { name: "Trapezius", percentage: "20-30%" },
          { name: "Biceps", percentage: "10-20%" },
          { name: "Rear Deltoids", percentage: "10-20%" },
          { name: "Forearms", percentage: "5-10%" }
        ]
      },

    {
        name: "Overhead Press (Barbell)",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Shoulders",
        musclesUsed: [
          { name: "Deltoids", percentage: "60-70%" },
          { name: "Triceps", percentage: "20-30%" },
          { name: "Trapezius", percentage: "10-20%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Rotator Cuffs", percentage: "5-10%" },
          { name: "Forearms", percentage: "5-10%" }
        ]
      },
      {
        name: "Dumbbell Overhead Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Shoulders",
        musclesUsed: [
          { name: "Deltoids", percentage: "60-70%" },
          { name: "Triceps", percentage: "20-30%" },
          { name: "Trapezius", percentage: "10-20%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Rotator Cuffs", percentage: "5-10%" },
          { name: "Forearms", percentage: "5-10%" }
        ]
      },
      {
        name: "Arnold Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Shoulders",
        musclesUsed: [
          { name: "Deltoids", percentage: "60-70%" },
          { name: "Triceps", percentage: "20-30%" },
          { name: "Trapezius", percentage: "10-20%" },
          { name: "Rhomboids", percentage: "5-10%" },
          { name: "Rotator Cuffs", percentage: "5-10%" },
          { name: "Forearms", percentage: "5-10%" }
        ]
      },
      {
        name: "Barbell Shrugs",
        type: "Isolation",
        movementType: "Pull",
        bodyPart: "Shoulders",
        musclesUsed: [
          { name: "Trapezius", percentage: "80-90%" },
          { name: "Levator Scapulae", percentage: "10-20%" }
        ]
      },
      {
        name: "Dumbbell Lateral Raises",
        type: "Isolation",
        movementType: "Push",
        bodyPart: "Shoulders",
        musclesUsed: [
          { name: "Deltoids", percentage: "80-90%" },
          { name: "Supraspinatus", percentage: "10-20%" }
        ]
      },
      {
        name: "Front Dumbbell Raises",
        type: "Isolation",
        movementType: "Push",
        bodyPart: "Shoulders",
        musclesUsed: [
          { name: "Deltoids", percentage: "80-90%" },
          { name: "Supraspinatus", percentage: "10-20%" }
        ]
      },
      {
        name: "Rear Delt Flyes",
        type: "Isolation",
        movementType: "Pull",
        bodyPart: "Shoulders",
        musclesUsed: [
          { name: "Rear Deltoids", percentage: "80-90%" },
          { name: "Trapezius", percentage: "10-20%" },
          { name: "Rhomboids", percentage: "10-20%" }
        ]
      },
      {
        name: "Upright Rows",
        type: "Compound",
        movementType: "Pull",
        bodyPart: "Shoulders",
        musclesUsed: [
          { name: "Deltoids", percentage: "60-70%" },
          { name: "Trapezius", percentage: "20-30%" },
          { name: "Rhomboids", percentage: "10-20%" },
          { name: "Biceps", percentage: "10-20%" }
        ]
      },
      {
        name: "Face Pulls",
        type: "Isolation",
        movementType: "Pull",
        bodyPart: "Shoulders",
        musclesUsed: [
          { name: "Rear Deltoids", percentage: "60-70%" },
          { name: "Trapezius", percentage: "20-30%" },
          { name: "Rhomboids", percentage: "10-20%" },
          { name: "Rotator Cuffs", percentage: "10-20%" }
        ]
      },

    {
        name: "Low Bar Back Squats",
        type: "Compound",
        movementType: "Squat",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Quadriceps", percentage: "60-70%" },
          { name: "Hamstrings", percentage: "20-30%" },
          { name: "Glutes", percentage: "10-20%" },
          { name: "Calves", percentage: "5-10%" },
          { name: "Lower Back", percentage: "5-10%" },
          { name: "Abdominals", percentage: "5-10%" }
        ]
      },
      {
        name: "High Bar Back Squats",
        type: "Compound",
        movementType: "Squat",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Quadriceps", percentage: "60-70%" },
          { name: "Hamstrings", percentage: "20-30%" },
          { name: "Glutes", percentage: "10-20%" },
          { name: "Calves", percentage: "5-10%" },
          { name: "Lower Back", percentage: "5-10%" },
          { name: "Abdominals", percentage: "5-10%" }
        ]
      },
      {
        name: "Front Squats",
        type: "Compound",
        movementType: "Squat",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Quadriceps", percentage: "60-70%" },
          { name: "Hamstrings", percentage: "20-30%" },
          { name: "Glutes", percentage: "10-20%" },
          { name: "Calves", percentage: "5-10%" },
          { name: "Lower Back", percentage: "5-10%" },
          { name: "Abdominals", percentage: "5-10%" }
        ]
      },
      {
        name: "Bulgarian Split Squats",
        type: "Compound",
        movementType: "Lunge",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Quadriceps", percentage: "70-80%" },
          { name: "Hamstrings", percentage: "20-30%" },
          { name: "Glutes", percentage: "10-20%" },
          { name: "Calves", percentage: "5-10%" }
        ]
      },
      {
        name: "Lunges",
        type: "Compound",
        movementType: "Lunge",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Quadriceps", percentage: "70-80%" },
          { name: "Hamstrings", percentage: "20-30%" },
          { name: "Glutes", percentage: "10-20%" },
          { name: "Calves", percentage: "5-10%" }
        ]
      },
      {
        name: "Leg Press",
        type: "Compound",
        movementType: "Squat",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Quadriceps", percentage: "70-80%" },
          { name: "Hamstrings", percentage: "20-30%" },
          { name: "Glutes", percentage: "10-20%" },
          { name: "Calves", percentage: "5-10%" }
        ]
      },
      {
        name: "Hack Squats",
        type: "Compound",
        movementType: "Squat",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Quadriceps", percentage: "70-80%" },
          { name: "Hamstrings", percentage: "20-30%" },
          { name: "Glutes", percentage: "10-20%" },
          { name: "Calves", percentage: "5-10%" }
        ]
      },
      {
        name: "Leg Extensions",
        type: "Isolation",
        movementType: "Squat",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Quadriceps", percentage: "80-90%" },
          { name: "Hamstrings", percentage: "10-20%" }
        ]
      },
      {
        name: "Hamstring Curls",
        type: "Isolation",
        movementType: "Hinge",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Hamstrings", percentage: "80-90%" },
          { name: "Glutes", percentage: "10-20%" }
        ]
      },
      {
        name: "Glute Bridges",
        type: "Compound",
        movementType: "Hinge",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Glutes", percentage: "80-90%" },
          { name: "Hamstrings", percentage: "10-20%" },
          { name: "Quadriceps", percentage: "10-20%" }
        ]
      },
      {
        name: "Calf Raises",
        type: "Isolation",
        movementType: "Push",
        bodyPart: "Lower Body",
        musclesUsed: [
          { name: "Calves", percentage: "80-90%" },
          { name: "Soleus", percentage: "10-20%" }
        ]
      },

    {
        name: "Barbell Bicep Curls",
        type: "Isolation",
        movementType: "Pull",
        bodyPart: "Arms",
        musclesUsed: [
          { name: "Biceps", percentage: "80-90%" }
        ]
      },
      {
        name: "Dumbbell Bicep Curls",
        type: "Isolation",
        movementType: "Pull",
        bodyPart: "Arms",
        musclesUsed: [
          { name: "Biceps", percentage: "80-90%" }
        ]
      },
      {
        name: "Hammer Curls",
        type: "Isolation",
        movementType: "Pull",
        bodyPart: "Arms",
        musclesUsed: [
          { name: "Biceps", percentage: "70-80%" },
          { name: "Brachialis", percentage: "10-20%" },
          { name: "Brachioradialis", percentage: "10-20%" }
        ]
      },
      {
        name: "Preacher Curls",
        type: "Isolation",
        movementType: "Pull",
        bodyPart: "Arms",
        musclesUsed: [
          { name: "Biceps", percentage: "80-90%" }
        ]
      },
      {
        name: "Concentration Curls",
        type: "Isolation",
        movementType: "Pull",
        bodyPart: "Arms",
        musclesUsed: [
          { name: "Biceps", percentage: "80-90%" }
        ]
      },
      {
        name: "Skull Crushers",
        type: "Isolation",
        movementType: "Push",
        bodyPart: "Arms",
        musclesUsed: [
          { name: "Triceps", percentage: "80-90%" }
        ]
      },
      {
        name: "Close Grip Bench Press",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Arms",
        musclesUsed: [
          { name: "Triceps", percentage: "60-70%" },
          { name: "Chest", percentage: "30-40%" },
          { name: "Front Deltoids", percentage: "10-20%" }
        ]
      },
      {
        name: "Tricep Dips",
        type: "Compound",
        movementType: "Push",
        bodyPart: "Arms",
        musclesUsed: [
          { name: "Triceps", percentage: "80-90%" },
          { name: "Chest", percentage: "10-20%" },
          { name: "Front Deltoids", percentage: "10-20%" }
        ]
      },
      {
        name: "Tricep Pushdowns",
        type: "Isolation",
        movementType: "Push",
        bodyPart: "Arms",
        musclesUsed: [
          { name: "Triceps", percentage: "80-90%" }
        ]
      },
      {
        name: "Overhead Tricep Extensions",
        type: "Isolation",
        movementType: "Push",
        bodyPart: "Arms",
        musclesUsed: [
          { name: "Triceps", percentage: "80-90%" }
        ]
      }
]

const exerciseNamesArray = seedExercises.map(x => x.name);

const typeArray = seedExercises.map(x => x.type);

const movementTypeArray = seedExercises.map(x => x.movementType);

const bodyPartArray = seedExercises.map(x => x.bodyPart)


module.exports = {seedExercises, exerciseNamesArray, typeArray, movementTypeArray, bodyPartArray};