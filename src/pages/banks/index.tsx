/* eslint-disable @next/next/no-img-element */
import React ,{useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuildingColumns, faPlus, faClose, faCheck
  } from "@fortawesome/free-solid-svg-icons";
import 'react-tabs/style/react-tabs.css';

import ALink from '~/components/features/ALink';
import Header from '~/components/Header';

const Index = ({}) => {

    return (
        <>
            <Header title="Banks"/>
            <div className='flex flex-col max-w-[680px] px-6 mx-auto'>
                <div className="bg-dark px-5 rounded-xl mt-8 flex relative">
                    <div className="max-w-[19rem] py-5">
                        <h3 className="text-white font-semibold mb-2 text-2xl">Take your business to the next level</h3>
                        <p className="text-white mb-4">Nomo account with Spanish IBAN and Mastercard® card with 0%* commissions. No hidden fees. Without permanence</p>
                        <button className="btn btn-primary uppercase h-14 px-8 rounded-full">Watch</button>
                    </div>
                    <img src="/images/bank.png" className="pt-6" alt="PNG" width={240}></img>
                    <FontAwesomeIcon
                        icon={faClose}
                        style={{ fontSize: 20, color: "white", marginRight: 8, position: 'absolute', top: '1rem', right: '1rem' }}
                    />
                </div>
                <div className="flex items-center justify-between my-8">
                    <h3 className="text-3xl">Link your other accounts</h3>
                    <ALink
                            href="/expenses"
                        >
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ fontSize: 20, color: "black", marginRight: 8 }}
                        />

                    </ALink>
                </div>
                <ALink
                        href="/expenses"
                    >
                    <div className="flex items-center p-8 mb-8 box-shadow bg-white rounded-xl opacity-40">
                            <div className="relative h-12 w-12 rounded-lg flex items-center justify-center bg-gray-200 mr-8">
                                <FontAwesomeIcon
                                    icon={faBuildingColumns}
                                    style={{ fontSize: 20, color: "black" }}
                                />
                            </div>
                            <h3 className="text-2xl">+60 Banks available</h3>
                    </div>
                </ALink>
                <div className="mb-20">
                    <div className="flex items-center my-1 ml-2">
                        <FontAwesomeIcon
                            icon={faCheck}
                            style={{ fontSize: 20, color: "#00b8c9" }}
                        />
                        <span className="ml-2">Instantly manage your business's cash position</span>
                    </div>
                    <div className="flex items-center my-1 ml-2">
                        <FontAwesomeIcon
                            icon={faCheck}
                            style={{ fontSize: 20, color: "#00b8c9" }}
                        />
                        <span className="ml-2">View all your account's transactions and associated receipts</span>
                    </div>
                    <div className="flex items-center my-1 ml-2">
                        <FontAwesomeIcon
                            icon={faCheck}
                            style={{ fontSize: 20, color: "#00b8c9" }}
                        />
                        <span className="ml-2">Get ahead of your next tax payment and avoid surprises</span>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Index;
