

import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import './SearchBar.css'
function Details({name}) {



  const [info, setInfo] = useState([]);
  const id=useParams()



   

  useEffect(()=>{
    console.log(id)
    fetch("http://localhost:8090/"+name+"/"+id.id).then((result)=>{
      result.json().then((resp)=>{
       // console.warn(resp.data);
        setInfo(resp)

      })

    })
  },[id])

  console.warn(info)

  return (

    
    <div className="detailsTable">



     


<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Awarded Date</th>
      <th scope="col">Title</th>
      <th scope="col">Source URL</th>
    </tr>
  </thead>
  <tbody>
  {info.map((item, i)=>
            <tr key={i} >
            <td>{item.id}</td>
            <td>{item.awarded[0].date}</td>
            <td>{item.title}</td>
            <td><a  style={{ color: 'inherit', textDecoration: 'inherit'}} href={item.src_url}>{item.src_url}</a></td>
            </tr>


      )}
  </tbody>
</table>



  



    </div>
  );
}

export default Details;
