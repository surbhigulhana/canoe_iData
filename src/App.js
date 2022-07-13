import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Component/AdminDashboard/AdminLogin";

import Location from "./Component/AdminDashboard/Location";
import BlockDriver from "./Component/AdminDashboard/BlockDriver";
import RegisterDriver from "./Component/AdminDashboard/RegisterDriver";
import UploadD from "./Component/AdminDashboard/uploadD";
import Alld from "./Component/AdminDashboard/Alld";
import AllAlerts from "./Component/AdminDashboard/AllAlerts";
import AddAlerts from "./Component/AdminDashboard/AddAlerts";
import Page from "./Component/AdminDashboard/page";
import Sidebar from "./Component/AdminDashboard/Sidebar";
import Chat from "./Component/chat";
// import Chat from './components/Chat';
import SignIn from "./Component/SignIn";
import SignOut from "./Component/SignOut";
import SendMessage from "./Component/SendMessage";
import ChatApp from "./ChatApp";
import Enquiry from "./Component/AdminDashboard/Enquiry";
import Onduty from "./Component/AdminDashboard/Ond";
import Compduty from "./Component/AdminDashboard/Comd";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<AdminLogin />}></Route>
          <Route exact path="/chat" element={<Chat />}></Route>
          <Route exact path="/SignOut" element={<SignOut />}></Route>
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          <Route exact path="/ChatApp" element={<ChatApp />}></Route>
          <Route exact path="/Sidebar" element={<Sidebar />}></Route>
          <Route exact path="/SendMessage" element={<SendMessage />}></Route>
          <Route exact path="/Location" element={<Location />}></Route>
          {/* <Route exact path="/RegisterDriver" element={<RegisterDriver/>}></Route> */}
          <Route exact path="/BlockDriver" element={<BlockDriver />}></Route>
          <Route exact path="/uploadD" element={<UploadD />}></Route>
          <Route exact path="/Alld" element={<Alld />}></Route>
          <Route exact path="/AllAlerts" element={<AllAlerts />}></Route>
          <Route exact path="/AddAlerts" element={<AddAlerts />}></Route>
          <Route exact path="/page" element={<Page />}></Route>
          <Route exact path="/chat" element={<Chat />}></Route>
          <Route exact path="/RegisterDriver" element={<RegisterDriver />}></Route>
          
          <Route exact path="/Enquiry" element={<Enquiry />}></Route>
          <Route exact path="/Ond" element={<Onduty />}></Route>
          <Route exact path="/Comd" element={<Compduty />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
