import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { db, auth } from "../firebase";
import { Input, Button } from "react-bootstrap";
import Sidebar from "./AdminDashboard/Sidebar";
import SignOut from "./SignOut";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    // const { uid, photoURL } = auth.currentUser;

    await db.collection("ChatRoom").add({
      createdOn: firebase.firestore.FieldValue.serverTimestamp(),
      message: msg,
      sendBy: "Admin",
    });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        {/* <SignOut /> */}
        <div className="sendMsg">
          <input
            style={{ marginTop: "200px", marginLeft: "300px" }}
            placeholder="Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button
            style={{ marginTop: "200px", marginLeft: "10px" }}
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
