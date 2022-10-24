const Dashboard = (props) => {
      return (
      <>
          <main id="dashboard">
          <div>
            <h1>Dashboard</h1>
            Digitally keep inventory of your spice cabinet and never run out of essential spices again!</div>
          <ul id="userChoices">
            <li className="choices">View Spices</li>
            <li className="choices">Add Spice</li>
            {/* <li class="choices">Update Spices</li> */}
            <li className="choices">Settings</li>
          </ul>
          </main>
      </>
    );
  }

export default Dashboard;