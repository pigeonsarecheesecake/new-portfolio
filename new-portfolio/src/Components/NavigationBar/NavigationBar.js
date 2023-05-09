import React from 'react';
import "./NavigationBar.css";
import Socials from '../Socials/Socials';

export default function NavigationBar({logo, mode}) {
  return (
   <div className={`navigation-bar ${mode}`}>
        <div className='menu'>
          {logo}
          <a href='#home-page'>Home</a>
          <a href='#projects-page'>Projects</a>
          <a href='#about-page'>About</a>
          <a href='#contact-page'>Contact</a>
        </div>
        <Socials mode={mode}/>
   </div>
  )
}

