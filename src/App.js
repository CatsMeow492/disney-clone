import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Header from './components/Header'
import './App.css';
import Home from './components/Home';
import detail from './components/Detail';

require('dotenv').config()


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/detail/:id' element={<detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
