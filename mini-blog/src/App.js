import React, { useState } from 'react'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'
import './style.css';
function App() {
  const [refresh,setReferesh]=useState(false);

  const handelPostCreated=()=>{
    setReferesh(!refresh);
  }
  return (
    <>
     <div>
      <h1>Mini Blog Application</h1>
      <BlogForm onPostCreated={handelPostCreated}/>
      <BlogList key={refresh}/>
     </div>
    </>
  )
}

export default App
