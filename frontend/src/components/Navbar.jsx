import { Link } from 'react-router-dom'
import { UseLogout } from '../hooks/UseLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = UseLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className="Container">
                <Link to="/">
                    <h2>Workout App</h2>
                </Link>
                <nav>
                    {user && (
                        <div className="navbar">
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Logout</button>
                        </div>
                    )}
                    {!user && (
                        <div className="navbar">
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar