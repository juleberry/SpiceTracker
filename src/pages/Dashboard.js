import NavBar from "../components/NavBar";
import SpiceList from "./SpiceList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(loggedInUser);
    }
  }, []);
    if (!authenticated) {
    // Redirect
      navigate('/');
    } else {
      return (
      <>
        <NavBar />
          <h1>Dashboard</h1>
          <p>Overview of functions</p>
        <SpiceList />
      </>
    );
  }
};

export default Dashboard;