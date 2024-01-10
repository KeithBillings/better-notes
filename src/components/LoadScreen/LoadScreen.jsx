import React, { useEffect, useState } from 'react';
import { ReactComponent as SquareLogo } from '../../assets/square-logo.svg';


export default function LoadScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  return loading ? (
    <div className='load-screen'>
			<SquareLogo />  {/* this breaks */}
    </div>
  ) : null;
}
