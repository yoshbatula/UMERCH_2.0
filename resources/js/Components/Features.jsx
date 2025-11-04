import React from 'react';
import CampusDelivery from '../../images/CampusDelivery.svg'
import GoodQuality from '../../images/GoodQuality.svg'
import BestOffer from '../../images/BestOffer.svg'
import SecurePayment from '../../images/SecurePayment.svg'
export default function Features() {

    return (
        <div className='mt-10 bg-white flex flex-row items-center justify-center gap-40'>
            <div className='flex flex-col items-center text-center'>
                <img 
                    src={CampusDelivery} 
                    alt="Campus Delivery" 
                    className='w-20 h-20 object-contain'
                    />
                    <h1 className='mt-5 text-[20px] font-semibold'>Campus Delivery</h1>
            </div>
            <div className='flex flex-col items-center text-center'>
                <img 
                src={GoodQuality} 
                alt="Good Quality" 
                className='w-20 h-20 object-contain'
                />
                <h1 className='mt-5 text-[20px] font-semibold'>Good Quality</h1>
            </div>
            <div className='flex flex-col items-center text-center'>
                <img 
                src={BestOffer} 
                alt="Best Offer" 
                className='w-20 h-20 object-contain'
                />
                <h1 className='mt-5 text-[20px] font-semibold'>Best Offer</h1>
            </div>
            <div className='flex flex-col items-center text-center'>
                <img 
                src={SecurePayment} 
                alt="Secure Payment" 
                className='w-20 h-20 object-contain'
                />
                <h1 className='mt-5 text-[20px] font-semibold'>Secure Payment</h1>
            </div>
        </div>
    );
}