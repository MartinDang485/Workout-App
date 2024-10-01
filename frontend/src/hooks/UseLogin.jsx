import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const UseLogin = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState('')
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsLoading(true)

        const response = await fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setIsLoading(false)
        }

        if (response.ok) {
            setIsLoading(true)
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
        }
    }
    return {login, error, isLoading}
}