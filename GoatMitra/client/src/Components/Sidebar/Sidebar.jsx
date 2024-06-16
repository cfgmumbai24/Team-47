import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import profile_icon from '../../assets/profile_icon.png'

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <Link to = {`/user/${props.id}`} style={{ textDecoration: 'none', marginLeft: '30px', display: 'flex', gap: '10px', marginTop: '20px' }}>
                <img src={profile_icon} alt="" />
                <p>{props.id}</p>
            </Link>
            <Link to={`/user/${props.id}/analysis`} style={{ textDecoration: 'none' }}>
                <div className="sidebar-item">
                    <p>Data Analysis</p>
                </div>
            </Link>
            <Link to={`/user/${props.id}/palaks`} style={{ textDecoration: 'none' }}>
                <div className="sidebar-item">
                    <p>Goat Palaks</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar