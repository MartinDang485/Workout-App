import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({workout}) => {

    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('http://localhost:3000/api/workouts/' + workout._id)
        const json = await response.json()

        if(response.ok) {
            console.log("Workout Deleted: ", json)
            dispatch({type: "DELETE_WORKOUT", payload: json})
        }
    }
    return (
        <div className="details">
            <h3>{workout.title}</h3>
            <p><strong>SETS: </strong>{workout.sets}</p>
            <p><strong>WEIGHT:</strong>{workout.weight}</p>
            <p><strong>REPS:</strong>{workout.reps}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails