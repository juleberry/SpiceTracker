export default function Spice ({ spice }) {
  return (
    <>
    <li>
      <h4>{spice.name}</h4>
      <p>Size: {spice.size}</p>
      <p>Quantity: {spice.qty}</p>
      <p>Expiration Date: {spice.expDate}</p>
    </li>
    </>
  )
}