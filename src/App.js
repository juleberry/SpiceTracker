import './App.css';
import './style.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { getUser } from './utilities/users-service'
import Auth from './pages/Auth'
import NewSpice from './pages/NewSpice';
import SpiceCabinet from './pages/SpiceCabinet';
import Dashboard from './pages/Dashboard'
import EditSpice from './pages/EditSpice'
import Settings from './pages/Settings';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {

  const [user, setUser] = useState(getUser())

  return (
    <>
    <main className="App">
      {
        user ?
        <>
        <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/spices" element={<SpiceCabinet />} />
        <Route path="/spices/new" element={<NewSpice />} />
        <Route path="/spices/edit" element={<EditSpice />} />
        <Route path="/users/settings" element={<Settings setUser={setUser} />} />
      </Routes>
      </>
      :
      <Auth setUser={setUser} />
  }
  </main>
  <Footer />
    </>
  );
}

export default App;