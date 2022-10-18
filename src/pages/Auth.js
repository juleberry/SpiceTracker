import { useState } from 'react';
import SignUpForm from '../components/SignUpForm'
import LogInForm from '../components/LogInForm'

export default function Auth (props) {

  const [logIn, setLogIn] = useState(true);

  return (
    <>
    <nav>
      <h3>NavBar (signed out)</h3>
      <button onClick={() => setLogIn(!logIn)}>{logIn ? 'Log In' : 'Sign Up'}</button>
    </nav>
    <main>
      <h1>{logIn ? 'Sign Up for Your Virtual Spice Cabinet' : 'Welcome Back!'}</h1>
      {logIn ? <SignUpForm /> : <LogInForm />}
    </main>
    </>
  )
}