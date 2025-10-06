import Layout from "@/Layouts/AdminNav";
import AccountLogo from '@images/Account.svg';
import AddModal from './modals/AddUsers'
import { useState } from "react";
export default function RecordLogs() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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

                    
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-[#9C0306]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        
                        <input 
                            type="text" 
                            placeholder="Search logs"
                            className="block w-80 pl-10 pr-24 py-2 border border-white rounded-lg leading-5 bg-[#F9FAFB] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1  text-sm"
                        />

                        {/* ICON PLUS */}
                        <div className="absolute inset-y-0 right-12 flex items-center">
                            <button className="p-2 bg-white border border-gray-300 border-opacity-20 rounded hover:bg-gray-50 cursor-pointer mr-2" onClick={() => openModal()}>
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                        
                        <AddModal isOpen={isModalOpen} onClose={closeModal} />
                        
                        {/* ICON FILTER */}
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <button className="p-2 bg-white border border-gray-300 border-opacity-20 rounded hover:bg-gray-50 cursor-pointer">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {/* TABLE LOGS */}
                    <div className="table-container mt-3">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">ID</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Name</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">UserID</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Email</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">0</td>
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">Yosh Batula</td>
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">544580</td>
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">y.batula.544580@umindanao.edu.ph</td>
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
                                        <form action="#" className="flex flex-row gap-3">
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                                Update
                                            </button>
                                            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                                Delete
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">1</td>
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">Logged Out</td>
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">2023-10-01 09:30 AM</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">2</td>
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">Logged In</td>
                                    <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">2023-10-01 09:00 AM</td>
                                </tr>
                                {/* More rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

RecordLogs.layout = page => <Layout>{page}</Layout>

