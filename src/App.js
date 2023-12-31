import React from 'react';

// components
import LoadScreen from './components/LoadScreen/LoadScreen';
import Home from './components/Home/Home';

// styles
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <LoadScreen />
      <Home />
    </div>
  );
}
