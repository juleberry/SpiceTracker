import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = 'api/users'


export default function Settings (props) {
  
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')


  useEffect(() => {
    axios.get(`${BASE_URL}/${props?.user?._id}`).then((response) => {
      setNewName(response.newName);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    }

  const handleNewName = async (event) => {
	event.preventDefault();
    axios.put(`/${BASE_URL}/${props?.user?._id}/settings/updateName`, {
        name: newName,
      })
      .then((response) => {
        setNewName(response.newName);
      });
    }

  return (
    <>
    <div className="sectionContainer">
      <div className="sectionDetails" id="updateSettings">
    <h4>Settings</h4><hr />
    <p>{props?.user?.name}, please update your information below.</p>
    
    <p id="nameSetting">Current Name: {props?.user?.name}</p>
    <input type="text" id="newName" placeholder="New Name" onChange={handleNameChange}></input>
    <button onClick={handleNewName}>Edit Name</button>

    <p>Current Email: {props?.user?.email} </p>
    <input  type="email" id="newEmail" placeholder="New Email Address" onChange={(event) => {
      setNewEmail(event.target.value)
      }}></input>
    <button>Edit Email</button>

    <p id="chgPass">Current Password: ****** <br />
    <input type="password" id="newPass" placeholder="New Password" onChange={(event) => {
      setNewPassword(event.target.value)
      }}></input>
      <input type="password" placeholder="Confirm New Password"></input>
      <button>Edit Password</button></p>
    <br />
    <Link to={"/spices"}><button>Return</button></Link>
    </div>
    </div>
    </>
  )
}