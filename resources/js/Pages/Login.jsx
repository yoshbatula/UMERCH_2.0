import umbg from '../../images/um5.jpg';
import loginlogo from '../../images/Login-Logo.png'

export default function Login() {
    return (
        <>
            <div className='bg-[#F6F6F6] flex flex-col w-full h-screen'>
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
                            <p className='text-white text-5xl mt-4 font-bold'>Effortlessly combine</p>
                            <p className='text-white text-5xl mt-4 font-bold'>comfort with campus style!</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-white'>Discover our Casual & Everyday Collection at UMerch, where relaxed designs meet a refined</p>
                            <p className='text-white'>university look.</p>
                        </div>
                        <div className='mt-5 bg-[#9C0306] text-center justify-center w-45 h-10 border border-black'>
                            <button className='text-white item-center mt-2'>VIEW COLLECTION</button>
                        </div>
                    </div>
                    <div className='absolute inset-0 bg-black opacity-75 rounded-[15px]'>
                        <div className='flex flex-col justify-items-end text-center'>
                            <img src={loginlogo} alt="" className='w-50'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

