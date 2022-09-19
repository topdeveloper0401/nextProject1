import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlusCircle, faParagraph, faAngleDown, faAngleUp, faGem, faChartSimple, faSquare, faArrowTrendUp, faArrowTrendDown, faCircleInfo, faCalendarCheck, faAddressBook, faBuildingColumns, faUser,faSuitcase, faCircleQuestion, faS
  } from "@fortawesome/free-solid-svg-icons";

import ALink from '~/components/features/ALink';
import SlideToggle from "react-slide-toggle";
import { FaAddressBook } from 'react-icons/fa';

const classes = {
    item: ' px-[9.5px] mb-1 ',
    itemLink: ' relative px-3 w-full h-10 flex items-center text-left text-gray-300 ',
    itemLinkEffect: ' hover:text-dark hover:tracking-wide hover:bg-gray-200 hover:rounded-lg '
}

const Sidebar: FunctionComponent = () => 
{
  return (
    <div className='sidebar relative w-[11.25rem] bg-white border-r-[0.0625rem] text-center border-solid border-gray-100 h-full transition-all duration-500 ease'>
        <div className='sidebar-content relative w-full overflow-y-scroll'>
            <div className='overflow-hidden relative pt-7 flex flex-col justify-center items-center'>
                <img
                    src="/images/logo.svg"
                    className="w-[80px] mb-6"
                    width={80}
                    height={16}
                    alt="icon-svg"
                />
                <FontAwesomeIcon
                    icon={faPlusCircle}
                    style={{ fontSize: 48, color: "black", marginBottom: 40 }}
                />
                <ul className='w-full'>
                    <li className={classes.item}>
                        <ALink
                            href="/balance"
                            className={classes.itemLink + classes.itemLinkEffect}
                        >
                            <FontAwesomeIcon
                                icon={faChartSimple}
                                style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                            />
                            <span className='relative'>Balance</span>
                        </ALink>
                    </li>
                    <SlideToggle collapsed>
                        {({ toggle, range, setCollapsibleElement }) => (
                        <li className={classNames(classes.item, range == true? 'bg-gray-400':'')}>
                            <div className={classNames("my-collapsible")}>
                                <button className={"my-collapsible__toggle hover:tracking-wide hover:text-dark" + classes.itemLink} onClick={toggle}>
                                    <FontAwesomeIcon
                                        icon={faSquare}
                                        style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                                    />
                                    Scanner
                                    <FontAwesomeIcon
                                        icon={range == true ? faAngleUp : faAngleDown}
                                        style={{ fontSize: 15, color: "#252525", marginLeft: 25 }}
                                    />
                                </button>
                                <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                    <ALink
                                        href="/scanner/sales"
                                        className={classes.itemLink + classes.itemLinkEffect}
                                    >
                                        <span className='relative ml-10'>Sales</span>
                                    </ALink>
                                    <ALink
                                        href="/scanner/expenses"
                                        className={classes.itemLink + classes.itemLinkEffect}
                                    >
                                        <span className='relative ml-10'>Expenses</span>
                                    </ALink>
                                </div>
                            </div>
                        </li>
                        )}
                    </SlideToggle>
                    <li className={classes.item}>
                        <ALink
                            href="/sales"
                            className={classes.itemLink + classes.itemLinkEffect}
                        >
                            <FontAwesomeIcon
                                icon={faArrowTrendUp}
                                style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                            />
                            <span className='relative'>Sales</span>
                        </ALink>
                    </li>
                    <li className={classes.item}>
                        <ALink
                            href="/expenses"
                            className={classes.itemLink + classes.itemLinkEffect + 'text-dark tracking-wide bg-gray-200 rounded-lg'}
                        >
                            <FontAwesomeIcon
                                icon={faArrowTrendDown}
                                style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                            />
                            <span className='relative'>Expenses</span>
                        </ALink>
                    </li>
                    <li className={classes.item}>
                        <ALink
                            href="/otherdocs"
                            className={classes.itemLink + classes.itemLinkEffect}
                        >
                            <FontAwesomeIcon
                                icon={faCircleInfo}
                                style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                            />
                            <span className='relative'>Other docs</span>
                        </ALink>
                    </li>
                    <li className={classes.item}>
                        <ALink
                            href="/products"
                            className={classes.itemLink + classes.itemLinkEffect}
                        >
                            <FontAwesomeIcon
                                icon={faParagraph}
                                style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                            />
                            <span className='relative'>Proudcts</span>
                        </ALink>
                    </li>
                    <li className={classes.item}>
                        <ALink
                            href="/contacts"
                            className={classes.itemLink + classes.itemLinkEffect}
                        >
                            <FontAwesomeIcon
                                icon={faAddressBook}
                                style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                            />
                            <span className='relative'>Contacts</span>
                        </ALink>
                    </li>
                    <li className={classes.item}>
                        <ALink
                            href="/banks"
                            className={classes.itemLink + classes.itemLinkEffect}
                        >
                            <FontAwesomeIcon
                                icon={faBuildingColumns}
                                style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                            />
                            <span className='relative'>Banks</span>
                        </ALink>
                    </li>
                    <li className={classes.item}>
                        <ALink
                            href="/accountancy"
                            className={classes.itemLink + classes.itemLinkEffect}
                        >
                            <FontAwesomeIcon
                                icon={faSuitcase}
                                style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                            />
                            <span className='relative'>Accountancy</span>
                        </ALink>
                    </li>
                        <SlideToggle collapsed>
                        {({ toggle, range, setCollapsibleElement }) => (
                        <li className={classNames(classes.item, range == true? 'bg-gray-400':'')}>
                            <div className={classNames("my-collapsible")}>
                                <button className={"my-collapsible__toggle hover:tracking-wide hover:text-dark" + classes.itemLink} onClick={toggle}>
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                                    />
                                    Account
                                    <FontAwesomeIcon
                                        icon={range == true ? faAngleUp : faAngleDown}
                                        style={{ fontSize: 15, color: "#252525", marginLeft: 25 }}
                                    />
                                </button>
                                <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                    <ALink
                                        href="/account/business"
                                        className={classes.itemLink + classes.itemLinkEffect}
                                    >
                                        <span className='relative ml-10'>Business</span>
                                    </ALink>
                                    <ALink
                                        href="/account/subscription"
                                        className={classes.itemLink + classes.itemLinkEffect}
                                    >
                                        <span className='relative ml-10'>Subscription</span>
                                    </ALink>
                                    <ALink
                                        href="/account/community/"
                                        className={classes.itemLink + classes.itemLinkEffect}
                                    >
                                        <span className='relative ml-10'>Community</span>
                                    </ALink>
                                </div>
                            </div>
                        </li>
                        )}
                        </SlideToggle>
                    <li className={classes.item}>
                        <ALink
                            href="/resultado"
                            className={classes.itemLink + classes.itemLinkEffect}
                        >
                            <FontAwesomeIcon
                                icon={faCircleQuestion}
                                style={{ fontSize: 22, color: "#252525", marginRight: 18 }}
                            />
                            <span className='relative'>Help</span>
                        </ALink>
                    </li>
                </ul>
            </div>
        </div>
        <div className='left-0 w-full bottom-0 h-12 flex absolute items-center justify-center uppercase bg-primary-100'>
            <ALink
                href="/resultado"
                className='flex items-end first-letter justify-center'
            >
                <FontAwesomeIcon
                    icon={faGem}
                    style={{ fontSize: 20, color: '#252525', marginRight: 4 }}
                />
                <span className='text-dark text-xs font-bold'>Join premium</span>
            </ALink>
        </div>
    </div>
  )
}

export default Sidebar
