import React from 'react';
import './App.scss';
import BubbleButton from "./BubbleButton";

function App() {
  return (
    <div className="App">
        <div className={'center'}>
            <BubbleButton color='red' size='lg'>Click me</BubbleButton>
        </div>
    </div>
  );
}

export default App;
