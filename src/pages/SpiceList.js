import SearchBar from "../components/SearchBar";
import Spice from '../pages/Spice'

export default function SpiceList (props) {
  return (
    <>
    <div id="spiceList">
    <h2>Spice List</h2>
    <SearchBar />
    <Spice />
    <Spice />
    <Spice />
    <Spice />
    </div>
    </>
  )
}