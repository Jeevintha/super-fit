import { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import { toast } from "sonner";

const Track = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");

  useEffect(() => {
    const savedWorkouts = localStorage.getItem("workouts");
    if (savedWorkouts) {
      setWorkouts(JSON.parse(savedWorkouts));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const volume = (weight) * (reps) * (sets);
    const newWorkout = {
      id: Date.now().toString(),
      name: workoutName,
      weight: (weight),
      reps: (reps),
      sets: (sets),
      volume,
      date: new Date().toLocaleDateString(),
    };

    const updatedWorkouts = [...workouts, newWorkout];
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));

    setWorkoutName("");
    setWeight("");
    setReps("");
    setSets("");

    toast.success("Workout saved successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Track Your Workout</h1>
      
      <Card className="max-w-md mx-auto p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Workout Name</label>
            <Input
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)}
              required
              placeholder="e.g., Bench Press"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Weight (kg)</label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Reps</label>
            <Input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              required
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sets</label>
            <Input
              type="number"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              required
              placeholder="0"
            />
          </div>
          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
          Save Workout
          </Button>
        </form>
      </Card>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Workout History</h2>
        <div className="grid gap-4">
          {workouts.map((workout) => (
            <Card key={workout.id} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{workout.name}</h3>
                  <p className="text-sm text-gray-500">{workout.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Volume: {workout.volume}</p>
                  <p className="text-sm">
                    {workout.weight}kg × {workout.reps} reps × {workout.sets} sets
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Track;