import umbg from '../../images/um5.jpg';
export default function Login() {
    return (
        <>
            <div className='bg-[] flex flex-col w-100% h-[100vh]'>
                {/* BACKGROUND IMAGE */}
                <div className='relative'>
                    <img src={umbg} alt="UM-LOGO" className='w-full h-full object-cover'/>
                    <div className='absolute inset-0 bg-black opacity-50'></div>
                </div>
                {/*  */}
                <div className='absolute '>
                    <h1 className='text-white absolute'>Welcome to UM</h1>asdas
                </div>
            </div>
        </>
    );
}