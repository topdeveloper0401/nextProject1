import { ReactChildren, FunctionComponent, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from 'classnames';
import {
    faBell, faGear, faUser, faLock
  } from "@fortawesome/free-solid-svg-icons";
import { useDetectClickOutside } from 'react-detect-click-outside';

import ALink from '~/components/features/ALink';

const Header: FunctionComponent<{ title: string }> = ({
  children, title
}) => {
  const [logDropdown, setLogDropdown] = useState(false);
  const [settingDropdown, setSettingDropdown] = useState(false);
  const closeLogToggle = () => {
    setLogDropdown(false);
  };
  const closeSettingToggle = () => {
    setSettingDropdown(false);
  };
  const LogDropdown = ({ closeDropdown }) => {
    const ref = useDetectClickOutside({ onTriggered: closeDropdown });
    return (
      <div className={classNames('absolute p-8 min-w-[25rem] bg-dark rounded-lg transition-all duration-300', logDropdown == true ? 'block top-[3.3rem] right-[-.5rem]': 'hidden top-[-2rem]')} ref={ref}>
          <div className='mb-8'>
              <label className="text-white ml-2">Full Name</label>
              <input className="w-full bg-transparent text-white border border-solid border-white rounded-lg mt-1" type="text" defaultValue={'Ángel Rivero Carrillo'}></input>
          </div>
          <div className='mb-8'>
            <label className="text-white ml-2">Phone</label>
            <input className="w-full bg-transparent text-white border border-solid border-white rounded-lg mt-1" type="text" defaultValue={'664282596'}></input>
          </div>
          <div className='mb-8'>
            <label className="text-white ml-2">Phone</label>
            <input className="w-full bg-transparent text-white border border-solid border-white rounded-lg mt-1" type="email" defaultValue={'contact.rivero.13@gmail.com'}></input>
          </div>
          <button className='w-full py-5 mb-2 uppercase rounded-full bg-[#3b3b3b] hover:bg-gray-300 border-none text-white'>Save</button>
          <button className='ml-2 mt-4 text-white'>
            <FontAwesomeIcon
                icon={faLock}
                style={{ fontSize: 24, color: "#ebebeb", marginRight: '1rem' }}
            />
            Change Password
          </button>
          <button className='ml-6 mt-4 text-white'>
            <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: 24, color: "#ebebeb", marginRight: '1rem' }}
            />
            Log out
          </button>
        </div>
    );
  };
  const SettingDropdown = ({ closeDropdown }) => {
    const ref = useDetectClickOutside({ onTriggered: closeDropdown });
    return (
      <div className={classNames('absolute pt-8 min-w-[20rem] bg-white rounded-lg transition-all duration-300 box-shadow', settingDropdown == true ? 'block top-[3.3rem] right-[-.5rem]': 'hidden top-[-2rem]')} ref={ref}>
          <h2 className='text-3xl text-center mb-6'>Settings</h2>
          <div className='px-4 py-4 border-b border-solid border-gray-200 transition-all duration-300 hover:bg-gray-200 cursor-pointer'>
            <FontAwesomeIcon
                icon={faBell}
                style={{ fontSize: 24, color: "black", marginRight: 10 }}
            />
            <span>Taxes</span>
          </div>
          <div className='px-4 py-4 border-b border-solid border-gray-200 transition-all duration-300 hover:bg-gray-200 cursor-pointer'>
            <FontAwesomeIcon
                icon={faBell}
                style={{ fontSize: 24, color: "black", marginRight: 10 }}
            />
            <span>Activies</span>
          </div>
          <div className='px-4 py-4 transition-all duration-300 hover:bg-gray-200 cursor-pointer'>
            <FontAwesomeIcon
                icon={faBell}
                style={{ fontSize: 24, color: "black", marginRight: 10 }}
            />
            <span>Series</span>
          </div>
      </div>
    );
  };
  return (
    <header className="border-b border-solid border-gray-100 pt-5 pl-6 pr-8 top-0 w-full bg-white flex justify-between">
      <span className='font-bold leading-[25.1px] mt-1 mr-4 text-xl'>{title}</span>
      <div className='flex items-center pb-6 relative'>
        <ALink
            href="/balance"
        >
          <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: 24, color: "black", marginRight: 24 }}
          />
        </ALink>
        <button>
          <FontAwesomeIcon
              icon={faGear}
              style={{ fontSize: 24, color: "black", marginRight: 24 }}
              onClick={()=>setSettingDropdown(!settingDropdown)}
          />
        </button>
        <SettingDropdown closeDropdown={closeSettingToggle}></SettingDropdown>
        <button>
          <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: 24, color: "black" }}
              onClick={()=>setLogDropdown(!logDropdown)}
          />
        </button>
        <LogDropdown closeDropdown={closeLogToggle}></LogDropdown>
      </div>
    </header>
  )
}

export default Header