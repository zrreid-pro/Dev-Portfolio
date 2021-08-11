import React from 'react';

import HexTile from '../HexTile';
import './HexBar.scss'

export default function Hexbar() {
    const sections = ['Bio', 'Skills', 'Projects', 'Contact'];

    return (
        <div className='ui'>
          
        </div>
    );

    // return (
    //     <ul className='hexbar'>
    //         {sections.map((section, index) => (
    //             <HexTile title={section} key={index} />
    //         ))}
    //     </ul>
    // );
}