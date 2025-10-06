import { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';

export default function UpdateUsers({ isOpen, onClose, user }) {
    const { data, setData, put, processing, errors, reset, clearErrors } = useForm({
        name: '',
        email: '',
        userId: '',
        password: ''
    });

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen && user) {
            setData({
                name: user.name || '',
                email: user.email || '',
                userId: user.user_id || '',
                password: '' 
            });
            // Clear any previous errors when opening modal
            clearErrors();
            setVisible(true);
        } else if (isOpen) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen, user]);

    if (!isOpen && !visible) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('handleSubmit called with user:', user);
        console.log('Form data:', data);
        console.log('Current errors object:', errors);
        
        if (!user || !user.id) {
            alert('No user selected for update');
            return;
        }
        
        console.log('Sending PUT request to:', `/admin/users/${user.id}`);
        console.log('Data being sent:', data);
        
        put(`/admin/users/${user.id}`, {
            onSuccess: () => {
                reset();
                onClose();
                alert('User updated successfully!');
                window.location.reload();
            },
            onError: (errors) => {
                console.error('Validation errors:', errors);
            }
        });
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-200 ${
                isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleBackdropClick}
        >
            <div
                className={`bg-white rounded-lg shadow-xl w-full max-w-md mx-4 transform transition-all duration-200 ${
                    isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Update Users</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
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
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C0306] focus:border-[#9C0306]"
                                placeholder="Enter full name"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C0306] focus:border-[#9C0306]"
                                placeholder="Enter email address"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
                                User ID
                            </label>
                            <input
                                type="text"
                                id="userId"
                                name="userId"
                                value={data.userId}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C0306] focus:border-[#9C0306]"
                                placeholder="Enter user ID"
                                required
                            />
                            {errors.userId && <p className="text-red-500 text-sm mt-1">{errors.userId}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C0306] focus:border-[#9C0306]"
                                placeholder="Leave blank to keep current password"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 text-sm font-medium text-white bg-[#9C0306] border border-transparent rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-[#9C0306] focus:ring-offset-2 transition-colors disabled:opacity-50"
                        >
                            {processing ? 'Updating...' : 'Update User'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
