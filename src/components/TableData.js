import Table from 'react-bootstrap/Table';
import './TableData.css';
import React,{useEffect,useState} from 'react';
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import { style } from '@mui/system';

function TableData({element}) {

  const [wordEntered, setWordEntered] = useState("");

  const handleSearchId = (event) => {
   /* const searchWord = event.target.value;
    setWordEntered(searchWord);*/
    if(event.key==="Enter")
    setId(event.target.value)

  };

  const clearInput = () => {
    setWordEntered("");
  };




  const [info, setInfo] = useState([]);
  const[id,setId]=useState('')
  useEffect(()=>{
    
   /* fetch(id?"http://localhost:8090/"+element+"/"+id : "http://localhost:8090/"+element).then((result)=>{
      result.json().then((resp)=>{
       // console.warn(resp.data);
        id?  setInfo(resp) :setInfo(resp["data"])

        console.log(info)*/

        fetch("http://localhost:8090/"+element ).then((result)=>{
      result.json().then((resp)=>{
       // console.warn(resp.data);
        setInfo(resp["data"]) 
        console.log(info)
        

      })

    })
  },[])
  useEffect(()=>{
     
    fetch("http://localhost:8090/"+element+"/"+id ).then((result)=>{
      result.json().then((resp)=>{
       // console.warn(resp.data);
        setInfo(resp) 
        console.log(info)
        

      })

    })
  },[id])

const show = () => {
  console.log("id in show "+id)
}


  return (
   <>
   <div className='mainn'>
      <div className="search">
          <div className="searchInputs">
            <input
              type="text"
              placeholder={"Looking for a specific id?"}
             
              onKeyPress={handleSearchId}
            />
            <div className="searchIcon">
              {wordEntered.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>
        </div>

        <table class="table" >
  <thead>
    <tr id='first-table'>
      <th scope="col">ID</th>
      <th scope="col">Date</th>
      <th scope="col">Category</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>


  {info.map((item, i)=>
            <tr id='first-table-content' key={i} >
<NavLink to={ item.id+"/details"} style={{ color: 'inherit', textDecoration: 'inherit' , position:'inherit' , justifyContent:'inherit'}}>
   
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.category}</td>
            <td>{item.type.name}</td>
            </NavLink>
            </tr>


      )}
  
  </tbody>
</table>
    </div>
    
    <Outlet></Outlet>
  </>
  );
}

export default TableData;