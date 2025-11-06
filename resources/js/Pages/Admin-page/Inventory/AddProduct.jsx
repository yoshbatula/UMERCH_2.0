import React from 'react';
import Layout from "@/Layouts/AdminNav";
export default function AddProduct() {
    return (
        <div className='py-9 px-19 flex flex-col'>
            <div className='text-[30px] mb-4'>
                <h1 className='font-bold'>Inventory</h1>
                <div className='mt-1'>
                    <h1 className='text-[20px] mb-4'>Welcome to Inventory</h1>
                </div>
            </div>

            {/*  */}
            <div>

            </div>
        </div>
       
    );
}

AddProduct.layout = page => <Layout children={page} />;