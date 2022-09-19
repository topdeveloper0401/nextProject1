import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";


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

class Table extends React.Component {
    linkFollow = (cell, row, rowIndex, formatExtraData) => {
        return (
          <button
          >
            Follow
          </button>
        );
      };
  columns = [
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
        formatter: this.linkFollow,
        sort: true
      }
  ];
s
  clearAllFilter() {
    nameFilter("");
    priceFilter("");
    originFilter("");
    stockFilter("");
  }

  products = [
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

  render() {
    return (
      <div className="text-right">
        <ToolkitProvider
          bootstrap4
          keyField="name"
          data={this.products}
          columns={this.columns}
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
                clearAllFilter={this.clearAllFilter}
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
}

export default Table;
