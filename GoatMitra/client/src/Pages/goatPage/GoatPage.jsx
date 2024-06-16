import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './GoatPage.module.css';
import Sidebar from "../../Components/sidebar/Sidebar";

const GoatPage = () => {
    const [goat, setGoat] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/goat/palak/${id}`)
        .then(res => res.json())
        .then(data => {
            setGoat(data);
            console.log(data);
        })
        .catch(err => console.error(err));
    }, [id]);

    const getAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return ( 
        <div className={styles.main}>
        <div className={styles.goatPageContainer}>
            
            <h1 className={styles.goatPageTitle}>
                {goat?.Palak?.name}
            </h1>
            <h3 className={styles.goatDetails2}>
                {goat?.Palak?.phoneNumber}
            </h3>
            {goat?.Palak?.goats?.map(goat => (
                <div
                    key={goat._id}
                    className={styles.goatItem}
                    onClick={() => navigate(`/goat/${goat._id}`)}
                >
                    <h3 className={styles.goatName}>{goat.name}</h3>
                    <p className={styles.goatDetails}>{goat.gender}</p>
                    <p className={styles.goatDetails}>{getAge(goat.dob)} years</p>
                </div>
            ))}
        </div>
        </div>
    );
}
 
export default GoatPage;
