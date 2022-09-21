import { ReactChildren, FunctionComponent } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock
  } from "@fortawesome/free-solid-svg-icons";

const Notification: FunctionComponent = ({
  children,
}: {
  children: ReactChildren
}) => {
  return (
    <div className="flex items-center justify-between bg-primary-300 py-4 px-10 h-12">
        <div className='flex items-center'>
            <FontAwesomeIcon
                icon={faClock}
                style={{ fontSize: 22, color: "black", marginRight: 8 }}
            />
            <p>
                <span className='font-medium'>You have 9 trial days left. </span>
                <span className='lg:inline hidden'>1 month at 50%. Use the code HOLASEPTIEMBRE for the monthly subscription mode</span>
            </p>
        </div>
        <button className='btn flex items-center uppercase text-sm font-bold rounded-full leading-3 px-4 py-1 border-solid border-black border-2 font-muli h-8'>
            See Plans
        </button>
    </div>
  )
}

export default Notification
