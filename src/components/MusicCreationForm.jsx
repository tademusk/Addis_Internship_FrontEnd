import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

const MusicCreationForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [singer, setSinger] = useState('');
  const [photo, setPhoto] = useState(null);
  const [genre, setGenre] = useState('');
  const [music, setMusic] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png')) {
      setPhoto(file);
    } else {
      alert('Please select a valid image file (JPEG, JPG, or PNG).');
    }
  };

  const handleMusicChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'audio/mpeg' || file.type === 'audio/mp3')) {
      setMusic(file);
    } else {
      alert('Please select a valid audio file (MP3 or other supported formats).');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here (e.g., send data to a server)


    console.log('Submitted:', { title, singer, photo, genre, music });
    onClose();
  };

  return (
      <div className="fixed inset-0 flex justify-center items-center">
          <div className='relative max-w-[100vw] bg-slate-300 rounded-lg p-8'> 
             <button className="absolute top-1 right-2" onClick={onClose}>
                <FaWindowClose size={35} color='red' />
              </button>
              <form onSubmit={handleSubmit} className='flex flex-col gap-4 pt-8'>
                <input className='h-10 rounded-full px-4' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input className='h-10 rounded-full px-4'  type="text" placeholder="Singer" value={singer} onChange={(e) => setSinger(e.target.value)} required />
                <input className='h-10 rounded-full px-4'  type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
                <label htmlFor="#photo">Please choose a photo :</label>
                <input id='photo' className='h-10 inline rounded-full px-4'  type="file" accept=".jpg, .jpeg, .png" onChange={handlePhotoChange} required />
                <label htmlFor="#music">Please choose a Music :</label>
                <input className='h-10 rounded-full px-4'  type="file" accept=".mp3, .mpeg" onChange={handleMusicChange} required />
                <button className='h-10 rounded-full px-4 bg-green-600 text-white'  type="submit">Create Music</button>
              </form>
            </div>  
        </div>
      
  );
};

export default MusicCreationForm;
