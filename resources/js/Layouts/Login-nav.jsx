import UmerchLogo from '@/assets/Umerch-Logo.png';
import { Link } from '@inertiajs/react';

export default function LoginNav() {
    return (
        <>
            <header className='p-4 bg-[#9C0306] flex flex-row justify-start items-center gap-6 h-20'>
                {/* Logo */}
                <div>
                    <img src={UmerchLogo} alt="Umerch Logo" className='h-14 ml-2'/>
                </div>
                {/* INITIAL COMMIT */}
                {/* Navigation Links */}
                <nav className='text-white mt-2 text-[14px]'>
                    <Link href="/" className="mx-2 text-white">HOME</Link>
                    <Link href="/landing" className="mx-2 text-white">SHOP</Link>
                    <Link href="/About" className="mx-2 text-white">ABOUT US</Link>
                    <Link href="/contact" className="mx-2 text-white">CONTACT</Link>
                </nav>
                {/* bukas nako code hehe     */}
                {/* Search Bar */}
                <div className='mt-1 ml-10 relative'>
                    <input type="text" className='p-2 pl-10 rounded-[15px] bg-white w-64 h-8' placeholder='Search' />
                    <svg 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9C0306]"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>

                {/* Sign-In */}
                <div className='ml-auto'>
                    <Link href="/login" className="mx-2 text-white text-[14px]">SIGN IN</Link>
                </div>

                {/* Account Logo */}
                <div className='mr-8'>   
                    <Link href="/account" className="text-white hover:text-gray-200">
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                            />
                        </svg>
                    </Link>
                </div>
            </header>
            {/* <main>
                {children}
            </main> */}
        </>
    );
}
