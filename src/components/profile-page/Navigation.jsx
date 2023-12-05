import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Navigation({ profileImage }) {
    return (
        <nav className='nav-profile-page'>
            <ul>
                <li><button><Link to="/beranda">Beranda</Link></button></li>
                <li><button>Teman</button></li>
                <li><button>Buat</button></li>
            </ul>
            <div className="search-profile-container">
                <input className='nav-search' type="search" placeholder="Cari..." />
                <div className="profile-circle">
                    <img src={profileImage} alt="Profile" />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
