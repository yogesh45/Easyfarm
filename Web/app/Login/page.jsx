"use client"

import { useRef, useState } from "react"
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Login = () => {

    const [isOTPSent, setIsOTPsent] = useState(false);

    const mobileNumRef = useRef()

    const otpRef = useRef();

    const router = useRouter();

    /**
     * @function handleOTPClick to trigger api call to otp api
     */

    const handleOTPClick = async () => {
        
        setIsOTPsent(true);
        try{
            const response = await axios.post('http://localhost:3001/otp/sendOTP' , {phoneNumber : mobileNumRef.current.value})
            if(response.data){
                otpRef.current.value = response.data;
            }
        }
        catch(err){
            console.log(err)
        }

    }

    /**
     * @function handleLoginClick - to handle login click and verify the otp
     */

    const handleLoginClick = async() => {
        try{
            const response = await axios.post('http://localhost:3001/otp/verifyOTP', {
                    phoneNumber : mobileNumRef.current.value,
                    otp : otpRef.current.value
            })
            if(response?.data && response.status === 200){
                router.push('/')
            }
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <div className="login-screen w-3/12 m-auto">
             <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Mobile Number
                </span>
                <input 
                    type="number" 
                    ref={mobileNumRef}
                    name="phonenumber" 
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                    placeholder="Enter mobile number" 
                />
            </label>
            {
                isOTPSent &&
                <label className="block mt-3"> 
                    <span className="block text-sm font-medium text-slate-700">
                        OTP
                    </span>
                    <div className="flex">
                        <input
                            ref={otpRef}
                            type='number' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 w-15" />
                    </div>
                </label>
            }
            {
                !isOTPSent && 
                <button
                    className="text-white flex m-auto mt-4 text-center bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleOTPClick}
                  >
                    Request OTP
              </button>
            }
            {
                isOTPSent && 
                
                    <button
                        className="text-white flex m-auto mt-4 text-center bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
            }
        </div>
    )
}

export default Login