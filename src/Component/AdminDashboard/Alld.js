import React,{useState,useEffect} from 'react'
import Footer from './footer'
import Sidebar from './Sidebar'

const Alld = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/dutyShow").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  return (
    <div>
        <Sidebar/>
        <br/>
        <br/><br/>
        <br/>
      <div class="container-fluid">

        
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">All Duties</h1>
            
          </div>
<table id="example" class="table table-striped table-bordered" style={{width:"70%",marginLeft:"330px"}}>
        <thead>
         
        
        
            <tr>
                <th class="bl5">Serial No</th>
                <th class="bl5"> Pickup Location</th>
                <th class="bl5">Boat Type</th>
                <th class="bl5">Boat Number</th>
                {/* <th class="bl5">Status</th> */}
                
               
            </tr>
        </thead>
        {data.map((item, index) => (
          <tbody>
            <tr
              key={item._id}
              style={{ fontSize: "15px", fontStyle: "normal" ,  fontFamily: "Times New Roman"}}
            >
              <th scope="row">{index + 1}</th>
              <td>{item.Pickup_Location}</td>
              <td>{item.Boat_Type}</td>
              <td>{item.Boat_Number}</td>

             
            </tr>
          </tbody>
        ))}
        
    </table>

        </div>
      <Footer/>
    </div>
  )
}

export default Alld
