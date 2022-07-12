import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';



import { Backdrop, Header, HexTile, HexBar, MainContent, Sidebar } from './components';

function App() {
  return (
    <div className='app-content'>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
