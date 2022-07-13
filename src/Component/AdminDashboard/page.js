import React from "react";
import { Link } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/style.css";
import "../css/all.min.css";
import "../css/nunito.css";
import "../css/sb-admin-2.min.css";
import "../css/dataTables.bootstrap4.min.css";
import img1 from '../img/ser9.jpg'
import Footer from "./footer";
// import '../js/jquery-3.5.1.js'
// import '../js/jquery.dataTables.min.js'
// import '../js/dataTables.bootstrap4.min.js'

const Page = () => {
  return (
    <div>
      <div id="wrapper">
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            class="sidebar-brand d-flex align-items-center justify-content-center"
            href="#"
          >
            <div class="sidebar-brand-icon ">LOGO</div>
          </a>

          <hr class="sidebar-divider my-0" />

          <hr class="sidebar-divider" />

          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-fw fa-cog"></i>
              <span>
                <Link to="/Page" id="j">Dashboard</Link>{" "}
              </span>
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span><Link to="" id="j">User Driver</Link></span>
            </a>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <a class="collapse-item" href="#">
                  <Link to="/RegisterDriver" id="j">Registered Drivers</Link>
                </a>
               
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <i class="fas fa-fw fa-cog"></i>
              <Link to="" id="j">
                Duties
              </Link>
            </a>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <a className="collapse-item" href="#">
                  <Link to="/uploadD" id="j">Upload Duties</Link>
                </a>
                <br />
                <a className="collapse-item" href="#">
                  <Link to="/Alld" id="j">All Duties</Link>
                </a>
                <a className="collapse-item" href="#">
                  <Link to="/Ond "id="j">Ongoing Duties</Link>
                </a>
            
                <a className="collapse-item" href="#">
                  <Link to="/Comd "id="j">Complete Duties</Link>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-fw fa-cog"></i>
              <Link to="/Location" id="j">
                Driver Location
              </Link>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              <i class="fas fa-fw fa-cog"></i>
              <Link to="" id="j">
                Alerts
              </Link>{" "}
            </a>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <a className="collapse-item" href="#">
                  <Link to="/AddAlerts" id="j">Add Alerts</Link>
                </a>
                <br />
                <a className="collapse-item" href="#">
                  <Link to="/AllAlerts" id="j">All Alerts</Link>
                </a>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-fw fa-cog"></i>
              <Link to="/" id="j">
                Transaction History
              </Link>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-fw fa-cog"></i>
              <Link to="/Enquiry" id="j">
                Enquiry
              </Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-fw fa-cog"></i>
              <Link to="/ChatApp" id="j">
                Chat
              </Link>
            </a>
          </li>

          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <header>
              <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button
                  id="sidebarToggleTop"
                  class="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i class="fa fa-bars"></i>
                </button>

                <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary an" type="button">
                    
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </form>

                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown no-arrow d-sm-none">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-search fa-fw"></i>
                    </a>

                    <div
                      class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form class="form-inline mr-auto w-100 navbar-search">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div class="input-group-append">
                            <button class="btn btn-primary an" type="button">
                              <i class="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

                  <li class="nav-item dropdown no-arrow">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="mr-2 d-none d-lg-inline text-gray-600 small am">
                        Anil Singh
                      </span>
                      <img
                        class="img-profile rounded-circle"
                        src={img1}
                      />
                      &nbsp; &nbsp;
                      <button type="button" class="btn btn-primary an1">
                        <Link to="/">Logout</Link>
                      </button>
                    </a>

                    <div
                      class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <div class="dropdown-divider"></div>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </header>
            <div class="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">All Duties</h1>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <div class="da">
                    <div class="da1">Total pending duties</div>
                    <div class="da2" style={{ textAlign: "center" }}>
                      30
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="da">
                    <div class="da1">Location A pending duties</div>
                    <div class="da2" style={{ textAlign: "center" }}>
                      12
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="da">
                    <div class="da1">Location B pending duties</div>
                    <div class="da2" style={{ textAlign: "center" }}>
                      16
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer
            class="sticky-footer bg-white"
            style={{
              height: "80px",
              width: "90%",
              marginTop: "590px",
              position: "fixed",
              marginLeft: "0px",
            }}
          >
            <div class="container my-auto">
              <span id="sp"> © Canoe & Kayak Pickups @ All right reserved</span>
            </div>
          </footer>
          {/* <Footer/> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
