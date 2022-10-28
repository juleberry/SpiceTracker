import SpiceList from "./SpiceList"

export default function SpiceCabinet (props) {
  return (
    <>
    <h1>Spice Cabinet</h1>
    <p>Keep track of all of your spices.</p>
    <div id="spiceListContainer">
    <SpiceList setSpiceList={props.setSpiceList} spiceList={props.spiceList}/>
    </div>
    </>
  )
}