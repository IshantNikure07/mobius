import React from 'react'
import { TfiLinkedin } from "react-icons/tfi";
import BlueLogo from "../assets/BlueLogo.svg"


const Footer = () => {
    return (
        <div className='w-full h-[32vh] mt-30'>
            <div className='mx-26'>
                <div cl>
                    <img src={BlueLogo} alt="" />
                </div>
                <hr className='text-gray-500 w-[30%] my-8 ' />
                <div className='flex justify-between  text-[#0649E7]'>
                    <div className='w-[60%] flex'>
                        <div className='w-[30%]'>
                            <h1 className='underline'>Address</h1>
                            <p>1875 Mission St Ste 103 #450
                                San Francisco, CA 94103</p>
                        </div>
                        <div className='w-[30%]'   >
                            <h1 className='underline'>Email</h1>
                            <p>finance@mobiusengine.ai</p>
                        </div>
                        <div className='w-[30%]'>
                            <h1 className='underline'>Telephone</h1>
                            <p>878-411-451</p>
                        </div>



                    </div>
                    <div>
                    <h1 className='underline'>Socials</h1>
                           <div className='flex'>
                           <div className='text-2xl flex justify-center items-center p-1 border border-[#0649E7] text-[#0649E7] rounded-full w-[36px] scale-75 ' ><TfiLinkedin /></div>
                           <div className='text-2xl flex justify-center items-center p-1 border border-[#0649E7] text-[#0649E7] rounded-full w-[36px] scale-75 ' ><TfiLinkedin /></div>
                           </div>
                    </div>
                </div>

            </div>
            <div className='w-full bg-[#0649E7] h-[50px] items-center text-white px-10 flex justify-between '>
                <div>
                    © 2023 Mobiusservices LLC
                </div>

                <div className='flex gap-4'>
                    <h1>Terms & Condition</h1>
                    <h1>Privacy Policy</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
