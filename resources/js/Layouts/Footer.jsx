import {Link} from '@inertiajs/react'
import Location from '../../images/Location.svg'
import Email from '../../images/Email.svg'
import Phone from '../../images/Phone.svg'
import FacebookIcon from '../../images/Facebook.svg'
import TwitterIcon from '../../images/Twitter.svg'
import InstagramIcon from '../../images/Instagram.svg'
import Youtube from '../../images/Youtube.svg'  
export default function Footer({children}) {
    return(
        <>
            <div className="flex flex-row text-center justify-center bg-[#F6F6F6] gap-20">
                <div className="py-15 flex flex-col text-start">
                    <div className="text-[20px] flex flex-col">
                        <h1>Menu</h1>
                        <div className="mt-1 text-[14px] text-[#727272] flex flex-col">
                            <Link>Home</Link>
                            <Link>Shop</Link>
                            <Link>About Us</Link>
                        </div>
                    </div>
                </div>
                <div className="py-15 flex flex-col text-start">
                    <div className="text-[20px] flex flex-col">
                        <h1>Categories</h1>
                        <div className="mt-1 text-[14px] text-[#727272] flex flex-col">
                            <Link>Wardrobe</Link>
                            <Link>Accessories</Link>
                        </div>
                    </div>
                </div>
                <div className="py-15 flex flex-col text-start">
                    <div className="text-[20px] flex flex-col">
                        <h1>Contact Us</h1>
                        <div className="mt-3 text-[14px] text-[#727272] flex gap-3 items-start">
                            <img src={Location} alt="Location icon" className="w-5 h-5 flex-shrink-0 mt-1" />
                            <div className="flex flex-col leading-tight">
                                <span>Bolton St, Poblacion District,</span>
                                <span>Davao City, 8000 Davao del Sur</span>
                            </div>
                        </div>
                        <div className="mt-3 text-[14px] text-[#727272] flex gap-3 items-start">
                            <img src={Email} alt="Email icon" className="w-5 h-5 flex-shrink-0 mt-1" />
                            <div className="flex flex-col leading-tight">
                                <a href="mailto:info@example.com" className="text-[#727272] hover:underline">info@example.com</a>
                                <span>Support available 9am–5pm</span>
                            </div>
                        </div>
                        <div className="mt-3 text-[14px] text-[#727272] flex gap-3 items-start">
                            <img src={Phone} alt="Phone icon" className="w-5 h-5 flex-shrink-0 mt-1" />
                            <div className="flex flex-col leading-tight">
                                <a href="tel:+01234567890" className="text-[#727272] hover:underline">(012) 345-67890</a>
                                <span>Mon–Fri</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-15 flex flex-col text-start">
                    <div className="text-[20px] flex flex-col">
                        <h1>Social Media</h1>
                        <div className="mt-1 text-[14px] text-[#727272] flex flex-row gap-2">
                            <Link><img src={FacebookIcon} alt="Facebook" /></Link>
                            <Link><img src={InstagramIcon} alt="Instagram" /></Link>
                            <Link><img src={Youtube} alt="Youtube" /></Link>
                            <Link><img src={TwitterIcon} alt="Twitter" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                {children}
            </main>
        </>
    );
}