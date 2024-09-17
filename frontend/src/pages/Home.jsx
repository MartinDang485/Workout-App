import { useEffect, useState } from 'react'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutDetails from '../components/WorkoutDetails'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()

    //Use effect to detch all workouts
    useEffect(() => {
        const fetchAllWorkouts = async () => {
            const response = await fetch('http://localhost:3000/api/workouts')
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchAllWorkouts()

    }, [])

    return (
        <div className="home">
            <div className="workouts">
                <h3>Lifts</h3>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home