import { Link } from 'react-router-dom'

export default function NavBar (props) {
  return (
    <nav>
      <h3>NavBar (signed out)</h3>
      <Link to={"user/login"}><button>Sign In</button></Link>
    </nav>
  )
}