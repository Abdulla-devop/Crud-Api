import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MainPage } from './All'
import { AddDetails } from './Add'
import { Route, Routes } from 'react-router'
import { getAllMember } from './helper/helper'
import { EditDetails } from './edit.jsx'
import EditUser from './pages/Editmem.jsx'

// getting data from api and stored to state

function App() {
       const [infoData,setInfodata] = useState()
       useEffect(() => {
      getAllMember().then((data) => {
        setInfodata(data);
      });
       },[]);
  return (
      // routes for each page
  <div className="app">
   <Routes>
    <Route exact path="/" 
    element={
    <MainPage infoData={infoData} setInfodata={setInfodata}/>}/>
    <Route 
    path="/addpg" 
    element={<AddDetails infoData={infoData} setInfodata={setInfodata}/>}/>
    <Route 
    path="/edit/:id" 
    element={<EditUser infoData={infoData} setInfodata={setInfodata}/>}/>
   </Routes>
   </div>
    
  )
}

export default App

