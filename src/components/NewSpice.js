import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom'

const BASE_URL = '/api/spices';

export default function NewSpice (props) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${BASE_URL}`).then((response) => {
      setData(response.data);
    });
  }, []);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
	event.preventDefault();
    await axios.post(`${BASE_URL}`, {
        name: data.name,
        size: data.size,
        expDate: data.expDate,
        amt: data.amt
      })
      .then((response) => {
        setData(response.data);
      });
  }

  if (!data) return "No Spice Details!"

  return (
    <>
    <div className="sectionContainer">
      <div className="sectionDetails">
    <h3>Add New Spice</h3><hr />
    <form autoComplete="off" onSubmit={handleSubmit} className="newSpiceForm">
        <label htmlFor="name">Spice Name: </label>
        <input type="text" name="name" value={data.name}
            onChange={handleChange} /><br/>

        <label htmlFor="size">Size: </label>
        <select name="size" value={data.size}
            onChange={handleChange} className="newSpiceForm">
        <option value="none" className="newSpiceForm">Select a Size</option>
        <option value="Small">Small (0.90 oz)</option>
        <option value="Medium">Medium (3.00 oz - 4.00 oz)</option>
        <option value="Large">Large (8.00 oz)</option>
        <option value="X-Large">X-Large (12.00 oz+)</option>
      </select><br/>

      <label htmlFor="expDate">Expiration Date: </label>
      {/* <input type="month" name="expDate" value={data.expDate}
            onChange={handleChange} className="newSpiceForm" /><br/> */}

        <input type="date" name="expDate" placeholder="yyyy-mm" value={data.expDate}
            onChange={handleChange} className="newSpiceForm" /><br/>

        <label htmlFor="amt">Amount Remaining: </label>
        <select name="amt" value={data.amt}
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

      <button type="submit" className="newSpiceForm submitBtns">Submit</button><Link to={"/spices"}><button className="submitBtns newSpiceForm">Return</button></Link>
      </form>
      </div>
      </div>
    </>
  );
}