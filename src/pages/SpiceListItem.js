import { Link } from "react-router-dom"

export default function SpiceListItem (props) {
  return (
    <>
    <li>
      <h4><Link to={`/spices/${props.spice._id}`}>{props?.spice.name}</Link></h4>
      <p>Size: {props?.size}</p>
      <p>Quantity: {props?.spice.qty}</p>
      <p>Expiration Date: {props?.spice.expDate}</p>
      <br />
              <Link to={`/spices/${props?.spice._id}/edit`}>Edit Spice</Link>
    </li>
    </>
  )
}