import React from 'react';
import tedy from "../assets/images/tedy.jpg";
import tedyMusic from "../assets/music/mezmurYohans.mp3"; // Import the audio file

const CardMusic = () => {
  return (
    <div className="flex flex-col border pb-2 border-green-200 shadow shadow-green-400 rounded-lg">

    <div className=' flex gap-2 w-[380px] h-[180px] rounded-lg'>
      <img src={tedy} alt='tedy' className='w-[160px] h-[160px] rounded-lg'/>
      <div className='flex flex-col gap-4 justify-center items-center w-full mx-auto'>
        <h1 className='text-center text-3xl font-bold text-[#6d53e3]'>Tedy Afro</h1>
        <h1 className='text-center text-2xl font-bold text-[#53e3b3]'>TIZITA</h1>

        <button className='text-center text-xl font-bold text-[#53e3b] rounded-lg bg-red-600 px-3 py-1'>Delete this song</button>
      </div>
     </div>
      <div className="w-full flex justify-center">
         <audio controls className='border border-yellow-400 rounded-full'>
          <source src={tedyMusic} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
     

    </div>
    
  );
};

export default CardMusic;
