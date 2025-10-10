import Layout from "@/Layouts/AdminNav";
import AccountLogo from '@images/Account.svg';
import AddModal from './modals/AddUsers'
import UpdateModal from './modals/UpdateUsers'
import { Link } from '@inertiajs/react';
import DeleteModal from './modals/DeleteModal'
import { useState, useEffect } from "react";

export default function RecordLogs({ users = [], recordlogs = [] }) {
    
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const openUpdateModal = (user) => {
        setSelectedUser(user);
        setIsUpdateModalOpen(true);
    };

    const openDeleteModal = (user) => {
        setSelectedUser(user);
        setIsDeleteModalOpen(true);
    }

    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };

    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setSelectedUser(null);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setSelectedUser(null);
    }
    const handleDelete = async (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            try {
                const response = await fetch(`/admin/users/${userId}`, {
                    method: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    }
                });
                
                if (response.ok) {
                    window.location.reload();
                } else {
                    alert('Failed to delete user');
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('Error deleting user');
            }
        }
    };

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
                            <p className="text-red-100 text-[16px] font-medium mt-1">{recordlogs.length}</p>
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
                            <button className="p-2 bg-white border border-gray-300 border-opacity-20 rounded hover:bg-gray-50 cursor-pointer mr-2" onClick={openAddModal}>
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                        
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
                                <tr className="text-center">
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">ID</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Name</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">UserID</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Email</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{user.id}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{user.name}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{user.user_id}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{user.email}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
                                            <div className="flex flex-row gap-3">
                                                <button 
                                                    onClick={() => openUpdateModal(user)}
                                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                                >
                                                    Update
                                                </button>
                                                <button 
                                                    onClick={() => openDeleteModal(user)}
                                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {users.length === 0 && (
                                    <tr>
                                        <td className="p-4 text-center" colSpan="5">No users found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Record Logs Section */}
                <div className="px-9 mt-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-black font-bold text-2xl">Record Logs</h2>

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
                        
                        {/* ICON FILTER */}
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <button className="p-2 bg-white border border-gray-300 border-opacity-20 rounded hover:bg-gray-50 cursor-pointer">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div className="table-container mt-3">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Name</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Email</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Logged_In</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recordlogs.map((log) => (
                                    <tr key={log.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{log.User_name}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{log.User_email}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
                                            {new Date(log.logged_in_at).toLocaleString('en-US', {
                                                timeZone: 'Asia/Manila',
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                second: '2-digit',
                                                hour12: true
                                            })}
                                        </td>
                                    </tr>
                                ))}
                                {recordlogs.length === 0 && (
                                    <tr>
                                        <td className="p-4 text-center" colSpan="3">No login records found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <AddModal isOpen={isAddModalOpen} onClose={closeAddModal} />
            <UpdateModal 
                isOpen={isUpdateModalOpen} 
                onClose={closeUpdateModal} 
                user={selectedUser}
            />
            <DeleteModal 
                isOpen={isDeleteModalOpen} 
                onClose={closeDeleteModal} 
                user={selectedUser}
            />
        </>
    );
}

RecordLogs.layout = page => <Layout>{page}</Layout>

