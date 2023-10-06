import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import Button from './Button';
import MusicCreationForm from './MusicCreationForm';

import '../App.css';

function Navbar() {
  const [showForm, setShowForm] = useState(false);

  const handleCreateMusicClick = () => {
    setShowForm(true);
    console.log("setShowform is true now")
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className='py-0 h-[75px] sm:h-[88px] relative'>
      <nav className='flex w-full h-full justify-between items-center'>
        <img
          onClick={reloadPage}
          src={logo}
          alt='Logo'
          className='cursor-pointer mr-auto justify-start h-[72px]'
        />
        <Button onClick={handleCreateMusicClick} text='Create new Music' />
      </nav>
      {showForm && (
        <MusicCreationForm onClose={handleCloseForm} />
      )}
    </div>
  );
}

export default Navbar;
