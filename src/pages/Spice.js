import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState } from 'react'
// const BASE_URL = 'api/spices'

export default function Spice (props) {
    const params = useParams()   

    const [spice, setSpice] = useState(props.spiceList.filter( d => d._id === params.id)[0])
    
    return (
      <div className="sectionContainer">
      <div className="sectionDetails">
        <h2>Spice Details</h2><hr />
        <h3>{spice?.name}</h3>
        <p>Size: {spice?.size}</p>
        <p>Amount Remaining: {spice?.amt}%</p>
        <p>Expiration Date: {spice?.expDate}</p>
        <br />
        <Link to={`/spices/${spice?._id}/edit`}><button>Edit Spice</button></Link>
        <Link to={"/spices"}><button>Return</button></Link>
      </div>
      </div>
    )
  }