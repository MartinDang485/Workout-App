import { useEffect, useState } from 'react'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutDetails from '../components/WorkoutDetails'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    //Use effect to fetch all workouts
    useEffect(() => {
        const fetchAllWorkouts = async () => {
            const response = await fetch('http://localhost:3000/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
                
            }
        }

        if(user && user.token) {
            fetchAllWorkouts()
        }

    }, [dispatch,user])

    return (
        <div className="home">
            <div className="workouts">
                <h3 className="lifts">Lifts</h3>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home