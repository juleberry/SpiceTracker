import SignUpForm from '../components/SignUpForm'
import GenNavBar from '../components/GenNavBar'

export default function Auth (props) {

  return (
    <>
    <GenNavBar />
    <main>
    <h1>Welcome to your virtual Spice Cabinet</h1>
      <SignUpForm setUSer={props.setUser} />
    </main>
    </>
  )
}