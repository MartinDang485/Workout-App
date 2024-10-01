import { useState } from 'react'
import { UseLogin } from '../hooks/UseLogin'

const Login = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { login, error, isLoading } = UseLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await login(email, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>

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
            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login