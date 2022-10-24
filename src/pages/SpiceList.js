import SearchBar from "../components/SearchBar";
// import SpiceListItem from '../pages/Spice'
// import Spice from '../pages/Spice'
import spiceList from '../data'
import SpiceListItem from "./SpiceListItem";

const list = spiceList.map((spice, index) => {
  return (
    <SpiceListItem key={index} spice={spice} />
  )
})

export default function SpiceList (props) {
  return (
    <>
    <div id="spiceList">
    <h2>Spice List</h2>
    <SearchBar />
    <ul>
      <li>{list}</li>
    </ul>
    </div>
    </>
  )
}