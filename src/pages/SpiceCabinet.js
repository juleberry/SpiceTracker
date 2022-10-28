import SpiceList from "./SpiceList"

export default function SpiceCabinet (props) {
  return (
    <>
    <h2>Spice Cabinet</h2><hr />
    <div id="spiceListContainer">
    <SpiceList setSpiceList={props.setSpiceList} spiceList={props.spiceList}/>
    </div>
    </>
  )
}