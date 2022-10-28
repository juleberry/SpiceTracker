import { Link } from 'react-router-dom'

const Dashboard = (props) => {
      return (
      <>
          <main id="dashboard">
          <div>
            <h1>Dashboard</h1>
            Keep a virtual inventory of your spice cabinet and never run out of essentials again!</div>
          <ul id="userChoices">
          <Link to={"/spices"} ><li className="choices">View Spices</li></Link>
          <Link to={"/spices/new"}><li className="choices">Add Spice</li></Link>
          <Link to={`/users/${props?.user?._id}/settings`} ><li className="choices">Settings</li></Link>
          </ul>
          </main>
      </>
    );
  }

export default Dashboard;