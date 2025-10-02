import { useState, useRef, useEffect } from 'react';
import { useForm } from '@inertiajs/react';

export default function Authentication({ user }) {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [resendCooldown, setResendCooldown] = useState(0);
    const inputRefs = useRef([]);
    
    const { post, processing } = useForm();

    // Handle OTP input changes
    const handleOtpChange = (index, value) => {
        if (value.length > 1) return; // Only allow single character
        
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        
        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace
    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // Verify OTP
    const handleVerify = () => {
        const otpCode = otp.join('');
        if (otpCode.length === 6) {
            post('/verify-otp', {
                data: { otp: otpCode }
            });
        }
    };

    // Resend OTP
    const handleResend = () => {
        if (resendCooldown > 0) return;
        
        post('/resend-otp');
        setResendCooldown(60); // 60 second cooldown
    };

    // Cooldown timer
    useEffect(() => {
        if (resendCooldown > 0) {
            const timer = setTimeout(() => {
                setResendCooldown(resendCooldown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [resendCooldown]);

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
                    <p className="font-semibold">{user?.email || 'your registered email'}</p>
                </div>
                {/* OTP INPUT FIELDS */}
                <div className="flex flex-row space-x-4 mt-8">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="bg-transparent border-0 border-b-2 border-gray-400 text-center text-lg font-semibold tracking-widest focus:outline-none focus:border-[#9C0306] transition-colors duration-300 w-12 pb-2"
                            maxLength="1"
                        />
                    ))}
                </div>
                <div className="mt-6">
                    <p className="text-gray-600">
                        Didn't receive the code? 
                        <button 
                            onClick={handleResend}
                            disabled={resendCooldown > 0}
                            className={`ml-1 font-semibold ${resendCooldown > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-[#9C0306] hover:underline'}`}
                        >
                            {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend'}
                        </button>
                    </p>
                </div>
                <div className="mt-5">
                    <button 
                        onClick={handleVerify}
                        disabled={otp.join('').length !== 6 || processing}
                        className="bg-[#9C0306] w-32 h-10 text-white rounded-[20px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#7a0205] transition-colors"
                    >
                        {processing ? 'VERIFYING...' : 'VERIFY'}
                    </button>
                </div>
            </div>
        </>
    );
}