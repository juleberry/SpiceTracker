import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const Spice = props => {
    const params = useParams()
    const spice = props.spiceList.filter( d => d.id === props.match.params.symbol)[0]
    
    return (
      <div>
        <h1>{spice.name}</h1>
        <p>Size: {spice.size}</p>
        <p>Amount Remaining: {spice.amt}%</p>
        <p>Expiration Date: {spice.expDate}</p>
        <br />
        <Link to={`/spices/${spice._id}/edit`}><button>Edit Spice</button></Link>
        <Link to={"/spices"}><button>Return</button></Link>
      </div>
    )
  }
  
  
  export default Spice