import './App.css';
import Chat from './Component/chat';
import SignIn from './Component/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import Sidebar from './Component/AdminDashboard/Sidebar';

function ChatApp() {
  const [user] = useAuthState(auth)
  return (
    <>
    <Sidebar/>
    <Chat/>
      {/* {user ? <Chat /> : <SignIn />} */}
    </>
  );
}

export default ChatApp;
