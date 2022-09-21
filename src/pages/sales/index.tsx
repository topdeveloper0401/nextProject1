/* eslint-disable @next/next/no-img-element */
import React ,{useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowTrendUp, faClock, faPlus, faClose, faCheck
  } from "@fortawesome/free-solid-svg-icons";
import 'react-tabs/style/react-tabs.css';
import Modal from 'react-modal';

import Header from '~/components/Header';
import Table from '~/components/table';

const customStyles = {
    content: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        padding: '0'
    },
  };

const Index = ({}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {

    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    
    return (
        <>
            <Header title="Sales"/>
            <div className='flex flex-col max-w-[1230px] px-6 mx-auto'>
                <h2 className="py-4 px-6 leading-5 h-12 text-dark border-b-2 font-bold border-dark mt-5 inline-block w-max">Sales</h2>
                <div className="border-b border-gray-100 mb-10"></div>
                <div className="flex flex-wrap px-6 py-2 mb-4 justify-between bg-white border border-solid border-gray-100 rounded-lg">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary-300">
                                <FontAwesomeIcon
                                    icon={faArrowTrendUp}
                                    style={{ fontSize: 22, color: "black" }}
                                />
                            </div>
                            <div className="flex items-start flex-col justify-start mr-10 ml-4">
                                <span className="text-xl font-bold leading-[25.1px] mb-[2px]">1.908,00 €</span>
                                <span className="text-gray-300">Spent</span>
                            </div>
                        </div>
                        <div className="flex items-center ml-4 my-4">
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
                    <button className="btn btn-primary my-4 rounded-full flex items-center h-14 px-8 rounded-7"  onClick={()=>openModal()}>
                        <FontAwesomeIcon
                            icon={faPlus}
                            style={{ fontSize: 20, color: "black", marginRight: 8 }}
                        />
                        <span className="font-bold text-sm leading-[14px] uppercase">Create Sale</span>
                    </button>
                </div>
                <Table />
                <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >
          <div className="h-full w-full">
            <div className="flex items-center px-12 py-10 box-shadow mb-8">
              <button onClick={closeModal}>
                <FontAwesomeIcon
                    icon={faClose}
                    style={{ fontSize: 28, color: "black" }}
                />  
              </button>
              <h2 className="text-5xl mx-auto">Edit Invoice</h2>
              <button className="btn btn-primary leading-none rounded-full py-6 px-9 m-1 text-lg">
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ fontSize: 20, color: "black", marginRight: '0.5rem' }}
                />  
                Save
              </button>
            </div>
            <div className="h-[70%] scroll-content overflow-y-scroll">
              <div className="flex flex-col mx-auto max-w-[1000px] box-shadow mb-20 mt-2">
                <div className="grid grid-cols-2 gap-6 bg-white  p-8">
                  <div>
                    <button className="border border-dashed border-gray-300 px-4 py-8 mb-20">+ Add your logo</button>
                    <h2 className="text-lg font-bold mt-9">Tax data</h2>
                    <h4>Ángel R - 08892036Y</h4>
                    <h4>Son Cugullada, 2  </h4>
                    <h4>07300 Palma de Mallorca (Baleares) Spain</h4>
                    <h4>664282596</h4>
                    <h4>contact.rivero.13@gmail.com</h4>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-right">Invoice</h2>
                    <div className="mb-4">
                        <label className="ml-2">Invoice Number</label>
                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="0005"></input>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label className="ml-2">Postal Code</label>
                            <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="date" placeholder="07300"></input>
                        </div>
                        <div>
                            <label className="ml-2">Province</label>
                            <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="Due Date"></input>
                        </div>
                        <div className="w-full">
                          <h2 className="text-lg font-bold mb-2">Customer Details</h2>
                          <h4 className="whitespace-nowrap">Artisting Network - B06999940</h4>
                          <h4>Diputación 51  </h4>
                          <h4>12345 Monterrubio de la Serena (Castellón)</h4>
                          <h4>Spain</h4>
                          <h4>664282596</h4>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="pb-4 mt-4 bg-gray-100 p-8">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="mb-4 col-span-3">
                        <label className="ml-2">Product or Service</label>
                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="0005"></input>
                    </div>
                    <div>
                        <label className="ml-2">Quantity</label>
                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="1"></input>
                    </div>
                    <div>
                        <label className="ml-2">Unit Type</label>
                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="Grams"></input>
                    </div>
                    <div>
                        <label className="ml-2">Price</label>
                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="505.050505"></input>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="mb-4 col-span-2">
                        <label className="ml-2">Product or Service</label>
                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="0005"></input>
                    </div>
                    <div>
                        <label className="ml-2">Disc</label>
                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="0"></input>
                    </div>
                    <div>
                        <label className="ml-2">Disc rate</label>
                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="Grams"></input>
                    </div>
                  </div>
                  <div className="flex items-center mt-6 mb-4">
                      <span className="inline-block mr-2 ml-auto">Total</span>
                      <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1 max-w-[10rem]" type="text" placeholder="500"></input>
                  </div>
                  <button className="py-3 w-full border border-dashed border-gray-300 mb-2">+ Add line</button>
                </div>
                <div className="bg-white p-8 text-right">
                  <div className="ml-auto max-w-[15rem] border-b border-solid border-dark text-right">
                    <h4 className="text-xl">Taxable income 505,05 €</h4>
                    <h5 className="text-xl mb-4">PIT 1% - 5,05 €</h5>
                  </div>
                  <h3 className="text-3xl font-bold my-8">Total 500,00 €</h3>
                  <div className="grid grid-cols-3 gap-8 mt-4 mb-8 border-t border-dark border-solid text-left pt-5">
                    <div className="mb-4 col-span-2">
                        <label className="ml-2">Notes</label>
                        <textarea className="form-control min-h-[10rem] w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" placeholder="0005"></textarea>
                    </div>
                    <div>
                        <label className="ml-2">Payment Method</label>
                        <input className="form-control w-full bg-white border border-solid border-gray-100 rounded-lg mt-1" type="text" placeholder="Payment Method"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Modal>
            </div>
        </>
    );
};


export default Index;
