import React from 'react';
import Mugs from '../../../Images/mug.png';
import Tumbler from '../../../Images/tumblerwood.jpg';
export default function UmAccessories() {
    return (
        <div className="flex flex-col">
            {/* UM Accessories image */}
            <div>
                <img 
                src={Tumbler} 
                alt="UM Tumbler" 
                className="w-60 h-60 object-cover"
                />
            </div>

            {/* UM text image */}
            <div className='text-[16px] font-semibold'>
                <p>UM Wooden</p>
                <p>Tumbler</p>
            </div>

            <div className='mt-2 text-[15.5px] font-semibold'>
                <span>$120.00</span>
            </div>
        </div>
    );
}