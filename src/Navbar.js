import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <nav>
            <div className="logo">
                <h1>AL-Sultan</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/OrderList">My Order</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Location">Location</Link>
            </div>
        </nav>
    );
}
 
export default SideNav;