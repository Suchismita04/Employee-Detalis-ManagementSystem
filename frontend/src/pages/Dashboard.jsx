import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <>
    {/* value={searchTerm} onChange={handleSeachTermChenge} */}
    <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">


                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                        <li className="nav-item">
                            <Link className="nav-link f-color" to='/addQuestion'><button className='btn btn-success'>Add Question</button></Link>
                        </li>

                    </ul>



                </div>
            </nav>
     <form className="d-flex search" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <table className="table  table-striped">
  <thead>
    <tr>
      
      <th scope="col table-success">Question</th>
      <th scope="col table-success">Author</th>
      <th scope="col table-success">Topic</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
     
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      
    </>
  )
}

export default Dashboard
