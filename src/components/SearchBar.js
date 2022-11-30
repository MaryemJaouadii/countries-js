import React,{useState} from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import TableData from './TableData';
import { NavLink, Route, Routes } from 'react-router-dom';
import Details from './Details';


function SearchBar({ placeholder, data ,SetElement,element}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [country,setCountry] = useState(filteredData);


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setCountry(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const onSearch = () =>{
    SetElement(filteredData[0].name);
    
   
    


  }
  const format =() =>{

    setWordEntered(filteredData[0].name)
    setCountry([])
    console.log("el searched: "+filteredData[0].name)
    
  }
  return (
    <div className='sss'> 
    <div style={{width:"40%"}} className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {country.length !== 0 && (
        <div className="dataResult">
          {country.slice(0, 15).map((value, key) => {
            return (
              <div className='country-fetched'>
                <span className={value.spanClass}></span>
              <NavLink  style={{ color: 'inherit', textDecoration: 'inherit' , position:'inherit' , justifyContent:'inherit'}} to={value.name} onClick={format}>  <p id='countryName' >{value.name} </p></NavLink>
               
            
              </div>
            );
          })}
        </div>
      )}
    </div>
    <div className='list'>
    {filteredData[0]? <Routes>
                  <Route path={filteredData[0].name} element={

                  <TableData element={filteredData[0].name}></TableData>

                  
                  }>
                    <Route path=':id/details' className="tt" element={<Details name={filteredData[0].name}></Details>}></Route>
                  </Route>
                  
              </Routes>:null

}
   
</div>

    </div>
  );
}

export default SearchBar;