import React,{ Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//components
import {AddCategory} from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import Footer from './components/Footer';

const GiftExpertApp = ()=>{

  // const categories = ['One Punch','Samurai X','Dragon ball'];

  const [categories, setCategories] = useState(['Hola']);

  // const handleAdd = ()=> {
  //   setCategories([...categories,'HunterxHunter']);

  // }
   
  return(
    <Fragment>
      <div className='page__title'>
      <h2>Gif App</h2>
      </div>

      <AddCategory setCategories={ setCategories }/>
      <hr/>

      {/* <button onClick={handleAdd}> Agregar </button> */}
      <ul>
        {
          categories.map( category => 
            // <li key={category}>{category}</li>
            <GifGrid category={ category } key={ category }/> 
          )
        }
      </ul>
      <Footer/>
    </Fragment>

  )
}


ReactDOM.render(
    <GiftExpertApp />,
  document.getElementById('root')
);

