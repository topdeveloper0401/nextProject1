/* eslint-disable @next/next/no-img-element */
import React from "react";
import 'react-tabs/style/react-tabs.css';

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
                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <label className="ml-2">Full Name</label>
                                    <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="Ángel R"></input>
                                </div>
                                <div>
                                    <label className="ml-2">VAT ID</label>
                                    <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="08892036Y"></input>
                                </div>
                                <div>
                                    <label className="ml-2">Country</label>
                                    <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" value={'Spain'}></input>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <label className="ml-2">Postal Code</label>
                                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="07300"></input>
                                    </div>
                                    <div>
                                        <label className="ml-2">Province</label>
                                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="Baleares"></input>
                                    </div>
                                </div>
                                <div>
                                    <label className="ml-2">City</label>
                                    <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="Palma de Mallorca"></input>
                                </div>
                                <div>
                                    <label className="ml-2">Registered Address</label>
                                    <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" value={'Son Cugullada, 2'}></input>
                                </div>
                            </div>  
                            <button className="btn btn-primary rounded-full flex items-center h-14 px-16 rounded-7 mb-8" type="submit">
                                <span className="font-bold text-sm leading-[14px] uppercase">Update</span>
                            </button>
                        </form>
                </div>
            </div>
        </>
    );
};


export default Index;
