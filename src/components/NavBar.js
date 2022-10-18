import { Link } from 'react-router-dom'

export default function NavBar ({ loggedInUser }) {
  return (
    <nav>
      <h3>Hello, {loggedInUser?.name}! - NavBar (signed in)</h3>
      <Link to={"/spices/new"}><button>Add Spice</button></Link>
      <Link to={"/spices"}><button>View Spices</button></Link>
      <Link to={"/spices/edit"}><button>Update Spices</button></Link>
      <Link to={"/users/settings"}><button>Settings</button></Link>
      <Link to={"/users/logout"}><button>Log Out</button></Link>
    </nav>
  )
}