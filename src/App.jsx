import './App.css';
import { useState,useEffect, use } from 'react';
import Page from './components/page';

async function api(index){
    let req=await fetch(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    let data=await req.json();
    return data;
}


export default function App(){
  const [index,setIndex]=useState(1);

  function Load(){
    if (index>1){
      setIndex(index-1)
    }
  }

  function Next(){
    setIndex(index+1)
  }
  return (
    <div>
      {/* <Page/> */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <button onClick={Load}>Prev</button>
      <h3 style={{display:'inline',color:'white',marginLeft:'15px',marginRight:'15px'}}>Page number: {index}</h3>
      <button onClick={Next}>Next</button>
      </div>
    </div>
  )
}