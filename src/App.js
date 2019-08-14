import React from 'react';
import Countdown from 'react-count-down'
import './App.css';


function App() {
  const cb = () => {
    console.log('expired callback')
  }

  const OPTIONS = {
    
    endDate: '01/01/2020 12:00 AM',
    cb
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./dungeoneers_torch.gif')} className="App-logo" alt="logo" />
       
        <p className="Count-Text">
          <Countdown options={OPTIONS} />
        </p>
      </header>
    </div>
  );
}

export default App;
