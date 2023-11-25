import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timer from './stopWatch';
import VoiceRecorder from './Audo';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<Timer/>} />
        <Route path="/audio" element={<VoiceRecorder/>} />

      </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
