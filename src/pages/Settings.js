export default function Settings (props) {
  return (
    <>
    <h1>Settings</h1>
    <p>Please keep your information updated.<br />Update your information below.</p>
    <p>Name: {props?.user?.name} <button>Edit Name</button></p>
    <p>Email: {props?.user?.email} <button>Edit Email</button></p>
    <p>Password: ******* <button>Edit Password</button></p>
    </>
  )
}