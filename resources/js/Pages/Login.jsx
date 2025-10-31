import umbg from '../../images/um5.jpg';
import loginlogo from '../../images/Login-Logo.png'
import Layout from '@/Layouts/navbar';
import { useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import UmerchLogo from '../../images/Umerch-Logo.png'
import UmerchDiscountedProduct from '../../images/um2.jpg'
import FeaturedCards from '../Components/Cards/FeaturedCards';
import LimitedOffer from '../../images/LimitedOffer.png'
export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        user_id: '',
        password: '',
        rememberMe: false,
    });

    const SliderImage = [

    ]

    const SliderAdvertiseLogo = [

    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        
        post('/login', {
            onSuccess: () => {
                
            },
            onError: (errors) => {
                console.log('Login errors:', errors);
            }
        });
    }

    return (
        <>
            <div className='bg-[#f6f6f6] flex flex-col w-full h-[110vh]'>
                {/* BACKGROUND IMAGE */}
                <div className='relative'>
                    <img src={umbg} alt="UM-LOGO" className='w-full h-full object-cover'/>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                </div>
                {/* BACKGROUND CONTENT */}
                <div className='absolute flex items-center pl-16'>
                    <div className='flex flex-col mt-45'>
                        <div>
                            <h1 className='text-white text-1xl'>CASUAL & EVERYDAY</h1>
                        </div>
                        <div>
                            <p className='text-white text-5xl mt-4 font-bold Cormonant Garamond'>Effortlessly combine</p>
                            <p className='text-white text-5xl mt-4 font-bold Cormonant Garamond'>comfort with campus style!</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-white'>Discover our Casual & Everyday Collection at UMerch, where relaxed designs meet a refined</p>
                            <p className='text-white'>university look.</p>
                        </div>
                        <div className='mt-5 bg-[#9C0306] text-center justify-center w-45 h-10 border border-black'>
                            <form action="/landing" method="get">
                                <input type="submit" className='text-white item-center mt-2 hover:cursor' value="VIEW COLLECTION" />
                            </form>
                        </div>
                    </div>

                    {/* LOGIN FORM */}
                    <div className='absolute inset-0 bg-black opacity-75 rounded-[15px] mt-25 ml-250 w-110 h-130'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col justify-items-end text-center'>
                            <img src={loginlogo} alt="" className='w-50 ml-31'/>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-white text-3xl font-bold'>LOGIN</h1>
                        </div>
                        {/* Username Input */}
                        <div className='mt-5 ml-18'>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    className='bg-white/30 border rounded-[15px] h-10 w-75 pl-10 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50' 
                                    placeholder='Umindanao/ID'
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />
                                <svg 
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300"
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            {errors.email && (
                                <div className="text-red-400 text-sm mt-1 px-2">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        
                        {/* Password Input */}
                        <div className='mt-5 ml-18'>
                            <div className="relative">
                                <input 
                                    type="password" 
                                    className='bg-white/30 border rounded-[15px] h-10 w-75 pl-10 pr-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50' 
                                    placeholder='Password'
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <svg 
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300"
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            {errors.password && (
                                <div className="text-red-400 text-sm mt-2 px-2">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div className='flex flex-row justify-between mt-3 ml-18'>
                           <div className='text-white flex items-center'>
                                <input 
                                    type="checkbox"
                                    id="rememberMe"
                                    className="w-4 h-4 text-white bg-white/30 border-gray-300 rounded focus:ring-white/50 focus:ring-2"
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-sm text-white">
                                    Remember Me
                                </label>
                           </div>
                           <div className='mr-18'>
                                <a href="#" className='text-white text-sm hover:underline'>Forgot Password?</a>
                           </div>
                        </div>
                        <div>
                            <button type='submit' disabled={processing} className='bg-[#9C0306] text-white rounded-[15px] h-10 w-75 mt-5 ml-18'>
                                    Login
                            </button>
                        </div>
                        </form>
                    </div>
                </div>

                {/* ADVERTISE LOGOS */}
                <div className='py-3 flex flex-row justify-center space-x-10'>
                    <div>
                        <img src={UmerchLogo} alt="" />
                    </div>
                    <div>
                        <img src={UmerchLogo} alt="" />
                    </div>
                    <div>
                        <img src={UmerchLogo} alt="" />
                    </div>
                    <div>
                        <img src={UmerchLogo} alt="" />
                    </div>
                    <div>
                        <img src={UmerchLogo} alt="" />
                    </div>
                    <div>
                        <img src={UmerchLogo} alt="" />
                    </div>
                    <div>
                        <img src={UmerchLogo} alt="" />
                    </div>
                    <div>
                        <img src={UmerchLogo} alt="" />
                    </div>
                    <div>
                        <img src={UmerchLogo} alt="" />
                    </div>
                </div>

                {/* Discounted products */}
                <div className="flex flex-col sm:flex-row justify-center items-center mt-5 gap-6 px-4">
                    {/* Product image */}
                    <div className="w-40 sm:w-72 lg:w-96">
                        <img 
                        src={UmerchDiscountedProduct}
                        alt="" 
                        className='rounded-[15px]'
                        />
                    </div>

                    {/* Product info */}
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-semibold text-gray-900">Discounted</h2>
                        <p className="mt-2 text-gray-600">Special discount — limited time offer!</p>
                        <div className="mt-4">
                            <button className="px-4 py-2 bg-[#9C0306] text-white rounded-lg hover:bg-[#7a0204] transition-colors">Shop Now</button>
                        </div>
                    </div>
                </div>
                
                {/* Featured Products */}
                <div className='bg-[#F6F6F6] mt-8 flex flex-col items-center py-5'>
                    <div className='text-black font-bold text-[36px]'>
                        <h1>Featured Products</h1>
                    </div>
                    <div className="mx-auto w-52 h-1 bg-[#FFB600] mt-2" />
                    
                    <div className='mt-4 flex flex-row flex-wrap justify-center gap-6'>
                        <FeaturedCards />
                        <FeaturedCards />
                        <FeaturedCards />
                        <FeaturedCards />
                        <FeaturedCards />
                        <FeaturedCards />
                    </div>

                    <div className='mt-10 relative'>
                        <div>
                            <img 
                            src={LimitedOffer} 
                            alt="Limited Offer"
                            className='w-[100%]'
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

// navigation layout

Login.layout = page => <Layout children={page} />


