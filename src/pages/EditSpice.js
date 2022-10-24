import { useState } from "react";
import { useEffect } from "react";
import { updateSpice } from '../utilities/spices-service'
import { getSpices } from '../utilities/spices.api'

export default function EditSpice (props) {

  const [edit, setEdit] = useState(props?.spice);

  useEffect(() => {
    getSpices()
    if(edit) {
      setEdit(props.spice)
    }
  }, [edit, props.spice])

  const [errorState, setErrorState] = useState()

  const [formData, setFormData] = useState({
    name: '',
    size: '',
    amt: '',
    expDate: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const payload = {
        name: formData.name,
        size: formData.size,
        expDate: formData.expDate,
        amt: formData.amt
      }

      await updateSpice(payload);

    } catch {
      setErrorState('Update of Spice Details Failed - Try Again');
    }
  }

  return (
    
    <>
    <h1>Update Spice</h1>
    {/* <p>Here will be the details to edit individual spices. User will choose from the list populated here.
    User will be able to delete spices or edit spice details.
    </p> */}
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Spice Name:</label>
        <input type="text" name="name" defaultValue={formData.name}
            onChange={handleChange} /><br/>

        <label htmlFor="size">Size:</label>
        <select name="size" defaultValue={formData.size}
            onChange={handleChange}>
        <option value="none">Select a Size</option>
        <option value="Small">Small (0.90 oz)</option>
        <option value="Medium">Medium (3.00 oz - 4.00 oz)</option>
        <option value="Large">Large (8.00 oz)</option>
        <option value="X-Large">X-Large (12.00 oz+)</option>
      </select><br/>

      <label htmlFor="expDate">Expiration Date:</label>
      <input type="month" name="expDate" defaultValue={formData.expDate}
            onChange={handleChange} /><br/>

        <label htmlFor="amt">Amount Remaining:</label>
        <select name="amt" defaultValue={formData.amt}
            onChange={handleChange}>
        <option value="none">%</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
        <option value="30">30%</option>
        <option value="40">40%</option>
        <option value="50">50%</option>
        <option value="60">60%</option>
        <option value="70">70%</option>
        <option value="80">80%</option>
        <option value="90">90%</option>
        <option value="100">100%</option>
      </select><br/>

      <button type="submit">Add Spice</button>
      </form>
    </>
  )
}