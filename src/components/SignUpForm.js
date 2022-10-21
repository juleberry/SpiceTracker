import { useState } from "react";
import { signUp } from '../utilities/users-service'

export default function SignUpForm (props) {

  const [errorState, setErrorState] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  const [disable, setDisable] = useState(formData.password !== formData.confirm)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const payload = {
        email: formData.email,
        password: formData.password,
        name: formData.name
      }

      const user = await signUp(payload);
      props.setUser(user);

    } catch {
      setErrorState('Sign Up Failed - Try Again');
    }
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /><br />
          
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          /><br />

          <label htmlFor="confirm">Confirm: </label>
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          /><br />
          <button type="submit" disabled={disable}>Sign Up</button> <input type="reset" onClick={useState('')}/>
        </form>
        <p className="error-message">{errorState}</p>
      </div>
    </>
  )
}