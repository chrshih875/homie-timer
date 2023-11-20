import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyStopwatch from './stopWatch';
import MyTimer from './useTimer';

function App() {
  return (
    <BrowserRouter>
    <div>
      <MyStopwatch />
    </div>
    {/* <div className="container"> */}
      {/* <Routes>
        <Route path="/" element={<MyStopwatch/>} />
        {/* <Route path="/timer" element={<MyTimer/>} /> */}
      {/* </Routes> */} */}
    {/* </div> */}
</BrowserRouter>
  );
}

export default App;
