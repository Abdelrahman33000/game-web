import React from 'react'
import './Gallery.css'
import Config from '../../component/animation/config2'

const Gallery = () => {
  return (
    <div dir='rlt' style={{  textAlign:"center"}} className='gallery'>
      <h1 style={{marginBottom:"0"}}>  مرحباً بكم في الألبوم الخاص بنا  </h1>
      <Config />
      <p> جميع الصور  </p>
      <p>  قسم المراجيح  </p>
      <p>  قسم الزحاليق  </p>
      <p>  قسم المواليد  </p>
      <p>  قسم النطيطات  </p>
      <p>  قسم القطنيات  </p>
      <p>  قسم الألعاب   </p>
  
    </div>
  )
}

export default Gallery
