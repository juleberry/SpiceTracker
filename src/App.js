import './App.css';
import { useState } from 'react'
import Auth from './pages/Auth'
import NewSpice from './pages/NewSpice';
import SpiceCabinet from './pages/SpiceCabinet';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service'
import LogInForm from './components/LogInForm';
import EditSpice from './pages/EditSpice'
import LogOut from './components/LogOut';
import Settings from './pages/Settings';
import Footer from './components/Footer';

function App() {

  const [user, setUser] = useState(getUser())

  return (
    <div className="App">
      {
        user ?
      <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/users/login" element={<LogInForm />} />
        <Route path="/spices" element={<SpiceCabinet />} />
        <Route path="/spices/new" element={<NewSpice />} />
        <Route path="/spices/edit" element={<EditSpice />} />
        <Route path="/users/settings" element={<Settings />} />
        <Route path="/users/logout" element={<LogOut />} />
      </Routes>
      </>
      :
      <Auth setUser={setUser} />
  }
  <Footer />
    </div>
  );
}

export default App;