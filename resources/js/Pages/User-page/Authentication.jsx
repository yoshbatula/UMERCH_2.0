import { useState, useRef, useEffect } from 'react';
import { useForm, router } from '@inertiajs/react';

export default function Authentication({ user, errors: pageErrors }) {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [resendCooldown, setResendCooldown] = useState(0);
    const [localErrors, setLocalErrors] = useState({});
    const inputRefs = useRef([]);
    
    const { data, setData, post, processing, errors } = useForm({
        otp: ''
    });

    const censorEmail = (email) => {
        if (!email) return 'your registered email';
        
        const [localPart, domain] = email.split('@');
        if (!domain) return email;
        
        const censoredLocal = localPart.length > 3 
            ? localPart.substring(0, 2) + '*'.repeat(localPart.length - 3) + localPart.slice(-1)
            : localPart.substring(0, 1) + '*'.repeat(localPart.length - 1);
        
        const domainParts = domain.split('.');
        const mainDomain = domainParts[0];
        const tld = domainParts.slice(1).join('.');
        
        const censoredDomain = mainDomain.length > 3
            ? mainDomain.substring(0, 2) + '*'.repeat(mainDomain.length - 2)
            : mainDomain.substring(0, 1) + '*'.repeat(mainDomain.length - 1);
        
        return `${censoredLocal}@${censoredDomain}.${tld}`;
    };

    const handleOtpChange = (index, value) => {
        if (value.length > 1) return; 
        
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };


    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        const otpCode = otp.join('');
        console.log('Attempting to verify OTP:', otpCode);
        
        setLocalErrors({});
        
        if (otpCode.length === 6) {
            router.post('/verify-otp', {
                otp: otpCode
            }, {
                onStart: () => {
                    console.log('OTP verification started');
                },
                onSuccess: (page) => {
                    console.log('OTP verified successfully - redirecting to landing', page);
        
                    setOtp(['', '', '', '', '', '']);
                },
                onError: (errors) => {
                    console.log('OTP verification errors:', errors);
                    setLocalErrors(errors);
                    
                    setOtp(['', '', '', '', '', '']);
                   
                    inputRefs.current[0]?.focus();
                },
                onFinish: () => {
                    console.log('OTP verification finished');
                }
            });
        } else {
            console.log('OTP code length is not 6:', otpCode.length);
            setLocalErrors({ otp: 'Please enter all 6 digits' });
        }
    };

    // Resend OTP
    const handleResend = () => {
        if (resendCooldown > 0) return;
        
        
        setLocalErrors({});
        
        router.post('/resend-otp', {}, {
            onSuccess: () => {
                console.log('OTP resent successfully');
                setResendCooldown(60); 
            },
            onError: (errors) => {
                console.log('Resend OTP errors:', errors);
                setLocalErrors(errors);
            }
        });
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

    // adding something
    // finalizing
    // just adding something new features
    // why is it not working?
    // i can't commit
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
                    <p className="font-semibold">{censorEmail(user?.email)}</p>
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
                            className={`bg-transparent border-0 border-b-2 text-center text-lg font-semibold tracking-widest focus:outline-none transition-colors duration-300 w-12 pb-2 ${
                                localErrors.otp || pageErrors?.otp 
                                    ? 'border-red-500 focus:border-red-600' 
                                    : 'border-gray-400 focus:border-[#9C0306]'
                            }`}
                            maxLength="1"
                        />
                    ))}
                </div>
                
                {/* ERROR MESSAGE */}
                {(localErrors.otp || pageErrors?.otp) && (
                    <div className="mt-3 text-center">
                        <p className="text-red-600 text-sm font-medium">
                            {localErrors.otp || pageErrors.otp}
                        </p>
                    </div>
                )}
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