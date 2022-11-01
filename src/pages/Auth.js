import SignUpForm from "../components/SignUpForm"
import LogInForm from "../components/LogInForm"

export default function Auth (props) {
  return (
    <main id="authChoices">
      <h1>Welcome to Spice Tracker,<br />Your Virtual Spice Cabinet!</h1>
      <div id="choiceContainer" className="authSection">
      <div id="signUpChoice">
      <h2>Sign Up</h2>
      <SignUpForm setUser={props.setUser} />
      </div>

      <div id="logInChoice">
      <h2>Log In</h2>
      <LogInForm setUser={props.setUser} />
      </div>
      </div>
    </main>
  )
}