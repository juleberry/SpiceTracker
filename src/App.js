import './App.css';
import './style.css'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import NewSpice from './pages/NewSpice';
import SpiceCabinet from './pages/SpiceCabinet';
import Dashboard from './pages/Dashboard'
import EditSpice from './pages/EditSpice'
import Settings from './pages/Settings';
import Footer from './components/Footer';
import UserLogOut from './components/LogOut';

function App() {

  return (
    <>
    <main className="App">
      {
        localStorage.getItem('token') ?
        <>
      <Routes>
        <Route index element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/spices" element={<SpiceCabinet />} />
        <Route path="/spices/new" element={<NewSpice />} />
        <Route path="/spices/edit" element={<EditSpice />} />
        <Route path="/users/settings" element={<Settings />} />
        <Route path="/users/logout" element={<UserLogOut />} />
      </Routes>
      </>
      :
      <Auth />
  }
  </main>
  <Footer />
    </>
  );
}

export default App;