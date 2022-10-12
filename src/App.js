import './App.css';
import NavBar from './components/NavBar';
import SignUpForm from './components/SignUpForm';
// import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Spice Tracker</h1>
      <SignUpForm />
      {/* <Routes>
        <Route path="/" element={<ElementName />} />
        <Route path="/" element={<Element2Name />} />
      </Routes> */}
    </div>
  );
}

export default App;