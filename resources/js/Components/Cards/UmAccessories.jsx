import React from 'react';
import Mugs from '../../../Images/mug.png';
import Tumbler from '../../../Images/tumblerwood.jpg';
export default function UmAccessories() {
    return (
        <div className="flex justify-center items-center">
            <img 
                src={Tumbler} 
                alt="UM Tumbler" 
                className="w-20 h-20 object-cover rounded-lg"
            />
        </div>
    );
}