import { Link } from 'react-router-dom'

export default function NavBar (props) {
  return (
    <nav id="navBar">
      <h3>Hello, {props?.user?.name}! - NavBar (signed in)</h3>
      <Link to={"/spices"}><button>View Spices</button></Link>
      <Link to={"/spices/new"}><button>Add Spice</button></Link>
      <Link to={"/spices/edit"}><button>Update Spices</button></Link>
      <Link to={"/users/settings"} ><button>Settings</button></Link>
      <button onClick={() => {
        localStorage.removeItem('token');
        props.setUser(null);
      }}>Log Out</button>
    </nav>
  )
}