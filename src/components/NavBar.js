import { Link } from 'react-router-dom'

export default function NavBar (props) {
  return (
    <nav id="navBar">
      <div id="appHeader"><span id="appName">Spice Tracker</span><br />Your Virtual Spice Cabinet</div>
      <div id="navTools">
      Hello, {props?.user?.name}!<br />
      <Link to={"/"}><button>Home</button></Link>
      <Link to={"/spices"}><button>View Spices</button></Link>
      <Link to={"/spices/new"}><button>Add Spice</button></Link>
      {/* <Link to={"/spices/edit"}><button>Update Spices</button></Link> */}
      <Link to={`/users/${props?.user?._id}/settings`} ><button>Settings</button></Link>
      <button onClick={() => {
        localStorage.removeItem('token');
        props.setUser(null);
      }}>Log Out</button>
      </div>
    </nav>
  )
}