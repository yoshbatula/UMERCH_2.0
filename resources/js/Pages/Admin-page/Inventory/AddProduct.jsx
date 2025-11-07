import React from 'react';
import Layout from "@/Layouts/AdminNav";
import Box from '../../../..//images/BOX.svg'
import Danger from '../../../../images/Danger.svg'
export default function AddProduct() {
    return (
        <div className='py-9 px-19 flex flex-col'>
            <div className='text-[32px] mb-4'>
                <h1 className='font-bold'>Inventory</h1>
                <div className='mt-1'>
                    <h1 className='text-[20px] mb-4'>Welcome to Inventory</h1>
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-row gap-6">
                <div className="bg-[#FFB600] flex items-center justify-between rounded-2xl w-80 h-32 p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col">
                        <h2 className="text-white text-[15px] font-semibold">Total Products</h2>
                        <p className="text-red-100 text-[20px] font-semibold mt-4">15</p>
                        <span className='text-white text-[10px] font-light'>Active Inventory Items</span>
                    </div>
                    <div>
                    <img src={Box} alt="Box Icon" />
                    </div>
                </div>
                <div className="bg-[#9C0306] flex items-center justify-between rounded-2xl w-80 h-32 p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col">
                        <h2 className="text-white text-[15px] font-semibold">Low Stock Alert</h2>
                        <p className="text-red-100 text-[20px] font-semibold mt-4">15</p>
                        <span className='text-white text-[10px] font-light'>Items need restocking</span>
                    </div>
                    <div>
                        <img 
                        src={Danger} 
                        alt="Danger Icon" 
                        />
                    </div>
                </div>
            </div>
            {/* Add Product */}
            <div className='mt-8 relative'>
                <div className='font-semibold text-[30px]'>
                    <h1>Add Product</h1>
                </div>
                <div className='mt-3 flex flex-row justify-between'>
                    <div className='relative'>
                        <svg 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                            fill="none"
                            stroke="#9C0306"
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                            />
                        </svg>
                        <input 
                            type="text"
                            placeholder='Search Products'
                            className="block w-80 pl-10 pr-24 py-2 border border-gray-300 rounded-lg leading-5 bg-[#F9FAFB] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#9C0306] text-sm"
                        />
                    </div>
                    <div className='bg-[#9C0306] text-white text-[16px] flex flex-row font-semibold justify-center items-center w-[166px] h-[44px] rounded-[20px] hover: cursor-pointer'>
                        <button className='hover:cursor-pointer'>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

AddProduct.layout = page => <Layout children={page} />;