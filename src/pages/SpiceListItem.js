import { Link } from "react-router-dom"

export default function SpiceListItem (props) {
  return (
    <>
      <h4><Link to={`/spices/${props?.spice?._id}`}>{props?.spice?.name}</Link></h4>
    </>
  )
}