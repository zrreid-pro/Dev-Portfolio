import React from 'react';

import HexTile from '../HexTile';

export default function HexRow() {

    const generateTiles = (width) => {
        console.log('Window Width:', width)
        let tiles = [];
        for (let i=0; i<(width/38); i++) {
            tiles.push(<HexTile key={i}/>);
        }

        return tiles;
    }

    return (
        <div className='hexRow'>
            <HexTile className='backdrop'/>
            <HexTile className='backdrop'/>
            <HexTile className='backdrop'/>
            <HexTile className='backdrop'/>
            <HexTile className='backdrop'/>
            <HexTile className='backdrop'/>
            <HexTile className='backdrop'/>
            <HexTile className='backdrop'/>
            <HexTile className='backdrop'/>
            <HexTile className='backdrop'/>
        </div>
    );
}