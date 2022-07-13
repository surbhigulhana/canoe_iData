import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Footer from "./footer";

import Sidebar from "./Sidebar";

const RegisterDriver = () => {
  // const [data, setUser] = useState([]);
  const [user, setUser] = useState([]);
  const [status, setUsstatus] = useState("");
  const [id, setId] = useState("");
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...user].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUser(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...user].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUser(sorted);
      setOrder("ASC");
    }
  };

  const [editShow, setEditShow] = useState(false);
  const handleClose = () => setEditShow(false);
  const handleShow = () => setEditShow(true);

  useEffect(() => {
    fetch(
      "http://localhost:4001/userShow"
    ).then((result) => {
      result.json().then((resp) => {
        setUser(resp);
      });
    });
  }, []);
  async function deleteData(id) {
    let result = await fetch(`http://localhost:4001/user/${id}`, {
      method: "delete",
    });
    let data = await result.json();
    console.log(data);
    fetch("http://localhost:4001/user").then((result) => {
      result.json().then((resp) => {
        setUser(resp);
      });
    });
  }

  function editDataDisplay(uid, id) {
    console.log("loop", id);
    const filterData = user.filter((item) => {
      return item._id === id;
    });
    console.log(filterData);
    setUsstatus(filterData[0].Status);
    setId(filterData[0]._id);
  }

  async function editData() {
    console.log("loop", id);
    let databody = {
      Status: status,
    };

    let result = await fetch(`http://localhost:4001/user/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(databody),
    });
    let data = await result.json();
    console.log(data);
    setUser();
    setUsstatus("");
    fetch(
      "http://localhost:4001/userShow"
    ).then((result) => {
      result.json().then((resp) => {
        setUser(resp);
      });
    });
  }

  return (
    <div>
      <Sidebar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div id="wrappe">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User Driver</h1>
              </div>
              <table
                id="example"
                className="table table-striped table-bordered"
                style={{ width: "70%", marginLeft: "350px" }}
              >
                <thead>
                  <tr>
                    <th className="bl5"> Serial No</th>
                    <th className="bl5">
                      {" "}
                      Name
                      <i
                        class="fa fa-arrow-up"
                        aria-hidden="true"
                        onClick={() => sorting("Name")}
                      ></i>{" "}
                      <i
                        class="fa fa-arrow-down"
                        aria-hidden="true"
                        onClick={() => sorting("Name")}
                      ></i>
                    </th>
                    <th className="bl5">
                      Email
                      <i
                        class="fa fa-arrow-up"
                        aria-hidden="true"
                        onClick={() => sorting("Email")}
                      ></i>{" "}
                      <i
                        class="fa fa-arrow-down"
                        aria-hidden="true"
                        onClick={() => sorting("Email")}
                      ></i>
                    </th>
                    <th className="bl5">
                      Phone
                      <i
                        class="fa fa-arrow-up"
                        aria-hidden="true"
                        onClick={() => sorting("MobileNo")}
                      ></i>{" "}
                      <i
                        class="fa fa-arrow-down"
                        aria-hidden="true"
                        onClick={() => sorting("MobileNo")}
                      ></i>
                    </th>
                    {/* <th className='bl5'>Delete</th> */}
                    <th className="bl5">
                      Status
                      <i
                        class="fa fa-arrow-up"
                        aria-hidden="true"
                        onClick={() => sorting("Status")}
                      ></i>{" "}
                      <i
                        class="fa fa-arrow-down"
                        aria-hidden="true"
                        onClick={() => sorting("Status")}
                      ></i>
                    </th>
                    <th className="bl5">Change-Status</th>
                  </tr>
                </thead>
                {user &&
                  user.map((item, index) => (
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
                        <td>{item.MobileNo}</td>
                        {/* <td>
                <Button
                  onClick={() => deleteData(item._id)}
                  style={{ marginTop: "12px" }}
                  >
                  Delete
                </Button>
              </td> */}
                        <td>{item.Status}</td>
                        <td>
                          <Button
                            onClick={() => {
                              editDataDisplay(item.uid, item._id);
                              handleShow();
                            }}
                            style={{
                              width: "100%",
                              marginTop: "2%",
                              marginBottom: "-2%",
                              marginLeft: "-6%",
                              borderRadius: "7px",
                            }}
                          >
                            Change Status
                          </Button>
                        </td>
                        <Modal show={editShow} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Status </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <select
                              id=" "
                              defaultValue={status}
                              onChange={(e) => setUsstatus(e.target.value)}
                            >
                              {/* <option value={usstatus}>Status</option> */}
                              <option
                                value="Active"
                                style={{ backgroundColor: "red" }}
                              >
                                Active
                              </option>
                              <option
                                value="Blocked"
                                style={{ backgroundColor: "green" }}
                              >
                                Blocked
                              </option>
                            </select>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={handleClose}
                              style={{ width: "20%" }}
                            >
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              onClick={() => {
                                editData(item.uid, item._id);
                                handleClose();
                              }}
                            >
                              Change
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery.easing.min.js"></script>

      <script src="js/sb-admin-2.min.js"></script>
      <br />
      <br />
      
      
    </div>
  );
};

export default RegisterDriver;
