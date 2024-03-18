import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import bg from "./Assets/bg.mp4"
import bg2 from './Assets/bg2.mp4'
import bgPic from './Assets/bgPic.webp'
function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <section className="box"> */}
        {/* <video className="video" autoPlay loop muted src={bg2} type="video/mp4"/> */}
        <img src={bgPic} alt="" className="bgPic"/>
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to='/login'/>} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to='/'/>} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/'/>} />
          </Routes>
        </div>
      {/* </section> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
