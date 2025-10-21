import umbg from '../../images/um5.jpg';
import loginlogo from '../../images/Login-Logo.png'
import Layout from '@/Layouts/navbar';
import { useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import UmerchLogo from '../../images/Umerch-Logo.png'
import UmerchDiscounted from '../../images/um2.jpg'
export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        user_id: '',
        password: '',
        rememberMe: false,
    });

    // Slider state and logic
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Sample product images (you can replace with your actual product images)
    const productImages = [
        UmerchDiscounted,
        UmerchDiscounted, // Replace with different product images
        UmerchDiscounted, // Replace with different product images
        UmerchDiscounted, // Replace with different product images
    ];

    // Auto-slide functionality
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % productImages.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(slideInterval);
    }, [productImages.length]);

    // Manual slide navigation
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % productImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

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

    // just adding some slider animation
    return (
        <>
            <div className='bg-[#f6f6f6] flex flex-col w-full h-[120vh]'>
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
                    <div className='absolute inset-0 bg-black opacity-75 rounded-[15px] mt-20 ml-240 w-110 h-125'>
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
                                <div className="text-red-400 text-sm mt-1 ml-2">
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
                                <div className="text-red-400 text-sm mt-1 ml-2">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div className='flex flex-row justify-between mt-5 ml-18'>
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
                <div className='py-9 flex flex-row justify-center space-x-10'>
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

                {/* Discounted products - Slider */}
                <div className='flex flex-col items-center mt-2'>    
                    <div className='relative w-full max-w-4xl mx-auto'>
                        {/* Slider Container */}
                        <div className='relative h-96 overflow-hidden rounded-2xl shadow-2xl'>
                            {/* Image Container */}
                            <div 
                                className='flex transition-transform duration-500 ease-in-out h-full'
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {productImages.map((image, index) => (
                                    <div key={index} className='flex-shrink-0 w-full h-full relative'>
                                        <img 
                                            src={image} 
                                            className='w-full h-full object-cover' 
                                            alt={`Product ${index + 1}`} 
                                        />
                                        {/* Overlay with product info */}
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'>
                                            <div className='absolute bottom-6 left-6 text-white'>
                                                <h3 className='text-2xl font-bold mb-2'>Product {index + 1}</h3>
                                                <p className='text-lg'>Special Discount Available</p>
                                                <button className='mt-3 px-6 py-2 bg-[#FFB600] hover:bg-[#7A0204] text-white rounded-lg transition-colors'>
                                                    SHOP NOW
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Navigation Arrows */}
                            <button 
                                onClick={prevSlide}
                                className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm'
                            >
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                                </svg>
                            </button>
                            
                            <button 
                                onClick={nextSlide}
                                className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm'
                            >
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </button>
                            
                            {/* Slide Indicators */}
                            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                                {productImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                            currentSlide === index 
                                                ? 'bg-white scale-110' 
                                                : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// navigation layout

Login.layout = page => <Layout children={page} />


