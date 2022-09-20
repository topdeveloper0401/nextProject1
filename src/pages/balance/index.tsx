/* eslint-disable @next/next/no-img-element */
import React ,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowTrendDown, faArrowTrendUp, faChartLine, faClock, faRefresh
  } from "@fortawesome/free-solid-svg-icons";

import 'chart.js/auto';
import {Bar, Pie, Doughnut} from 'react-chartjs-2';


import Header from '~/components/Header';

const data1 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
const dotData = {
labels: [
    'Red',
    'Green',
    'Yellow'
],
datasets: [{
data: [300, 50, 100],
backgroundColor: [
'#FF6384',
'#36A2EB',
'#FFCE56'
],
hoverBackgroundColor: [
'#FF6384',
'#36A2EB',
'#FFCE56'
]
}]
};

const Index = ({}) => {

    return (
        <>
            <Header title="Balance"/>
            <div className='flex flex-col max-w-[1230px] px-6 mx-auto'>
                <div className="grid grid-cols-3 gap-6 mt-10">
                    <div className="flex items-center py-8 px-8 bg-white border border-solid border-gray-200 rounded-lg box-shadow">
                        <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-gray-200">
                            <FontAwesomeIcon
                                icon={faChartLine}
                                style={{ fontSize: 22, color: "black" }}
                            />
                        </div>
                        <div className="flex items-start flex-col justify-start mr-10 ml-4">
                            <span className="text-3xl font-semibold leading-[25.1px] mb-[2px]">439,05 €</span>
                            <span className="text-gray-300 text-xl">Balance</span>
                        </div>
                    </div>      
                    <div className="flex items-center py-8 px-8 bg-white border border-solid border-gray-200 rounded-lg box-shadow">
                        <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-blue-100">
                            <FontAwesomeIcon
                                icon={faArrowTrendUp}
                                style={{ fontSize: 22, color: "black" }}
                            />
                        </div>
                        <div className="flex items-start flex-col justify-start mr-10 ml-4">
                            <span className="text-3xl font-semibold leading-[25.1px] mb-[2px]">605,05 €</span>
                            <span className="text-gray-300 text-xl">Sales</span>
                        </div>
                    </div>      
                    <div className="flex items-center py-8 px-8 bg-white border border-solid border-gray-200 rounded-lg box-shadow">
                        <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary-100">
                            <FontAwesomeIcon
                                icon={faArrowTrendUp}
                                style={{ fontSize: 22, color: "black" }}
                            />
                        </div>
                        <div className="flex items-start flex-col justify-start mr-10 ml-4">
                            <span className="text-3xl font-semibold leading-[25.1px] mb-[2px]">166,00 €</span>
                            <span className="text-gray-300 text-xl">Expenses</span>
                        </div>
                    </div>      
                </div>
                <div className="p-4 bg-white box-shadow rounded-lg mt-8">
                    <Bar
                        data={data1}
                        width={400}
                        height={200}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div>
                <div className="grid grid-cols-3 gap-6 mb-10">
                    <div className="col-span-2 p-4  bg-white box-shadow rounded-lg mt-8">
                        <h3 className="text-2xl font-semibold mt-4">120,00 €</h3>
                        <h6 className="text-md text-gray-300 mt-4">Total</h6>
                        <div className="border border-solid border-primary-200 h-6 w-full bg-primary-300 rounded-lg mt-4 mb-10"></div>
                        <div className="flex">
                            <div className="flex">
                                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary-500">
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        style={{ fontSize: 18, color: "black" }}
                                    />
                                </div>
                                <div className="flex items-start flex-col justify-start mr-10 ml-4">
                                    <span className="text-xl font-semibold leading-[25.1px] mb-[2px]">120,00 €</span>
                                    <span className="text-gray-300 text-md">On time</span>
                                </div>
                            </div>      
                            <div className="flex">
                                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-pink-100">
                                    <FontAwesomeIcon
                                        icon={faRefresh}
                                        style={{ fontSize: 18, color: "black" }}
                                    />
                                </div>
                                <div className="flex items-start flex-col justify-start mr-10 ml-4">
                                    <span className="text-xl font-semibold leading-[25.1px] mb-[2px]">0,00 €</span>
                                    <span className="text-gray-300 text-md">Overdue</span>
                                </div>
                            </div>      
                        </div>
                    </div>
                    <div className="bg-white box-shadow rounded-lg mt-8 px-8">
                        <Doughnut
                            data={dotData}
                            width={450}
                            height={450}
                        />
                    </div>
                </div>
                <div className="mb-20">
                    <h3 className="font-semibold text-2xl mb-8">Taxes</h3>
                    <div className="bg-white box-shadow px-8 py-2 rounded-lg">
                        <div className="flex pb-4 border-b border-solid border-gray-200 justify-between mt-8">
                            <div>
                                <h3 className="text-2xl mb-1">VAT payable</h3>
                                <h4 className=" text-gray-300">Form 303</h4>
                            </div>
                            <div className="text-right">
                                <h3 className="text-2xl mb-1">0,00 €</h3>
                                <h4 className="text-gray-300">To be paid in the quarterly declaration</h4>
                            </div>
                        </div>
                        <div className="flex pb-4 border-b border-solid border-gray-200 justify-between mt-8">
                            <div>
                                <h3 className="text-2xl mb-1">VAT payable</h3>
                                <h4 className=" text-gray-300">Form 303</h4>
                            </div>
                            <div className="text-right">
                                <h3 className="text-2xl mb-1">0,00 €</h3>
                                <h4 className="text-gray-300">To be paid in the quarterly declaration</h4>
                            </div>
                        </div>
                        <div className="flex pb-4 justify-between mt-8">
                            <div>
                                <h3 className="text-2xl mb-1">Supplier withholdings</h3>
                                <h4 className=" text-gray-300">Form 111</h4>
                            </div>
                            <div className="text-right">
                                <h3 className="text-2xl mb-1">33,00 €</h3>
                                <h4 className="text-gray-300">To be paid in the quarterly declaration</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Index;
