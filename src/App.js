import { ToastContainer } from 'react-toastify';
import './App.css';
import AddContact from './Components/AddContact';
import Navigationbar from './Components/Navigationbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllContact from './Components/AllContact';

function App() {
  return (
    <div>
      <Router>
        <Navigationbar/>
        <ToastContainer position='top-center'/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-contact" element={<AddContact/>}/>
          <Route path="/view-contact" element={<AllContact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
