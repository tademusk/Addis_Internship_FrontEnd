import React, { useContext, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import musicContext from './musicContext';
import axios from 'axios';

const MusicCreationForm = ({ onClose }) => {  

  const { formValues, onchange, handleMusicChange, handlePhotoChange } = useContext(musicContext);
  const [errors, setErrors] = useState({});

  const testValue = {
    title : "a",
    singer : "b",
    audio : "audio.mp3",
    tumbnail: "photo.png",
    gener: "c"
  }

  const storeMusic = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/v1/music", formValues);
    //   getMusics();
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
        console.log(formValues);
      }
    }
  };
  
  return (
      <div className="fixed inset-0 flex justify-center items-center">
          <div className='relative max-w-[100vw] bg-slate-300 rounded-lg p-8'> 
             <button className="absolute top-1 right-2" onClick={onClose}>
                <FaWindowClose size={35} color='red' />
              </button>
              <form onSubmit={storeMusic} className='flex flex-col gap-4 pt-8'>
                <input name='title' className='h-10 rounded-full px-4' type="text" placeholder="Title" value={formValues["title"]} onChange={onchange} required />
                <input name='singer' className='h-10 rounded-full px-4'  type="text" placeholder="Singer" value={formValues["singer"]} onChange={onchange} required />
                <input name='gener' className='h-10 rounded-full px-4'  type="text" placeholder="Genre" value={formValues["gener"]} onChange={onchange} required />
                <label htmlFor="tumbnail">Please choose a photo :</label>
                <input name='tumbnail' id='tumbnail' className='h-10 inline rounded-full px-4'  type="file" accept=".jpg, .jpeg, .png" onChange={handlePhotoChange} required />
                <label htmlFor="audio">Please choose a Music :</label>
                <input  name='audio' id="audio" className='h-10 rounded-full px-4'  type="file" accept=".mp3, .mpeg" onChange={handleMusicChange} required />
                <button className='h-10 rounded-full px-4 bg-green-600 text-white'  type="submit">Create Music</button>
              </form>
            </div>  
        </div>
      
  );
};

export default MusicCreationForm;
