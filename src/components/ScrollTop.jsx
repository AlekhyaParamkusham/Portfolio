import React,{useState} from 'react'
import { HiChevronDoubleUp } from "react-icons/hi";


const ScrollTop = () => {

const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <><button className='fixed w-full  right-4 bottom-5 h-16 text-2xl z-10 cursor-pointer text-white p-4 flex justify-end items-center '>
     <HiChevronDoubleUp onClick={scrollToTop}  className="bg-gray-500 p-3 rounded-full"  size={44}
     style={{display: visible ? 'inline' : 'none'}} />
    </button>
    </>
   
  )
}

export default ScrollTop;

  