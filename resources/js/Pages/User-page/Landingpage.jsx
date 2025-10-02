
import Layout from '@/Layouts/Loginnav';
import umbg from '@images/um5.jpg';
export default function Landingpage({ auth }) {
    return (
       <>
            <div className='relative w-full h-screen overflow-hidden'>
                {/* BACKGROUND IMAGE */}
                <div className='relative'>
                    <img src={umbg} alt="UM-LOGO" className='w-full h-full object-cover'/>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                </div>
                
                {/* BACKGROUND CONTENT */}
                <div className='absolute inset-0 flex items-center justify-center z-10'>
                    <h1 className='text-white text-5xl font-bold text-center'>Welcome to UMerch</h1>
                </div>
            </div>
       </>
    );
}

Landingpage.layout = (page) => <Layout children={page} user={page.props.auth?.user} />
