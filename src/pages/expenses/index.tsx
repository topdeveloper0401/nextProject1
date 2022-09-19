/* eslint-disable @next/next/no-img-element */
import React ,{useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowTrendDown, faClock, faPlus
  } from "@fortawesome/free-solid-svg-icons";
import 'react-tabs/style/react-tabs.css';

import Header from '~/components/Header';
import Table from '~/components/table';

const Index = ({}) => {

    return (
        <>
            <Header />
            <div className='flex flex-col max-w-[1230px] px-6 mx-auto'>
                <h2 className="py-4 px-6 leading-5 h-12 text-dark border-b-2 font-bold border-dark mt-5 inline-block w-max">Expenses</h2>
                <div className="border-b border-gray-100 mb-10"></div>
                <div className="flex p-6 mb-4 justify-between bg-white border border-solid border-gray-100 rounded-lg">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary-300">
                                <FontAwesomeIcon
                                    icon={faArrowTrendDown}
                                    style={{ fontSize: 22, color: "black" }}
                                />
                            </div>
                            <div className="flex items-start flex-col justify-start mr-10 ml-4">
                                <span className="text-xl font-bold leading-[25.1px] mb-[2px]">1.908,00 €</span>
                                <span className="text-gray-300">Spent</span>
                            </div>
                        </div>
                        <div className="flex items-center ml-4">
                            <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary-400">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{ fontSize: 22, color: "black" }}
                                />
                            </div>
                            <div className="flex items-start flex-col justify-start mr-10 ml-4">
                                <span className="text-xl font-bold leading-[25.1px] mb-[2px]">877,00 €</span>
                                <span className="text-gray-300">Pending</span>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary rounded-full flex items-center h-14 px-8 rounded-7">
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ fontSize: 20, color: "black", marginRight: 8 }}
                        />
                        <span className="font-bold text-sm leading-[14px] uppercase">Create Expense</span>
                    </button>
                </div>
                <Table />
            </div>
        </>
    );
};


export default Index;
