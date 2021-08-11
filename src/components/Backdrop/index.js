import React from 'react';

import './Backdrop.scss';

export default function Backdrop() {
    // return (
    //     <div className='backdrop'>
    //         <div className='circle1'>
    //             <div className='spoke'></div>
    //             <div className='spoke'></div>
    //             <div className='spoke'></div>
    //         </div>
    //     </div>
        
    // );

    return (
        <div className='hexSheet'>
            <div className='overlay'></div>
            <div className='underlay'></div>
        </div>
        
    );
}