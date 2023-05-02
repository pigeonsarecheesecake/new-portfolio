import React from 'react';
import "./NavigationBar.css";
import Socials from '../Socials/Socials';


export default function NavigationBar({logo, mode}) {
  return (
   <div className={`navigation-bar ${mode}`}>
        <div className='menu'>
          {logo}
          <a>Home</a>
          <a>Projects</a>
          <a>About</a>
          <a>Contact</a>
        </div>
        <Socials mode={mode}/>
   </div>
  )
}

