import { useEffect, useState } from 'react'
import WorkoutForm from '../components/WorkoutForm'
const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    //Use effect to detch all workouts
    useEffect(() => {
        const fetchAllWorkouts = async () => {
            const response = await fetch('http://localhost:3000/api/workouts')
            const json = await response.json()

            if(response.ok) {
                setWorkouts(json)
            }
        }
        fetchAllWorkouts()

    }, [])

    return (
        <div className="home">
            <div className="workouts">
                <h3>Lifts</h3>
                {workouts && workouts.map((workout) => (
                    <p key={workout._id}>{workout.title}</p>
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home