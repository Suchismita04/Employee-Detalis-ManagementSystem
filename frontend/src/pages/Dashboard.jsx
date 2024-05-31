import React, { useState,useEffect } from 'react'
import '../styles/style.css'
import '../styles/dashboard.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Dashboard() {

const [showData,setShowData]=useState([])
const [searchTerm,setSearchTerm]=useState('')

  const api = axios.create({
    baseURL: '/api', // Check this URL
    withCredentials: true,
});
const fetchData=async()=>{
  try {
    const res= await api.post('/v1/users/showQinfo')
    setShowData(res.data)
  } catch (error) {
    console.log("Erro in fetching data ",error)
  }
}


  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = showData.filter((data) => {
    return (
      data.question.toLowerCase().includes(searchTerm.toLowerCase())
      
    );
  });

  const handleChange=(event)=>{
    setSearchTerm(event.target.value)
  }


  return (
    <>
    {/* value={searchTerm} onChange={handleSeachTermChenge} */}
    <Link className="nav-link f-color" to='/addQuestion'><button className='btn btn-success'>Add Question</button></Link>
     <form className="d-flex search" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleChange} />
       
      </form>

      <table className="table  table-striped">
  <thead>
    <tr>
      
      <th scope="col table-success">Question</th>
      <th scope="col table-success">Author</th>
      <th scope="col table-success">Topic</th>
    </tr>
  </thead>
  <tbody >
  {filteredData.map((data,index) => (
    <tr key={data.id || index} className='tr' style={{"height":"10px"}}>
      <td>{data.question}</td>
      <td>{data.author}</td>
      <td>{data.topic}</td>
    </tr>
))}
</tbody>
    
</table>
      
    </>
  )
}

export default Dashboard
