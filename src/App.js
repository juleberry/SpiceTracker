import './App.css';
import './style.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { getUser } from './utilities/users-service'
import Auth from './pages/Auth'
import Spice from './pages/Spice';
import NewSpice from './components/NewSpice'
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

        {/* main routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/users/:id/settings" element={<Settings setUser={setUser} />} />

        {/* spice routes */}
        <Route path="/spices" element={<SpiceCabinet />} />
        <Route path="/spices/new" element={<NewSpice />} />
        <Route path="/spices/:id/edit" element={<EditSpice />} />
        <Route path="/spices/:id" element={<Spice />} />
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