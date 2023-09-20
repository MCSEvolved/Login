import SignInAsGuestButton from '../Components/SignInAsGuestButton'
import SignInButton from '../Components/SignInButton'
import TestComponent from '../Components/TestComponent'
import WelcomeText from '../Components/WelcomeText'
import {ReactComponent as MCSEvolvedLogo} from '../Images/mcse-logo-wide.svg'

export default function LoginPage() {
  return (
    <div className='flex flex-col justify-center items-center h-full'>

      <div className='flex flex-col items-center h-4/6 w-4/6 bg-MCS-DarkerBlue rounded-3xl shadow-md'>
        <MCSEvolvedLogo className='h-32 m-8'/>
        <WelcomeText />
        <SignInButton />
        <SignInAsGuestButton />
      </div>
      {/* <TestComponent></TestComponent> */}
    </div>
  )
}