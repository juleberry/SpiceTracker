import NavBar from "../components/NavBar"

export default function NewSpice (props) {
  return (
    <>
    <NavBar />
    <h1>Add New Spice</h1>
    <form action="/spices" method="POST">
        <label htmlFor="name">Spice Name:</label>
        <input type="text" name="name" /><br/>

        <label htmlFor="size">Size:</label>
        <select name="size">
        <option value="none">Select a Size</option>
        <option value="Small">Small (0.90 oz)</option>
        <option value="Medium">Medium (3.00 oz - 4.00 oz)</option>
        <option value="Large">Large (8.00 oz)</option>
        <option value="X-Large">X-Large (12.00 oz+)</option>
      </select><br/>

        <label htmlFor="qty">Quantity:</label>
        <select name="qty">
        <option value="none">#</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select><br/>

      <label for="expDate">Expiration Date:</label>
      <input type="month" name="expDate" /><br/>

        <input type="submit" name="" value="Create Spice" />
        <input type="reset" />
      </form>
    </>
  )
}