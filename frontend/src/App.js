import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timer from './stopWatch';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<Timer/>} />
      </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
