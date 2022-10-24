import { Link } from "react-router-dom"

const Spice = props => {
    const spice = props.spiceList.filter( d => d.id === props.match.params.symbol)[0]
    return (
      <div>
        Spice Details Here
        <h1>{spice.name}</h1>
        <Link to={"/spices"}><button>Return</button></Link>
      </div>
    )
  }
  
  
  export default Spice