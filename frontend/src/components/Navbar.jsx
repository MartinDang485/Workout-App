import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="Container">
                <Link to="/">
                    <h3>Workout App</h3>
                </Link>
                <nav>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar