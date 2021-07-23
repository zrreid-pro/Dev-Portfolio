import React from 'react';
import { Nav } from 'react-bootstrap';

//clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);

export default function HexTile({ title }) {
    return (
        <li className='hextile'>
            <Nav.Link href=''>{title}</Nav.Link>
        </li>
    );
}