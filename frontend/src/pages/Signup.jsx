import { useState } from 'react'

const Signup = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
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
            <button>Sign Up</button>
        </form>
    )
}

export default Signup