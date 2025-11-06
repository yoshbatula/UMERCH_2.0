import Layout from '@/Layouts/navbar';
import React from 'react';
import BackgroundModel from '../../../images/BackgroundModel.png';
import ShopCards from '../../Components/Cards/FeaturedCards';
import Footer from '../../Layouts/Footer';
import LeftArrow from '../../../images/LeftArrow.svg';
import RightArrow from '../../../images/RightArrow.svg';
export default function Shop() {

    return (
        // Backgrounds Model
        <div className='bg-[#F6F6F6] flex flex-col justify-center'>
            <div className='w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden'>
                <img 
                src={BackgroundModel}
                alt="Background Model"
                className='w-full h-full object-cover'
                />
            </div>

            {/* Filters */}
            <div className='py-6 flex flex-row text-center justify-between text-[#727272] gap-5 px-41'>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-row gap-1 items-center'>
                        <p>View</p>
                        <select className='border border-[#727272] rounded px-2 py-1'>
                            <option value="grid">25</option>
                        </select>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <p>Sort by</p>
                        <select className='border border-[#727272] rounded px-2 py-1'>
                            <option value="default">Default</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-row gap-1 items-center'>
                    <p>Showing 1-20 of 120 results </p>
                </div>
            </div>

            {/* Shop cards */}
            <div className='flex flex-row flex-wrap justify-center gap-6 px-10 pb-10'>
                <ShopCards />
                <ShopCards />
                <ShopCards />
                <ShopCards />
                <ShopCards />
                <ShopCards />
            </div>

            {/* Pagination */}
            <div className='flex flex-row justify-center items-center gap-4 pb-10'>
                <button className='px-3 py-1 hover:bg-gray-200'><img src={LeftArrow} alt="Left Arrow"/></button>
                <button className='px-3 py-1 border border-gray-400 rounded bg-[#9C0306] text-white'>1</button>
                <button className='px-3 py-1 border border-[#9C0306] text-[#9C0306]'>2</button>
                <button className='px-3 py-1 border border-[#9C0306] text-[#9C0306]'>3</button>
                <button className='px-3 py-1 hover:bg-gray-200'><img src={RightArrow} alt="Left Arrow"/></button>
            </div>

            {/* Footer */}
            <Footer />
        </div>


    );
}

Shop.layout = page => <Layout children={page} />;