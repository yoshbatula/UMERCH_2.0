import {Link} from '@inertiajs/react'
import UmerchLogo from '../../images/Umerch-Logo.png'

export default function Layout({children}) {
    return (
        <>
            <header className='p-4 bg-[#9C0306] flex flex-row justify-between items-center'>
                {/* Logo */}
                <div>
                    <img src={UmerchLogo} alt="Umerch Logo" className='h-14' />
                </div>
                
                {/* Navigation Links */}
                <nav className='text-white'>
                    <Link href="/" className="mx-2 text-white hover:underline">Home</Link>
                    <Link href="/about" className="mx-2 text-white hover:underline">About</Link>
                    <Link href="/contact" className="mx-2 text-white hover:underline">Contact</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}