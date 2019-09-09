import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';


function ImgGallery(){
  const IMAGES =[
    {
        src: "/img/Backgrounds/about_us.jpg",
        thumbnail: "/img/Backgrounds/about_us.jpg",
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "/img/Backgrounds/gallery.jpg",
        thumbnail: "/img/Backgrounds/gallery.jpg",
        caption: "Boats (Jeshu John - designerspics.com)"
      },
      {
        src: "/img/Backgrounds/info_bg.jpg",
        thumbnail: "/img/Backgrounds/info_bg.jpg",
      },
      {
        src: "/img/Backgrounds/venue.jpg",
        thumbnail: "/img/Backgrounds/venue.jpg",
      },

      {
        src: "/img/Gallery/baseballs.jpg",
        thumbnail: "/img/Gallery/baseballs.jpg",
      },
      {
        src: "/img/Backgrounds/info_bg.jpg",
        thumbnail: "/img/Backgrounds/info_bg.jpg",
      }
    ]

  return(
    <section id="home">
    <div>
        <Gallery
        images={IMAGES}
        enableLightbox={true}
        enableImageSelection={false}/>
    </div>
    </section>
  )

}


export default ImgGallery;
