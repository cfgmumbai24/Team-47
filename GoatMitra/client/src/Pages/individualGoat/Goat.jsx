import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VisitForm from "../Visit/Visits";
import VisitLineChart from "../../Components/Linechart/LineChart";
import styles from './Goat.module.css';
import Sidebar from "../../Components/sidebar/Sidebar";

const Goat = () => {
    const [goat, setGoat] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const openForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/goat/${id}`)
        .then(res => res.json())
        .then(data => {
            setGoat(data);
            console.log(data);
        })
        .catch(err => console.error(err));
    }, []);

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
        <div className="main">
        <div className={styles.goatContainer}>
            <div>
                <button className={styles.visitButton} onClick={openForm}>Add a visit</button>
                {showForm && <VisitForm closeForm={closeForm} />}
            </div>
            <div className={styles.goatDetials}>
                <h3>{goat?.goat?.name}</h3>
                <h3>{goat?.goat?.gender}</h3>
                <h3>{getAge(goat?.goat?.dob)} years</h3>
            </div>
            {goat?.goat?.visits?.length > 0 && 
                <div className={styles.lineChartContainer}>
                    <VisitLineChart visitData={goat?.goat?.visits} />
                </div>
            }
        </div>
            </div>
     );
}
 
export default Goat;
