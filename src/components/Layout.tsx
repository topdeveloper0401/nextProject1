import { Fragment, FunctionComponent } from 'react'
import classNames from 'classnames'
import Header from './Header'
import Footer from './Footer'
import Notification from './Notification'
import Sidebar from './sidebar'
import { MessageList, useMessage } from '~/lib/message'

type LayoutProps = {
  usePadding?: boolean
  useBackdrop?: boolean
}

const FullLayout: FunctionComponent<LayoutProps> = ({
  children,
  usePadding,
  useBackdrop,
}) => {
  const { messages } = useMessage()
  return (
    <Fragment>
      <Notification />
      <div className='relative flex'>
        <Sidebar />
        <div className='h-full bg-gray-400 overflow-auto flex-1'>
          <main className='h-100'>
            <MessageList messages={messages} />
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

FullLayout.defaultProps = {
  usePadding: true,
  useBackdrop: false,
}

export default FullLayout
