import React from 'react';
import logo from './logo.svg';
import './App.css';
import HealthCheckComponent from './component/HealthCheckComponent';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <div id='app'>
      <HealthCheckComponent/>
    </div>
  );
};

export default App;