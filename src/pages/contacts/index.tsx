/* eslint-disable @next/next/no-img-element */
import React ,{useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserAlt, faPlus
  } from "@fortawesome/free-solid-svg-icons";
import 'react-tabs/style/react-tabs.css';

import Header from '~/components/Header';
import Table from '~/components/table';

const Index = ({}) => {

    return (
        <>
            <Header title="Contacts"/>
            <div className='flex flex-col max-w-[1230px] px-6 mx-auto'>
                <div className="flex p-6 mb-4 justify-between bg-white border border-solid border-gray-100 rounded-lg mt-8">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="relative h-12 w-12 rounded-lg flex items-center justify-center bg-gray-200">
                                <FontAwesomeIcon
                                    icon={faUserAlt}
                                    style={{ fontSize: 18, color: "black" }}
                                />
                                <span className="w-2 h-2 rounded-full bg-blue-100 absolute right-2 top-2"></span>
                            </div>
                            <div className="flex items-start flex-col justify-start mr-10 ml-4">
                                <span className="text-xl font-bold leading-[25.1px] mb-[2px]">Customers</span>
                                <span className="text-gray-300">2 Contacts</span>
                            </div>
                        </div>
                        <div className="flex items-center ml-4">
                            <div className="relative h-12 w-12 rounded-lg flex items-center justify-center bg-gray-200">
                                <FontAwesomeIcon
                                    icon={faUserAlt}
                                    style={{ fontSize: 18, color: "black" }}
                                />
                                <span className="w-2 h-2 rounded-full bg-primary-200 absolute right-2 top-2"></span>
                            </div>
                            <div className="flex items-start flex-col justify-start mr-10 ml-4">
                                <span className="text-xl font-bold leading-[25.1px] mb-[2px]">Suppliers</span>
                                <span className="text-gray-300">2 contacts</span>
                            </div>
                        </div>
                        <div className="flex items-center ml-4">
                            <div className="relative h-12 w-12 rounded-lg flex items-center justify-center bg-gray-200">
                                <FontAwesomeIcon
                                    icon={faUserAlt}
                                    style={{ fontSize: 18, color: "black" }}
                                />
                                <span className="w-2 h-2 rounded-full bg-purple-100 absolute right-2 top-2"></span>
                            </div>
                            <div className="flex items-start flex-col justify-start mr-10 ml-4">
                                <span className="text-xl font-bold leading-[25.1px] mb-[2px]">Employees</span>
                                <span className="text-gray-300">2 contacts</span>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary rounded-full flex items-center h-14 px-8 rounded-7">
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ fontSize: 20, color: "black", marginRight: 8 }}
                        />
                        <span className="font-bold text-sm leading-[14px] uppercase">Create Contact</span>
                    </button>
                </div>
                <Table />
            </div>
        </>
    );
};


export default Index;
