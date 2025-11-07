import React from 'react';
import Layout from "@/Layouts/AdminNav";
import Box from '../../../..//images/BOX.svg'
export default function AddProduct() {
    return (
        <div className='py-9 px-19 flex flex-col'>
            <div className='text-[30px] mb-4'>
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
                <div className='bg-[#9C0306] flex items-center justify-between rounded-2xl w-80 h-32 p-6 shadow-lg hover:shadow-xl transition-shadow'>
                    <div>

                    </div>
                </div>
            </div>
        </div>
       
    );
}

AddProduct.layout = page => <Layout children={page} />;