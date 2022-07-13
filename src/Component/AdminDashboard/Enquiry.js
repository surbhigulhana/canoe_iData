import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Sidebar from "./Sidebar";

const Enquiry = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/EnquiryShow").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  return (
    <div>
      <Sidebar />
      <br /> <br /> <br /> <br />
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Alerts</h1>
        </div>
        <table
          id="example"
          class="table table-striped table-bordered"
          style={{ width: "60%", marginLeft: "280px" }}
        >
          <thead>
            <tr>
              <th class="bl5">Serial No</th>
              <th class="bl5">Name</th>
              <th class="bl5">Email</th>
              <th class="bl5">Messages</th>
            </tr>
          </thead>
          {data.map((item, index) => (
            <tbody>
              <tr
                key={item._id}
                style={{
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontFamily: "Times New Roman",
                }}
              >
                <th scope="row">{index + 1}</th>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
              
                <td>{item.Message}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <br />
      <br /><br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      
      <Footer />
    </div>
  );
};

export default Enquiry;
