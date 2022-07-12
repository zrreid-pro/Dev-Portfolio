import React, { useState } from 'react';

import './Sidebar.scss';

export default function Sidebar() {
    


    return (
        <div className='sidebar'>
            {/* <div className='sidebar-header'>
                <i className='bx bxs-chevrons-right'></i>
            </div> */}

            <nav className='nav-list'>
                <div className='nav-item'>
                <i className='bx bxs-chevrons-right'></i>
                </div>
                <div className='nav-item'>
                    <i className='bx bx-user'></i>
                    <span>Profile</span>
                </div>
                <div className='nav-item'>
                    <i className='bx bx-data'></i>
                    <span>Skills</span>
                </div>
                <div className='nav-item'>
                    <i className='bx bx-code'></i>
                    <span>Projects</span>
                </div>
                <div className='nav-item'>
                    <i className='bx bx-envelope'></i>
                    <span>Contact</span>
                </div>
            </nav>
        </div>
    );
}