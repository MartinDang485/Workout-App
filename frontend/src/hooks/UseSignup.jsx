import { useState } from 'react'
import { useAuthContext} from './useAuthContext'

export const UseSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setError(null)
        setIsLoading(true)

        const response = await fetch('http://localhost:3000/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setIsLoading(false)
        }

        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(true)
        }

    }
    return { signup, error, isLoading }
}