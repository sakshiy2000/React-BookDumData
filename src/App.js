import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookDum from './Components/BookDum';
import Navbar from './Components/Navbar';

import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clothes from './Components/Clothes';
import Home from './Components/Home';

function App() {
  return (
     <>
     <Router>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/bookDum' element={<BookDum/>}/>
        <Route path='/clothes' element={<Clothes/>}/>
       </Routes>
     </Router>
     </>
  );
}

export default App;
