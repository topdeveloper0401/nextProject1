/* eslint-disable @next/next/no-img-element */
import React ,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartSimple, faArrowTrendUp, faChartLine, faClock, faRefresh, faArrowTrendDown
  } from "@fortawesome/free-solid-svg-icons";

import 'chart.js/auto';
import {Line, Doughnut} from 'react-chartjs-2';


import Header from '~/components/Header';

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.6,
        backgroundColor: '#252525',
        borderColor: '#252525', 
        borderDash: [],
        borderDashOffset: 0.0,
        pointBorderColor: '#252525',
        pointBackgroundColor: ' #fff',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#252525',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
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
            <div className='flex flex-col max-w-[1230px] px-6 mx-auto mt-4'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 mb-4">
                    <div className="flex items-center py-8 px-8 bg-white border border-solid border-gray-200 rounded-lg box-shadow">
                        <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-gray-200">
                            <FontAwesomeIcon
                                icon={faChartSimple}
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
                                icon={faArrowTrendDown}
                                style={{ fontSize: 22, color: "black" }}
                            />
                        </div>
                        <div className="flex items-start flex-col justify-start mr-10 ml-4">
                            <span className="text-3xl font-semibold leading-[25.1px] mb-[2px]">166,00 €</span>
                            <span className="text-gray-300 text-xl">Expenses</span>
                        </div>
                    </div>      
                </div>
                <div className="p-4 bg-white box-shadow rounded-lg mt-4">
                    <Line
                        data={lineData}
                        width={400}
                        height={100}
                    />
                </div>
                <div className="grid lg:grid-cols-3 gap-6 mb-10">
                    <div className="lg:col-span-2 p-4  bg-white box-shadow rounded-lg mt-8">
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
