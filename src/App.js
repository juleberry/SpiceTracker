import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Auth'
// import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <Routes>
        <Route path="/" element={<ElementName />} />
        <Route path="/" element={<Element2Name />} />
      </Routes> */}
    </div>
  );
}

export default App;