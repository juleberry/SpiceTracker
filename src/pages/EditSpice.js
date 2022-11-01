import axios from "axios";
import React from "react";
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import * as spicesAPI from '../utilities/spices-api';

export default function EditSpice (props) {
  
  useEffect(() => {
    axios.get(`/spices/${props?.spice?._id}`).then((response) => {
      props.setSpiceList(response.data);
    });
  },);

  function updateSpice() {
    axios
      .put(`/${props?.spice?._id}`, {
        name: '',
    	  size: '',
    	  amt: '',
    	  expDate: ''
      })
      .then((response) => {
        props.setSpiceList(response.data);
      });
  }

  if (!props.spiceList) return "No changes were made"

  function deleteOneSpice() {
    axios
      .delete(`/${props?.spice?._id}`)
      .then((response) => {
        props.setSpiceList(response.data);
      });
  }

  return (
    <>
    <div className="sectionContainer">
      <div className="sectionDetails">
    <h3>Edit Spice Details</h3><hr />
    <form onSubmit={updateSpice} method="DELETE">
        <label htmlFor="name">Spice Name: </label>
        <input type="text" name="name" defaultValue={props?.spice?.name} /><br/>

        <label htmlFor="size">Size:</label>
        <select name="size" defaultValue={props?.spice?.size}>
        <option value="none">Select a Size</option>
        <option value="Small">Small (0.90 oz)</option>
        <option value="Medium">Medium (3.00 oz - 4.00 oz)</option>
        <option value="Large">Large (8.00 oz)</option>
        <option value="X-Large">X-Large (12.00 oz+)</option>
      </select><br/>

      <label htmlFor="expDate">Expiration Date:</label>
      <input type="date" name="expDate" placeholder="yyyy-mm" defaultValue={props?.spice?.expDate} /><br/>

        <label htmlFor="amt">Amount Remaining:</label>
        <select name="amt" defaultValue={props?.spice?.amt} >
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
<button type="submit" className="newSpiceForm submitBtns">Submit</button>

<Link to={`/spices/${props?.spice?._id}/delete`}></Link><button type="submit" className="newSpiceForm deleteBtns" onClick={deleteOneSpice}>Delete</button>

<Link to={"/spices"}><button>Return</button></Link>
      </form>
      </div>
    </div>
      </>
  );
}