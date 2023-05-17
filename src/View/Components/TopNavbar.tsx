import MCSEvolvedLogo from '../Images/mcse-logo-wide.svg'
import Portal from './Portal'
import UserInfo from './UserInfo'

export default function TopNavbar(){
  return (
    <div className='bg-MCS-DarkerBlue h-14 flex items-center justify-between'>
      <div className='flex items-center w-80 h-full'>
        <Portal></Portal>
        <a href='/' className='h-max ml-1'>
          <img src={MCSEvolvedLogo} className='h-7' alt='MCS'></img>
        </a>
      </div>
      <a href='/insert-path' className='flex items-center h-full'>
        {/* <MCSAnalyserLogo className='h-5/6 w-auto'></MCSAnalyserLogo> */}
        React Template
      </a>
      <div className='flex items-center w-80 justify-end h-full'>
        <UserInfo></UserInfo>
      </div>
    </div>
  )
}