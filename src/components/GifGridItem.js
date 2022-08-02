import React from 'react'

export const GifGridItem = ({id,...rest}) => {
  
  // console.log({});
  return (
    <div className="card animate__animated animate__bounce">
      <img src={rest.url} alt=""/>
      <p>
        {rest.title} 
      </p>
    </div>
  )
}
