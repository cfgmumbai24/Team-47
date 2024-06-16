// Sidebar.js
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const { userInfo } = useSelector((state) => state.auth);

    return ( 
        <div className={styles.sidebar}>
            <div className={styles.userDetails}>
                <h2>Goat Mitra</h2>
                <p>Name: {userInfo.name}</p>
                <p>Email: {userInfo.email}</p>
                <p>Area: {userInfo.area}</p>
                <p>Phone Number: {userInfo.phoneNumber}</p>
            </div>
            <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
            <Link to="/goatPalak" className={styles.navLink}>Goat Palak</Link>
        </div>
    );
}
 
export default Sidebar;
