import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListDots
  } from "@fortawesome/free-solid-svg-icons";


const { SearchBar } = Search;

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
  function editExpenses(data:any) {
    console.log(data);
  }
  const linkFollow = (cell, row, rowIndex, formatExtraData) => {
      return (
        <button className="btn py-1 px-2 hover:bg-primary-100 rounded-lg" onClick={()=>editExpenses(row)}>
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
    </div>
  );
}

export default Table;
