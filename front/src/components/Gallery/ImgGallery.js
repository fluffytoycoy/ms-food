import React from 'react';
import Gallery from 'react-grid-gallery';
import './ImgGallery.scss'

function ImgGallery(){
  const IMAGES =[

      {
        src: "/img/Backgrounds/gallery.jpg",
        thumbnail: "/img/Backgrounds/gallery.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Backgrounds/venue.jpg",
        thumbnail: "/img/Backgrounds/venue.jpg",
        thumbnailHeight: 500,
      },

      {
        src: "/img/Gallery/baseballs.jpg",
        thumbnail: "/img/Gallery/baseballs.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/bacon_wrap.jpg",
        thumbnail: "/img/Gallery/bacon_wrap.jpg",
        thumbnailHeight: 500,
        caption: "Bacon Wraps",
      },
      {
        src: "/img/Gallery/bar_nuts.jpg",
        thumbnail: "/img/Gallery/bar_nuts.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/beef_mushrooms.jpg",
        thumbnail: "/img/Gallery/beef_mushrooms.jpg",
        thumbnailHeight: 500,
        caption: "Mushroom Steak",
      },
      {
        src: "/img/Gallery/booths.jpg",
        thumbnail: "/img/Gallery/booths.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/buffalo_whiskey.jpg",
        thumbnail: "/img/Gallery/buffalo_whiskey.jpg",
        thumbnailHeight: 500,
        caption: "buffalo ol' Fashioned",
      },
      {
        src: "/img/Gallery/chocolate_dessert.jpg",
        thumbnail: "/img/Gallery/chocolate_dessert.jpg",
        thumbnailHeight: 500,
        caption: "crème glacée au chocolat",
      },
      {
        src: "/img/Gallery/eggs.jpg",
        thumbnail: "/img/Gallery/eggs.jpg",
        thumbnailHeight: 500,
        caption: "oeufs farcis",
      },
      {
        src: "/img/Gallery/fruit_drink.jpg",
        thumbnail: "/img/Gallery/fruit_drink.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/lemon_meringue.jpg",
        thumbnail: "/img/Gallery/lemon_meringue.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/Mojito.jpg",
        thumbnail: "/img/Gallery/beef_mushrooms.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/Mojito.jpg",
        thumbnail: "/img/Gallery/beef_mushrooms.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/pork.jpg",
        thumbnail: "/img/Gallery/pork.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/ranch_burger.jpg",
        thumbnail: "/img/Gallery/ranch_burger.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/samon.jpg",
        thumbnail: "/img/Gallery/samon.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/sports_rack.jpg",
        thumbnail: "/img/Gallery/sports_rack.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/steak.jpg",
        thumbnail: "/img/Gallery/steak.jpg",
        thumbnailHeight: 500,
      },
      {
        src: "/img/Gallery/strawberry.jpg",
        thumbnail: "/img/Gallery/strawberry.jpg",
        thumbnailHeight: 500,
      },

    ]

  return(
    <section className="body" id="gallery">
      <div className="container">
      <div className= "title-bar">
        <div>
          <h3>Gallery</h3>
        </div>
      </div>
          <Gallery
          images={IMAGES}
          enableLightbox={true}
          rowHeight={300}
          enableImageSelection={false}/>
          </div>
    </section>
  )

}


export default ImgGallery;
