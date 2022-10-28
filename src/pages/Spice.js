import { Link } from "react-router-dom"
const BASE_URL = '/api/spices'

export default function Spice (props) {
    const spice = props.spiceList.filter( d => d.id === props.match.params.symbol)[0]
    
    return (
      <div>
        <h1>{spice.name}</h1>
        <p>Size: {spice.size}</p>
        <p>Amount Remaining: {spice.amt}%</p>
        <p>Expiration Date: {spice.expDate}</p>
        <br />
        <Link to={`${BASE_URL}/${spice._id}/edit`}><button>Edit Spice</button></Link>
        <Link to={`${BASE_URL}/`}><button>Return</button></Link>
      </div>
    )
  }