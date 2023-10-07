import React, {useContext, useState, useEffect} from 'react'
import musicContext from './musicContext'
import CardMusic from './CardMusic'
import axios from 'axios'


const Music = () => {

  const [musics, setMusics] = useState([]);

  useEffect ( ()=> {
    const getMusics = async () => {
    const apiMusic = await axios.get("http://127.0.0.1:8000/api/v1/music");
    setMusics(apiMusic.data) 
  }
 getMusics();
  }, [])

console.log(musics)

  return (
    <div className='flex gap-8 flex-wrap justify-center'>
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
        <CardMusic />
    </div>
  )
}

export default Music