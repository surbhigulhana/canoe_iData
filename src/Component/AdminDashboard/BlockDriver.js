import React from "react";
import Footer from "./footer";
import Sidebar from "./Sidebar";


const BlockDriver = () => {
  return (
    <div>
<Sidebar/>
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">User Driver</h1>
            </div>
            <table
              id="example"
              className="table table-striped table-bordered"
              style={{ width: "70%", marginLeft:"350px"}}
            >
              <thead>
                <tr>
                  <th className="bl5"> Name</th>
                  <th className="bl5">Email Address</th>
                  <th className="bl5">Phone</th>
                  <th className="bl5">
                    Subscription Plan (monthly/ annualy)
                  </th>
                  <th className="bl5">Restrict User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Name">Amit</td>
                  <td data-label="Email">amitmshr04@gmail.com</td>
                  <td data-label="Phone">9999999999</td>
                  <td data-label="Subscription Plan">Annualy</td>
                  <td data-label="Restrict User">
                    <a
                      href="url_to_delete"
                      onclick="return confirm('Do you want to Delete the user?');"
                    >
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ background: "#BC1C21" }}
                      >
                        Delete
                      </button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-label="Name">Amit</td>
                  <td data-label="Email">amitmshr04@gmail.com</td>
                  <td data-label="Phone">9999999999</td>
                  <td data-label="Subscription Plan">Annualy</td>
                  <td data-label="Restrict User">
                    <a
                      href="url_to_delete"
                      onclick="return confirm('Do you want to Delete the user?');"
                    >
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ background: "#BC1C21" }}
                      >
                        Delete
                      </button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-label="Name">Amit</td>
                  <td data-label="Email">amitmshr04@gmail.com</td>
                  <td data-label="Phone">9999999999</td>
                  <td data-label="Subscription Plan">Annualy</td>
                  <td data-label="Restrict User">
                    <a
                      href="url_to_delete"
                      onclick="return confirm('Do you want to Delete the user?');"
                    >
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ background: "#BC1C21" }}
                      >
                        Delete
                      </button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-label="Name">Amit</td>
                  <td data-label="Email">amitmshr04@gmail.com</td>
                  <td data-label="Phone">9999999999</td>
                  <td data-label="Subscription Plan">Annualy</td>
                  <td data-label="Restrict User">
                    <a
                      href="url_to_delete"
                      onclick="return confirm('Do you want to Delete the user?');"
                    >
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ background: "#BC1C21" }}
                      >
                        Delete
                      </button>
                    </a>
                  </td>
                </tr>
                </tbody>
            </table>
          </div>
        </div>

        
      </div>
    </div>

    <a className="scroll-to-top rounded" href="#page-top">
      <i className="fas fa-angle-up"></i>
    </a>

    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>

    <script src="js/sb-admin-2.min.js"></script>
    <Footer/>
  </div>
  )
}

export default BlockDriver
