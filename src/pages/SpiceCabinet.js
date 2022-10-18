import NavBar from "../components/NavBar"
import SpiceList from "./SpiceList"

export default function SpiceCabinet (props) {
  return (
    <>
    <NavBar />
    <h1>Spice Cabinet</h1>
    <p>Keep track of all of your herbs, spices, and condiments.</p>
    <SpiceList />
    </>
  )
}