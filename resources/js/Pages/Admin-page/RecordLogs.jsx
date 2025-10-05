import Layout from "@/Layouts/AdminNav";
import AccountLogo from '@images/Account.svg';
export default function RecordLogs() {
    return (
        <>
        {/* Record Logs Content */}
            <div className="flex flex-col justify-start space-y-6">
                <div className="px-9 mt-7">
                    <h1 className="text-black font-bold text-3xl mb-2">RECORDS LOG</h1>
                </div>
                
                {/* Total Users Card */}
                <div className="px-9">
                    <div className="bg-[#9C0306] flex items-center justify-between rounded-2xl w-80 h-32 p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex flex-col">
                            <h2 className="text-white text-[14px] font-medium">Total login user</h2>
                            <p className="text-red-100 text-[16px] font-medium mt-1">15</p>
                        </div>
                        <div>
                            <img src={AccountLogo} alt="" />
                        </div>
                    </div>
                </div>

                {/* Users Logs Section */}
                <div className="px-9 mt-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-black font-bold text-2xl">Users Logs</h2>
                        
                    </div>

                    {/* Search Input with Icons */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-[#9C0306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        
                        <input 
                            type="text" 
                            placeholder="Search logs"
                            className="block w-80 pl-10 pr-12 py-2 border border-white rounded-lg leading-5 bg-[#F9FAFB] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1  text-sm"
                        />
                        
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <button className="p-2 bg-white border border-gray-300 border-opacity-20 rounded hover:bg-gray-50 cursor-pointer">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {/* TABLE LOGS */}
                    <div className="bg-white rounded-lg shadow-sm border mt-3">
                        <div className="p-4 border-b">
                            <p className="text-gray-600 text-sm">Recent user activity logs</p>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-500 text-center py-8">No logs to display yet</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

RecordLogs.layout = page => <Layout>{page}</Layout>

