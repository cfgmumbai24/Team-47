import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from './GoatPalak.module.css';
import Sidebar from "../../Components/sidebar/Sidebar";

const GoatPalak = () => {
    const [goatPalaks, setGoatPalaks] = useState([]);
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        fetch('http://localhost:5000/palak/getByarea', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                area: userInfo.area,
            }),
        })
        .then(res => res.json())
        .then(data => {
            setGoatPalaks(data.goatPalaks || []);
            console.log(data);
        })
        .catch(err => console.error(err));
    }, [userInfo.area]);

    return (
        <div className={styles.main}>
        <div className={styles.goatPalakContainer}>
            <h1 className={styles.goatPalakTitle}>Goat Palaks</h1>
            {goatPalaks.length > 0 ? (
                goatPalaks?.map((goatPalak) => (
                    <div
                        key={goatPalak._id}
                        className={styles.goatPalakItem}
                        onClick={() => navigate(`/goatpalak/${goatPalak?._id}`)}
                    >
                        <h3 className={styles.goatPalakName}>{goatPalak?.name}</h3>
                        <p className={styles.goatPalakDetails}>{goatPalak?.phoneNumber}</p>
                        <p className={styles.goatPalakDetails}>{goatPalak?.address}</p>
                    </div>
                ))
            ) : (
                <p>No goat palaks found in your area.</p>
            )}
        </div>
            
        </div>
    );
};

export default GoatPalak;
