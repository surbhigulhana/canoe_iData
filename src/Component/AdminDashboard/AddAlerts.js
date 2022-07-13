import React from 'react'
import Footer from './footer'
import Sidebar from './Sidebar'

const AddAlerts = () => {
  return (
    <div>
      <Sidebar/>
      <br/><br/><br/><br/>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800" style={{marginLeft:"360px"}}>Add Alerts</h1>
            <br/>
          </div>
            <center >Messages <textarea rows="10" cols="25"></textarea>
            <div class="col-md-10"><button type="button" class="btn btn-success av" id="shift1">Submit</button></div>

            </center>


      <Footer/>
    </div>
  )
}

export default AddAlerts
