import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle';

import Navbar from './components/Navbar';
import HealthList from './components/Health-List';
import EditHealth from './components/Edit-Health';
import CreateHealth from './components/Create-Health';


function App() {

  return (
    
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HealthList />} />
          <Route path='/update/:id'  element={<EditHealth />} />
          <Route path='/create'  element={<CreateHealth />} />
        </Routes>
    </Router>
    
    
  )
}

export default App
