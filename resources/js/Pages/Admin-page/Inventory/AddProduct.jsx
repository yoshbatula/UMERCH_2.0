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
            <div className='flex flex-row items-start justify-start gap-6 text-white'>
                <div className='bg-[#FFB600] rounded-2xl w-[230px] h-[110px]'>
                    <div className='flex flex-col'>
                        <h1>Total Products</h1>
                    </div>
                </div>
                <div className='bg-[#9C0306] rounded-2xl w-[230px] h-[110px]'>

                </div>
            </div>
        </div>
       
    );
}

AddProduct.layout = page => <Layout children={page} />;