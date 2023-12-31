import React, { useEffect, useState } from 'react';
import squareLogo from '../../assets/square-logo.svg';

import './LoadScreen.css';

export default function LoadScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  return loading ? (
    <div className='load-screen'>
      <img src={squareLogo} alt='Square Logo' />
    </div>
  ) : null;
}
