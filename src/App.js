import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';



import { Backdrop, Header, HexTile, HexBar } from './components';

function App() {
  return (
    <div className='app-content'>
      <Backdrop />
    
    </div>
  );

  // return (
  //   <div style={{width: '100%', height: '100%', display: 'flex', alignContent: 'center', justifyContent: 'center'}} className='app-content'>
  //     <HexBar />
    
      
      
  //   </div>
  // );
}

export default App;
