import Music from './components/Music';
import Navbar from './components/Navbar';
import './App.css';

import styles from './style';

export default function App() {
  return (
    <div className=" w-full">

      <div id='navebar' className={`${styles.flexStart}  ${styles.paddingNav} z-20 fixed w-full top-2 font-poppins`}>
           <div className={` w-full max-w-[1300px] bg-white rounded-full px-4 sm:px-8 border border-[#53e3b3] shadow-sm shadow-[#53e3b3]`} >
              <Navbar />
           </div>
        </div>

        
        <div id='home' className={`${styles.flexStart} ${styles.paddingX} ${styles.paddingY} font-poppins`}>
           <div className={`${styles.boxWidth}`}>
              <Music />
           </div>
        </div>
        

    </div>
  )
}