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
            <Header title="Account"/>
            <div className='flex max-w-[1230px] px-6 mx-auto'>
                <div className="mt-10">
                    <h2 className="text-3xl mb-2">Billing Details</h2>
                    <p className="text-lg">Include the fiscal information of your business that appears on the sales invoices</p>
                        <form>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <label className="ml-2">Full Name</label>
                                    <input className="w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="Ángel R"></input>
                                </div>
                                <div>
                                    <label className="ml-2">VAT ID</label>
                                    <input className="w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="08892036Y"></input>
                                </div>
                            </div>  
                        </form>
                </div>
            </div>
        </>
    );
};


export default Index;
