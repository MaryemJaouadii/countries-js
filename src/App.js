import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import CountryName from './Countries.json';
import TableData from './components/TableData';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';



function App() {

  const [element,SetElement] =useState('aaa')
  

 const affElement = ()=>{
  console.log(element)

  }

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <div className="searchCountyBar">
      <SearchBar element={element} SetElement={SetElement} placeholder="Search a country..." data={CountryName} />
      </div>
      
    <Footer></Footer>

      
      </div>
      </BrowserRouter>
  );
}

export default App;
