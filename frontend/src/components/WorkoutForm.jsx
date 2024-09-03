import { useState } from 'react'

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [sets, setSet] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, reps, weight, sets} //Dummy object for api

        //Send post request to api / server
        const response = await fetch('http://localhost:3000/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        //Error handling, resetting input fields

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        
        if(response.ok) {
            setTitle('')
            setReps('')
            setWeight('')
            setSet('')
            console.log('New Workout Added', json)
        }

    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Add New Workout</h3>

            <label>Title</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Repetitions</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <label>Weight</label>
            <input 
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
            />

            <label>Sets</label>
            <input 
                type="number"
                onChange={(e) => setSet(e.target.value)}
                value={sets}
            />

            <button>Add Workout</button>

        </form>
    )
}

export default WorkoutForm