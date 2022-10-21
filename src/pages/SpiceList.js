import SearchBar from "../components/SearchBar";
import Spice from '../pages/Spice'

export default function SpiceList (props) {
  return (
    <>
    <div id="spiceList">
    <h2>Spice List</h2>
    <SearchBar />
    <ul>
          {
            props.spices?.map((spice, index) => {
              return (
                <Spice key={index} spice={spice} />
              )
            })
          }
        </ul>
    </div>
    </>
  )
}