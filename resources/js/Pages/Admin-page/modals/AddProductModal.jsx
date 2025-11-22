import { useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import UploadIcon from '../../../../images/UploadIcon.svg';

export default function AddProductModal({ isOpen, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        price: '',
        stock: '',
        category: '',
    });

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/products', {
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };


    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/20"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
            {/* Header */}
            <div>
                <div className="bg-[#9C0306] flex flex-row justify-between items-start p-6 border-b">
                    <h2 className="text-[32px] font-semibold text-white">ADD PRODUCT</h2>
                </div>
            </div>
            {/* Modal Body */}
            <div className='p-6'>
                <div className='flex flex-row gap-10 items-start'>
                    <div className='p-10 flex flex-col w-70 border-2 border-[#9C0306] rounded-lg bg-white flex-shrink-0'>
                        <button className='flex flex-col items-center justify-center hover: cursor-pointer'>
                            <img src={UploadIcon} alt="Upload" />
                            <p className='text-[#9C0306] py-3'>Choose file to upload</p>
                        </button>
                    </div>
                    <div className='flex flex-col justify-start flex-1'>
                        <div>
                            <p className='font-medium text-[20px] mb-2'>Description:</p>
                            <textarea 
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Add Description"
                                className="w-full h-40 px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9C0306] focus:border-[#9C0306] focus:outline-none resize-none"
                                rows="5"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Adding new features to the modal */}
            <div className='flex flex-col justify-start px-6'>
                <div>
                    <h1 className='text-[20px] font-medium'>Product Name:</h1>
                    <input 
                    type="text" 
                    placeholder="Enter Product Name"
                    className='px-3 border border-gray-300 rounded-2xl w-full h-10 mt-1'
                    />
                </div>
                <div>
                    <h1 className='text-[20px] font-medium'>Add Price:</h1>
                </div>
            </div>
            </div>
        </div>
    );
}
