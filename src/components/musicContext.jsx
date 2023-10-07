import { createContext, useState } from "react";
import axios from "axios";

const musicContext = createContext();

export const MusicProvider = ({ children }) => {

  const [formValues, setFormValues] = useState({
     title: "",
     singer: "",
     audio: null,
     tumbnail: null,
     gener: ""
  })

  const [music, setMusic] = useState([]);


   const handleMusicChange = (e) => {
   const file = e.target.files[0];
   if (file && (file.type === 'audio/mpeg' || file.type === 'audio/mp3')) {
     setFormValues({...formValues, audio: file})
   } else {
     alert('Please select a valid audio file (MP3 or other supported formats).');
   }
 };

 const handlePhotoChange = (e) => {
   const file = e.target.files[0];
   if (file && (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png')) {
     setFormValues({...formValues, tumbnail: file});
   } else {
     alert('Please select a valid image file (JPEG, JPG, or PNG).');
   }
 };

 const onchange = (e) => {
   const {name, value} = e.target;
   setFormValues({...formValues, [name] : value})
   console.log(formValues);
 }

const getMusic = async (id) => {
   const response = await axios.git("http://127.0.0.1:8000/api/v1/music/" + id);
   setMusic(response.data)
}

 

   return  <musicContext.Provider value= {{
      music, 
      getMusic,
      handleMusicChange,
      handlePhotoChange,
      onchange,
      formValues,
   }}>{children}</musicContext.Provider>
}

export default musicContext;