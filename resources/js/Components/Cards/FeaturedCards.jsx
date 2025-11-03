import React from 'react';
import ProductImage from '../../../images/Product1.jpg';

export default function FeaturedCards() {
    return (
        <div className="mt-2 flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm">
            {/* Product Image */}
            <div className="w-full h-64 overflow-hidden">
                <img 
                    src={ProductImage} 
                    alt="Product Image" 
                    className="w-full h-full hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-black font-semibold text-lg">UM CCE ESPORTS JERSEY</h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                
                {/* Prices and Stocks*/}
                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-[#9C0306] font-bold text-xl">₱499.00</span>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">125 stocks</span>
                </div>
            </div>
        </div>
    );
}