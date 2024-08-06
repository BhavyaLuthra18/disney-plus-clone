import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Detail from "./components/Detail";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route  path="/" element={<Login/>}></Route>
          <Route path="/home" element ={<Home/>}></Route>
          <Route path="/detail/:id" element ={<Detail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
