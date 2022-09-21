import React, {useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListDots, faClose, faCheck
  } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';

const { SearchBar } = Search;

const customStyles = {
  content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      padding: '0'
  },
};

let nameFilter;
let priceFilter;
let stockFilter;
let originFilter;

const ClearButton = props => {
  const handleClick = () => {
    props.onSearch("");
    props.clearAllFilter(); 
  };
  return (
    <button className="btn btn-primary leading-none rounded-lg p-2 m-3 h-10" onClick={()=>handleClick}>
      Clear
    </button> 
  );
};

const Table = ({}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    console.log('aaaa');
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const linkFollow = (cell, row, rowIndex, formatExtraData) => {
      return (
          <button className="btn py-1 px-2 hover:bg-primary-100 rounded-lg" onClick={()=>openModal()}>
            <FontAwesomeIcon
                icon={faListDots}
                style={{ fontSize: 14, color: "black" }}
            />
          </button>
      );
    };
  const columns = [
    {
      dataField: "date",
      text: "Date",
      sort: true,
      filter: textFilter({
        getFilter: filter => {
          nameFilter = filter;
        }
      })
    },
    {
      dataField: "docType",
      text: "Doc No",
      filter: textFilter({
        getFilter: filter => {
          priceFilter = filter;
        }
      }),
      sort: true
    },
    {
      dataField: "docNode",
      text: "Doc No",
      filter: textFilter({
        getFilter: filter => {
          stockFilter = filter;
        }
      }),
      sort: true,
    },
    {
      dataField: "contact",
      text: "Contact",
      filter: textFilter({
        getFilter: filter => {
          originFilter = filter;
        }
      }),
      sort: true,
    },
    {
        dataField: "amount",
        text: "Contact",
        filter: textFilter({
          getFilter: filter => {
            originFilter = filter;
          }
        }),
        sort: true,
      },
      {
        dataField: "origin",
        text: "Status",
        filter: textFilter({
          getFilter: filter => {
            originFilter = filter;
          }
        }),
        sort: true,
      },
      {
        dataField: "",
        text: "",
        formatter: linkFollow,
        sort: true
      }
  ];
  function clearAllFilter() {
    nameFilter("");
    priceFilter("");
    originFilter("");
    stockFilter("");
  }

  const products = [
    {
      date: '09-2022',
      docType: 'PAYSLIP',
      docNode: 'PAYSLIP',
      contact: 'sdkfslkfkl',
      amount: 0.00,
      origin: "japan",
      pending: true
    },
    {
        date: '01-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: false
    },
    {
        date: '02-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: false
    },
    {
        date: '03-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: true
      },
      {
        date: '04-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: true
      },
      {
        date: '05-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: true
      },
      {
        date: '05-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: true
      },
      {
        date: '05-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: true
      },
      {
        date: '05-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: true
      },
      {
        date: '05-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: true
      },
      {
        date: '05-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: true
      },
      {
        date: '05-2022',
        docType: 'PAYSLIP',
        docNode: 'PAYSLIP',
        contact: 'sdkfslkfkl',
        amount: 0.00,
        origin: "japan",
        pending: true
      }
  ];

  return (
    <div className="text-right">
      <ToolkitProvider
        bootstrap4
        keyField="name"
        data={products}
        columns={columns}
        search
        insertRow
        exportCSV
      >
        {props => (
          <div>
            <SearchBar
              {...props.searchProps}
              style={{ width: "200px", height: "40px", marginLeft:'auto' }}
            />
            <ClearButton
              {...props.searchProps}
              clearAllFilter={clearAllFilter}
            />
            <button className="btn btn-primary leading-none rounded-lg p-2 m-1 h-10">
              Import
            </button>
            <button className="btn btn-primary leading-none rounded-lg p-2 m-1 h-10">
              Export
            </button>
            <BootstrapTable
              {...props.baseProps}
              filter={filterFactory()}
              noDataIndication="There is no solution"
              striped
              hover
              condensed
              pagination={paginationFactory({ sizePerPage: 4 })}
            />
          </div>
        )}
      </ToolkitProvider>
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
  );
}

export default Table;
