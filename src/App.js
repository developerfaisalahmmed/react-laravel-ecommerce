// import { Routes, Route } from "react-router-dom"

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


import Home from "./components/frontend/Home"
import About from "./components/frontend/About"
import Contact from "./components/frontend/Contact"
import MasterLayout from './layouts/backend/MasterLayout.js'


// import Dashboard from "./components/backend/Dashboard"
// import Profile from "./components/backend/Profile"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route  path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />}/>  

        {/* <Route path="/admin" element={<MasterLayout />} />   */}
        
        {/* <Route  path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />}/>   */}
        
        {/* <Route path="/admin/dashboard" element={ <Dashboard/> } />
        <Route path="/admin/profile" element={ <Profile/> } /> */}



        {/* // frontend er pages  */}
        {/* <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } /> */}
      </Routes>

    </div>
  )
}

export default App