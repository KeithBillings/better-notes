import React from 'react';

// components
import LoadScreen from './components/LoadScreen/LoadScreen';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

// styles
import './styles/index.scss';

export default function App() {
  return (
    <div className='App'>
      <LoadScreen />
			<Navbar />
      <Home />
    </div>
  );
}
