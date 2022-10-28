import axios from "axios";
import React from "react";

const BASE_URL = '/api/spices';

export default function EditSpice ({ spice }) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${BASE_URL}/${spice?._id}`).then((response) => {
      setPost(response.data);
    });
  },);

  function updatePost() {
    axios
      .put(`${BASE_URL}/${spice?._id}`, {
        name: '',
    	  size: '',
    	  amt: '',
    	  expDate: ''
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No changes were made"

  return (
    <>
    <h1>Update Spice Details</h1>
    <form onSubmit={updatePost}>
        <label htmlFor="name">Spice Name:</label>
        <input type="text" name="name" defaultValue={post.name} /><br/>

        <label htmlFor="size">Size:</label>
        <select name="size" defaultValue={post.size}>
        <option value="none">Select a Size</option>
        <option value="Small">Small (0.90 oz)</option>
        <option value="Medium">Medium (3.00 oz - 4.00 oz)</option>
        <option value="Large">Large (8.00 oz)</option>
        <option value="X-Large">X-Large (12.00 oz+)</option>
      </select><br/>

      <label htmlFor="expDate">Expiration Date:</label>
      <input type="month" name="expDate" defaultValue={post.expDate} /><br/>

        <label htmlFor="amt">Amount Remaining:</label>
        <select name="amt" defaultValue={post.amt} >
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
      </form>
      </>
  );
}