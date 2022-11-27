import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="nav">
        <Link to="/" className="nav title">Yoed's Project</Link>
        <ul>
            <li><Link to="/Weather" className='active'>Weather</Link></li>
            <li><Link to="/Quiz" className='active'>Quiz</Link></li>
        </ul>
      </nav>
    )
  }

export default Navbar;
