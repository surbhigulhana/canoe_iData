import React from 'react'

import Footer from './footer';
import Sidebar from './Sidebar';

const UploadD = () => {
  return (
    <div>
    <Sidebar/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="container-fluid" >
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800"style={{marginLeft:"400px"}}>Upload Duties</h1>
  
</div>

<form style={{marginLeft:"400px",width:"60%"}}>
<div class="row" >
<div class="col-md-2">Select Pickup Location </div>
<div class="col-md-10"><div class="input-group mb-3">

<select class="custom-select" id="inputGroupSelect01">
<option selected>Select Pickup Location</option>
<option value="1">Location One</option>
<option value="2">Location Two</option>
<option value="3">Location Three</option>
</select>
</div></div>
</div>
<div class="row">
<div class="col-md-2">Boat Type</div>
<div class="col-md-10"><div class="input-group mb-3">

<select class="custom-select" id="inputGroupSelect01">
<option selected>Boat Type</option>
<option value="1">Boat Type One</option>
<option value="2">Boat Type Two</option>
<option value="3">Boat Type Three</option>
</select>
</div></div>
</div>
<div class="row">
<div class="col-md-2">Boat Number</div>
<div class="col-md-10"><div class="input-group mb-3">

<select class="custom-select" id="inputGroupSelect01">
<option selected>Boat Number</option>
<option value="1">Boat Number One</option>
<option value="2">Boat Number Two</option>
<option value="3">Boat Number Three</option>
</select>
</div></div>
</div>
<div class="row">
<div class="col-md-2"></div>
<div class="col-md-10"><button type="button" class="btn btn-success av">Submit</button></div>
</div>
</form>




</div>
      <Footer/>
    </div>
  )
}

export default UploadD
