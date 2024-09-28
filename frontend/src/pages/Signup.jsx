import { useState } from 'react'
import { UseSignup } from '../hooks/UseSignup'

const Signup = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { signup, error, isLoading } = UseSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email,password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>Email</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Password</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup