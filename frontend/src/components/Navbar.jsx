import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="Container">
                <Link to="/">
                    <h3>Workout App</h3>
                </Link>
            </div>
        </header>
    )
}

export default Navbar