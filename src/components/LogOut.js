import { logOut } from '../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

export default function UserLogOut(props) {
  const navigate = useNavigate()
  function handleLogOut() {
    logOut();
    navigate('/');
  }

  return (
    <div className="UserLogOut">
      <NavBar />
      <h1>Log Out</h1>
      <div>Are you sure you want to log out?</div>
      <button className="btn-sm" onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
