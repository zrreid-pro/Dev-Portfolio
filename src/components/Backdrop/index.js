import React from 'react';

import './Backdrop.scss';

export default function Backdrop() {
    return (
        <div className='hexSheet'>
            <div className='overlay'></div>
            <div className='underlay'></div>
        </div>
        
    );
}