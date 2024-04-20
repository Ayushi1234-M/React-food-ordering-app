import './App.css';
import { Route, Routes } from "react-router";
import Home from './components/Home';
import Success from './components/Success';
import Error from './components/Error';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    

      <Navbar></Navbar>

<Routes>
<Route path="/home" element={<Home></Home>}></Route>
<Route path="*" element={<Error></Error>}></Route>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/success" element={<Success></Success>}></Route>
</Routes>

     
    </div>
  );
}

export default App;
