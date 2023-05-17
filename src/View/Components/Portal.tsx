import { Popover, Transition } from "@headlessui/react";
import {ReactComponent as PortalGridIcon} from '../Images/PortalGridIcon.svg'
import {ReactComponent as Asset_9} from '../Images/Asset 9.svg'
import {ReactComponent as Asset_10} from '../Images/Asset 10.svg'
import {ReactComponent as Asset_11} from '../Images/Asset 11.svg'
import {ReactComponent as Asset_12} from '../Images/Asset 12.svg'
import {ReactComponent as Asset_13} from '../Images/Asset 13.svg'


export default function Portal() {

  const rotatePortalIcon = () => {
    const portalIcon = document.getElementById('portal-icon')
    if(!portalIcon) return
    portalIcon.classList.toggle('rotate-180')
  }

  return (
    <Popover className='relative'>
      <Popover.Button className='h-max p-3 rounded-full outline-0 hover:bg-white hover:bg-opacity-20 active:bg-opacity-25 duration-300'>
        <PortalGridIcon id="portal-icon" className='h-7 w-auto duration-700'></PortalGridIcon>
      </Popover.Button>

      <Transition
      enter="transition ease-in-out duration-300"
      enterFrom="-translate-x-52"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-52"
      beforeEnter={rotatePortalIcon}
      beforeLeave={rotatePortalIcon}
      >
        <Popover.Panel>
          <div className='absolute bg-MCS-DarkerBlue rounded-br-xl h-96 w-52 shadow-md'>
             <Asset_9 className='h-8 w-auto mb-4 mt-2 mx-2'></Asset_9>
            <Asset_10 className='h-8 w-auto mb-4 mt-2 mx-2'></Asset_10>
            <Asset_11 className='h-8 w-auto mb-4 mt-2 mx-2'></Asset_11>
            <Asset_12 className='h-8 w-auto mb-4 mt-2 mx-2'></Asset_12>
            <Asset_13 className='h-8 w-auto mb-4 mt-2 mx-2'></Asset_13>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}