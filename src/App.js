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
import SpiceList from './pages/SpiceList'
import Settings from './pages/Settings';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {

  const [user, setUser] = useState(getUser())

  const [spiceList, setSpiceList] = useState(['']);

  return (
    <>
    <main className="App">
      {
        user ?
        <>
        <NavBar setUser={setUser} user={user} />
      <Routes>
        {/* spice routes */}
        <Route path="/spices" element={<SpiceCabinet setSpiceList={setSpiceList} spiceList={spiceList}/>} />
        <Route path="/spices/new" element={<NewSpice />} />
        <Route path="/spices/:id/edit" element={<EditSpice setSpiceList={setSpiceList} spiceList={spiceList} />} />
        <Route path="/spices/:id" element={<Spice spiceList={spiceList} />} />
        <Route path="/spices" element={<SpiceList />} />

        {/* main routes */}
        <Route path="/users/settings" element={<Settings setUser={setUser} user={user} />} />
      <Route path="/" element={<Dashboard />} />
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