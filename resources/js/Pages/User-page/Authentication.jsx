export default function Authentication() {
    return (
        <>
            <div className="bg-[#F6F6F6] flex flex-col justify-center items-center w-full h-screen">
                {/* HEADER */}
                <div>
                    <h1 className="text-3xl font-bold text-center">Verification</h1>
                </div>
                {/* SUBHEADER */}
                <div className="mt-10 text-center">
                    <p>A verification code has been sent to</p>
                    <p>f****z@umindanao.edu.ph</p>
                </div>
                {/* INPUT FIELD */}
                <div className="flex flex-row space-x-6">
                    <div className="mt-8">
                        <input 
                            type="text" 
                            className="bg-transparent border-0 border-b-2 border-gray-400 text-center text-lg font-semibold tracking-widest focus:outline-none focus:border-[#9C0306] transition-colors duration-300 w-10 pb-2"
                            maxLength="1"
                        />
                    </div>
                    <div className="mt-8">
                        <input 
                            type="text" 
                            className="bg-transparent border-0 border-b-2 border-gray-400 text-center text-lg font-semibold tracking-widest focus:outline-none focus:border-[#9C0306] transition-colors duration-300 w-10 pb-2"
                            maxLength="1"
                        />
                    </div>
                    <div className="mt-8">
                        <input 
                            type="text" 
                            className="bg-transparent border-0 border-b-2 border-gray-400 text-center text-lg font-semibold tracking-widest focus:outline-none focus:border-[#9C0306] transition-colors duration-300 w-10 pb-2"
                            maxLength="1"
                        />
                    </div>
                    <div className="mt-8">
                        <input 
                            type="text" 
                            className="bg-transparent border-0 border-b-2 border-gray-400 text-center text-lg font-semibold tracking-widest focus:outline-none focus:border-[#9C0306] transition-colors duration-300 w-10 pb-2"
                            maxLength="1"
                        />
                    </div>
                    <div className="mt-8">
                        <input 
                            type="text" 
                            className="bg-transparent border-0 border-b-2 border-gray-400 text-center text-lg font-semibold tracking-widest focus:outline-none focus:border-[#9C0306] transition-colors duration-300 w-10 pb-2"
                            maxLength="1"
                        />
                    </div>
                    <div className="mt-8">
                        <input 
                            type="text" 
                            className="bg-transparent border-0 border-b-2 border-gray-400 text-center text-lg font-semibold tracking-widest focus:outline-none focus:border-[#9C0306] transition-colors duration-300 w-10 pb-2"
                            maxLength="1"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <p className="text-gray-600">Didn't receive the code? <a href="#" className="text-[#9C0306] font-semibold">Resend</a></p>
                </div>
                <div className="mt-5">
                    <button className="bg-[#9C0306] w-35 h-8 text-white rounded-[20px]">VERIFY</button>
                </div>
            </div>
        </>
    );
}