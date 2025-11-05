import {Link} from '@inertiajs/react'
import UmerchLogo from '../../images/Umerch-Logo.png'

export default function navbar({children}) {
    return (
        <>
            <header className='navbar sticky top-0 z-50 p-4 bg-[#9C0306] flex flex-row justify-start items-center gap-6 h-20'>
                {/* Logo */}
                <div>
                    <img src={UmerchLogo} alt="Umerch Logo" className='h-14 ml-2'/>
                </div>
                
                {/* Navigation Links */}
                <nav className='text-white mt-2 text-[14px]'>
                    <Link href="/" className="mx-2 text-white">HOME</Link>
                    <Link href="/Shop" className="mx-2 text-white">SHOP</Link>
                    <Link href="/About" className="mx-2 text-white">ABOUT US</Link>
                    <Link href="/contact" className="mx-2 text-white">CONTACT</Link>
                </nav>

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
            <main>
                {children}
            </main>
        </>
    );
}