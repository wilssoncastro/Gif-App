import React, { Fragment } from 'react'
import { useFecthGifs } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';
import './gridFGifs.css'

export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([]);

  const { data:images, loading } = useFecthGifs(category);

  //IGUAL QUE COMPONENTDIDMOUNT

  return (
    <div>
      <div className='title_searched'>
      <h3 >{ category } </h3>
      </div>

        { loading && <div>'Cargando...'</div> } 
        <div className="card-grid">
          {images.map((image)=>{
            return(
              <div>
              <GifGridItem key={image.id} {...image}></GifGridItem>
              </div>
              )
            })}                
        </div> 
    </div>
  )
}
