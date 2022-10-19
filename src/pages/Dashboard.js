// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

const Dashboard = () => {
  // const navigate = useNavigate()
  // const [authenticated, setAuthenticated] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setAuthenticated(loggedInUser);
  //   }
  // }, []);
  //   if (!authenticated) {
  //   // Redirect
  //     navigate('/');
  //   } else {
      return (
      <>
          <h1>Dashboard</h1>
          <ul>
            <li>View Spices</li>
            <li>Add Spice</li>
            <li>Update Spices</li>
            <li>Settings</li>
          </ul>
      </>
    );
  }
// };

export default Dashboard;