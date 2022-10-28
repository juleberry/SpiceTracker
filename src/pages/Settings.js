import { Link } from 'react-router-dom'

export default function Settings (props) {
  return (
    <>
    <div className="sectionContainer">
      <div className="sectionDetails">
    <h4>Settings</h4><hr />
    <p>Please keep your information updated.<br />Update your information below.</p>
    <p>Name: {props?.user?.name} <button>Edit Name</button></p>
    <p>Email: {props?.user?.email} <button>Edit Email</button></p>
    <p>Password: ******* <button>Edit Password</button></p><br /><Link to={"/spices"}><button>Return</button></Link>
    </div>
    </div>
    </>
  )
}