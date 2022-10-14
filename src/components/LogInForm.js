export default function LogInForm (props) {
  return (
    <>
    <h1>Log In Form Goes Here</h1>
    </>
  )
}

// import { useState } from "react";
// import { logIn } from '../utilities/users-service'

// export default function LogInForm (props) {

//   const [errorState, setErrorState] = useState('');

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [disable, setDisable] = useState(formData.password !== formData.confirm)

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {

//       const payload = {
//         email: formData.email,
//         password: formData.password
//       }

//       const user = await logIn(payload);
//       props.setUser(user)

//     } catch {
//       setErrorState('Sign Up Failed - Try Again');
//     }
//   }

//   const handleChange = (event) => {
//     console.log(event.target);
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   }

//   return (
//     <>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <button type="submit" disabled={disable}>SIGN IN</button>
//         </form>
//         <p className="error-message">{errorState}</p>
//       </div>
//     </>
//   )
// }