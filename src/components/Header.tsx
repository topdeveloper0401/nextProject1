import { ReactChildren, FunctionComponent } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell, faGear, faUser
  } from "@fortawesome/free-solid-svg-icons";

import ALink from '~/components/features/ALink';

const Header: FunctionComponent = ({
  children
}: {
  children: ReactChildren,
  title: String
}) => {
  return (
    <header className="border-b border-solid border-gray-100 pt-5 pl-6 pr-8 top-0 w-full bg-white flex justify-between">
      <span className='font-bold leading-[25.1px] mr-4 text-xl'>Expenses</span>
      <div className='flex items-center pb-6'>
      <ALink
          href="/balance"
      >
        <FontAwesomeIcon
            icon={faBell}
            style={{ fontSize: 24, color: "black", marginRight: 24 }}
        />
      </ALink>
      <ALink
          href="/balance"
      >
        <FontAwesomeIcon
            icon={faGear}
            style={{ fontSize: 24, color: "black", marginRight: 24 }}
        />
      </ALink>
      <ALink
          href="/balance"
      >
        <FontAwesomeIcon
            icon={faUser}
            style={{ fontSize: 24, color: "black" }}
        />
      </ALink>
      </div>
    </header>
  )
}

export default Header
