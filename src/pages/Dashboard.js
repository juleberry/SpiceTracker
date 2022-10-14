import NavBar from "../components/NavBar";
import SpiceList from "./SpiceList";

export default function Dashboard (props) {
  return (
    <>
    <NavBar />
    <h1>User Dashboard</h1>
    <p>Overview of functions</p>
    <SpiceList />
    </>
  )
}