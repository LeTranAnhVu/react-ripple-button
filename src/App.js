import React from 'react';
import './App.scss';
import RippleButton from "./RippleButton";

function App() {
  return (
    <div className="App">
        <div className={'center'}>
            <RippleButton color='red' size='lg'>Hover me</RippleButton>
            <span style={{width: '20px'}}></span>
            <RippleButton color='blue' size='lg'>Hover me</RippleButton>
        </div>
    </div>
  );
}

export default App;
