import React from 'react';

// import NewNote from '../../assets/new-note.svg';

export default function Navbar(params) {
  return (
    <div className='navbar'>
      <h1 className='title'>BetterNotes</h1>
      <div className='links'>
        <div className='link new-note'>
          {/* <NewNote /> */}
        </div>
      </div>
    </div>
  );
}
