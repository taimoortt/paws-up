import "./css/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import SignInAdmin from "./components/SignInAdmin"
import PawtnerHomepage from "./components/PawtnerHomepage"
import StaffHomepage from "./components/StaffHomepage"
import AdminHomepage from "./components/AdminHomepage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signinadmin" element={<SignInAdmin />} />
        <Route path="/pawtnerhomepage/:username" element={<PawtnerHomepage />} />
        <Route path="/staffhomepage/:username" element={<StaffHomepage />} />
        <Route path="/adminhomepage/:username" element={<AdminHomepage />} />
      </Routes>
    </Router>
  )
}

export default App
