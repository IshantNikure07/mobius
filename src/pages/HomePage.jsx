import React from 'react'
import Gradient from '../assets/Gradient.png'
import Logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
import BookImage from "../assets/BookImage.png"
import Elipse from "../assets/Ellipse.png"
import SmallBook from "../assets/SmallBook.png"
import bg from "../assets/BG.png"
import Ashwin from "../assets/Ashwin.png"
import Nichole from "../assets/Nichole.png"
import { LuArrowUpRight } from "react-icons/lu";
import { FaPlay } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { TbHeartHandshake } from "react-icons/tb";
import { MdHandshake } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import Footer from '../components/Footer'

const howWeWork = [
    { number: 1, text: "Submit Intake Forms " },
    { number: 2, text: "We do the search and curation for list of jobs" },
    { number: 3, text: "You approve, we do the tedious part (applying)" },
    { number: 4, text: "You get the interviews" }
]

const HomePage = () => {
    return (
        <section className='mb-10'>

            <div
                className="flex flex-col w-full h-[100vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${Gradient})` }}
            >
                {/* Header Section */}
                <header className='flex justify-between items-center  m-5'>
                    <h1 className='flex  p-2 items-center text-white gap-2'> <img src={Logo} className='h-10 w-10' alt="" />MobiusEngine</h1>

                    <div className='flex gap-8 text-xl text-white'>
                        <Link to="/Home"> Home</Link>
                        <Link> About us</Link>
                        <Link> Plans</Link>
                        <Link> Testimonals</Link>
                        <Link> Privacy </Link>
                        <Link> More </Link>
                    </div>

                    <button className='bg-white text-[#0649E7] rounded-full px-5 py-1'>
                        Get Started
                    </button>
                </header>

                <div className='flex mx-72  mt-40 p-5'>
                    <div className='w-[70%] space-y-8'>

                        <h1 className='font-bold text-6xl text-white'>Land Job Interviews <span className='text-blue-800'>10x</span> faster</h1>
                        <p className='w-[70%] text-white'>Custom-built resumes that match your goals, keywords, and recruiter expectations.</p>
                        <button className='text-[#0649E7] bg-white gap-3 justify-center items-center rounded-full px-5 py-2 flex mt-8'>
                                Get Started <FiArrowRight />
                            </button>
                    </div>

                    <div className='w-[30%] relative'>
                        <img className='h-[80%]' src={BookImage} alt="" />

                        <div className='absolute bottom-5 right-0 flex justify-center items-center'>
                            <img className='z-10 scale-50' src={Elipse} alt="" />
                            <img className='absolute z-20 scale-50' src={SmallBook} alt="" />
                        </div>
                        <h1 className='text-white mt-3'> Download Free E-book </h1>
                    </div>

                </div>
            </div>

            {/* How we Work */}

            <div className='mx-72 bg-white text-[#0649E7] h-[40vh]'>
                <div className='text-4xl my-14'>
                    How we Work ?
                </div>
                <div className='flex justify-between'>
                    {howWeWork.map((item, index) => (
                        <div className='space-y-3 mb-24 w-44 '>
                            <div className='flex justify-items-start'>
                                <div className='text-2xl flex justify-center items-center p-2 border border-[#0649E7] rounded-full w-[52px] ' >{item.number}</div>
                            </div>
                            <hr className='text-[#0649E7]' />
                            <p className='font-medium'>{item.text}</p>
                        </div>
                    ))}

                </div>
            </div>

            {/* About Us */}
            <div
                className="flex flex-col w-full h-[100vh] bg-cover bg-center "
                style={{ backgroundImage: `url(${bg})` }}>

                <div className='mx-72 text-white'>
                    <h1 className='text-4xl my-12'>About Us</h1>
                    <div className='flex  justify-center items-center gap-16 mx-20'>
                        <img src={Ashwin} className='scale-75' alt="" />
                        <div className='flex flex-col gap-3'>

                            <p className='text-xs'> <span className='font-bold'>Ashwin </span>is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.</p>
                            <p className='text-xs'>Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.</p>
                        </div>
                    </div>
                    <div className='flex  justify-center items-center gap-16 mx-20'>
                        <img src={Nichole} className='scale-75' alt="" />
                        <div className='flex flex-col gap-3'>

                            <p className='text-xs'> <span className='font-bold'>Nicole </span>Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.</p>
                            <p className='text-xs'>Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.
                                With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* What our client Says */}
            <div className='mx-72 bg-white text-[#0649E7] h-[60vh]'>
                <div className='text-4xl my-14'>
                    what our clients have to Says
                </div>

                <div className='flex justify-between '>
                    <div className='rounded-2xl h-80 w-64 bg-[#0649E7] p-1'>
                        <div className='bg-white rounded-2xl  w-full h-[60%] flex justify-center items-center '>
                            <div className='bg-[#0649E7] text-white rounded-full w-12 py-4 flex items-center justify-center   m-3'>< FaPlay />
                            </div>
                        </div>

                        <p className='text-xs text-white m-3'>Holly is a senior executive who got over 10 job interviews and an offer she accepted</p>
                        <div className='bg-white rounded-full w-12 py-4 flex items-center justify-center justify-self-end m-3'><LuArrowUpRight />
                        </div>
                    </div>
                    <div className='rounded-2xl h-80 w-64 bg-[#0649E7] p-1'>
                        <div className='bg-white rounded-2xl  w-full h-[60%] flex justify-center items-center '>
                            <div className='bg-[#0649E7] text-white rounded-full w-12 py-4 flex items-center justify-center   m-3'>< FaPlay />
                            </div>
                        </div>

                        <p className='text-xs text-white m-3'>Holly is a senior executive who got over 10 job interviews and an offer she accepted</p>
                        <div className='bg-white rounded-full w-12 py-4 flex items-center justify-center justify-self-end m-3'><LuArrowUpRight />
                        </div>
                    </div>
                    <div className='rounded-2xl h-80 w-64 bg-[#0649E7] p-1'>
                        <div className='bg-white rounded-2xl  w-full h-[60%] flex justify-center items-center '>
                            <div className='bg-[#0649E7] text-white rounded-full w-12 py-4 flex items-center justify-center   m-3'>< FaPlay />
                            </div>
                        </div>

                        <p className='text-xs text-white m-3'>Holly is a senior executive who got over 10 job interviews and an offer she accepted</p>
                        <div className='bg-white rounded-full w-12 py-4 flex items-center justify-center justify-self-end m-3'><LuArrowUpRight />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center my-24 gap-7'>
                    <button className='bg-white text-blue rounded-full flex justify-center px-5 gap-3 py-1 items-center border border-[#0649E7]'>
                        More Customer Testimonal < LuArrowUpRight />
                    </button>
                    <button className='bg-[#0649E7] gap-3  text-white justify-center items-center border rounded-full px-5 py-1 flex'>
                        Get Started <FiArrowRight />
                    </button>
                </div>
            </div>


            {/* Why choose Us */}
            <div className='mx-72 bg-[#F8FAFF] text-[#0649E7] h-[70vh] p-10 rounded-3xl mt-40'>
                <div className='text-4xl my-14'>
                    what our clients have to Says
                </div>

                <div className='flex justify-between '>

                    <div className='text-[#0649E7] h-56 w-64 rounded-2xl border border-[#0649E7]  flex flex-col justify-center items-start gap-5 pl-6 '>
                        < MdHandshake size={50} />
                        <h1 className='text-xl font-medium'>Tried , Tested , Trusted</h1>
                        <p>Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.</p>
                    </div>

                    <div className='text-[#0649E7] h-56 w-64 rounded-2xl border border-[#0649E7]  flex flex-col justify-center items-start gap-5 pl-6 '>
                        <  IoMdContact size={50} />
                        <h1 className='text-xl font-medium'>Real People , Real Help</h1>
                        <p>A hands-on team that actually cares — guiding you through every twist in your career path.</p>
                    </div>

                    <div className='text-[#0649E7] h-56 w-64 rounded-2xl border border-[#0649E7]  flex flex-col justify-center items-start gap-5 pl-6 '>
                        < FaStar size={50} />
                        <h1 className='text-xl font-medium'>Beat The Line</h1>
                        <p>We search, shortlist, and apply for you, so your name shows up first — every single day.</p>
                    </div>


                </div>
                
            </div>
            
            {/* Job Application Service Plans */}
            <div className='mx-82 bg-white text-[#0649E7] h-[60vh] mb-35'>
                <h1 className='text-4xl my-14'>Job Application Service Plans </h1>
                <div className='flex justify-between  '>

                    {/* Card */}
                   <div className='border border-[#0649E7] w-62 h-[60vh] rounded-2xl text-[#0649E7] p-3 gap-4 flex flex-col '>
                        <h1 className='text-2xl font-semibold'>April Promo</h1>
                        <h1 className='font-bold text-4xl'>$35<span className='text-xl font-normal'>/week</span></h1>
                        <div>
                             <hr className='text-gray-500 ' />
                             <div className='h-[30vh]'>

                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Curated jobs from 1M+ listings, refreshed every 48 hours</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Need more? Add extra apps for just $1.5 each</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Your own dedicated application analyst</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Personalized with up to 10 filters & 5 job titles</p>
                             </div>
                             </div>
                             <button className='bg-[#0649E7] gap-3  text-white justify-center items-center border rounded-full px-5 py-2 flex my-5'>
                                Get Started <FiArrowRight />
                            </button>
                        </div>
                   </div>

                    {/* card 2 */}
                   <div className='border border-[#0649E7] w-62 h-[60vh] rounded-2xl text-[#0649E7] p-3 gap-4 flex flex-col '>
                        <h1 className='text-2xl font-semibold'>Starter</h1>
                        <h1 className='font-bold text-4xl'>$50<span className='text-xl font-normal'>/week</span></h1>
                        <div>
                             <hr className='text-gray-500 ' />
                             <div className='h-[30vh]' >

                           
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>All the perks of the Promo Plan, plus:</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Resume review & story-focused feedback</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Dedicated search specialist</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Up to 50 job apps/week</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Extra apps at $1.5 each</p>
                             </div>
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Analyst support within 6 hours (SLA/PST hours)</p>
                             </div>
                             </div>
                             <button className='bg-[#0649E7] gap-3  text-white justify-center items-center border rounded-full px-5 py-2 flex my-5'>
                                Get Started <FiArrowRight />
                            </button>
                        </div>
                   </div>

                   {/* card 3 */}
                   <div className='border border-[#0649E7] w-62 h-[60vh] rounded-2xl text-[#0649E7] p-3 gap-4 flex flex-col '>
                        <h1 className='text-2xl font-semibold'>Plus</h1>
                        <h1 className='font-bold text-4xl'>$100<span className='text-xl font-normal'>/week</span></h1>
                        <div>
                             <hr className='text-gray-500 ' />
                             <div className='h-[30vh]'>

                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Everything in Starter, with more muscle:</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Up to 75 apps/week</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Apply to 15 job titles</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Analyst + full application team on Pacific hours</p>
                             </div>
                            
                             </div>
                             <button className='bg-[#0649E7] gap-3  text-white justify-center items-center border rounded-full px-5 py-2 flex my-5'>
                                Get Started <FiArrowRight />
                            </button>
                        </div>
                   </div>

                </div>
            </div>

            {/* Advance */}
            <div className='mx-82 bg-[#0649E7] text-white h-[38vh] rounded-2xl p-5 '>
            
                    <div className='flex justify-between'>

                       <div>
                        <h1 className='font-semibold text-2xl'>Advance</h1>
                        <p>Top-tier support for serios job hunters</p>
                       </div>
                       <h1 className='font-bold text-4xl'>$150<span className='text-xl font-normal'>/week</span></h1>
                    </div>
                    <hr className='text-white my-7' />
                     <div className='flex justify-between' >
                        <div className='gap-2 flex flex-col'>

                        
                         <div className='gap-5 flex w-[100%]'>
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%] '>Everything is plus</p>
                             </div>
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Custom Resumes and cover letter</p>
                             </div>
                         </div>
                         <div className='gap-5 flex w-[100%]'>
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>20 fully customised application/week</p>
                             </div>
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Help with complex job search </p>
                             </div>
                         </div>
                         <div className='gap-5 flex w-[100%]'>

                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Excess to senior resume expert , Founder and Exec coaches</p>
                             </div>
                         </div>

                         </div>
                         <button className='text-[#0649E7] gap-3  bg-white mt-20 items-center border rounded-full px-5 py-2 flex my-5'>
                                Get Started <FiArrowRight />
                         </button>

                     </div>
            </div>

            {/* Resume Building Coaching */}
            <div className='mx-82 bg-white text-[#0649E7] h-[60vh] mb-70'>
                <h1 className='text-4xl mt-14'>Resume Building and Coaching</h1>
                <p className='text-sm my-1'>Lets talk about where you headed - and how you resume can getyou there</p>
                <p className='text-sm font-semibold mb-10'>Shedule a call to get started</p>
                <div className='flex justify-center gap-8'>

                    {/* Card */}
                   <div className='border border-[#0649E7] w-62 h-[65vh] rounded-2xl text-[#0649E7] p-3 gap-4 flex flex-col '>
                    <div>

                        <h1 className='text-2xl font-semibold'>Resume Rebuild</h1>
                        <p className='text-xs '>Crafted for senior to VP-level professionals ready for their next ..</p>
                    </div>
                        <h1 className='font-bold text-4xl'>$1000<span className='text-xl font-normal'>onetime</span></h1>
                        <div>
                             <hr className='text-gray-500 ' />
                             <div className='h-[30vh]'>

                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>3× 30-min coaching </p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Focused on storytelling, not just formatting</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Analyst + full application team on Pacific hours</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Tailored to your target industry, company, or role</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Direct work with our co-founder (ex-Google, JP Morgan)</p>
                             </div>
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Executive coaching from UC Berkeley alum with 10+ yrs experience</p>
                             </div>
                             {/* <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Resume Rebuild portfolio available upon request</p>
                             </div> */}
                             </div>
                             <button className='bg-[#0649E7] gap-3  text-white justify-center items-center border rounded-full px-5 py-2 flex mt-8'>
                                Get Started <FiArrowRight />
                            </button>
                        </div>
                   </div>

                    {/* Card 2*/}
                   <div className='border border-[#0649E7] w-62 h-[65vh] rounded-2xl text-[#0649E7] p-3 gap-4 flex flex-col '>
                    <div>

                        <h1 className='text-2xl font-semibold'>Interview Prep</h1>
                        <p className='text-xs '>Two sessions to sharpen your story, confidence, and clarity — fast.</p>
                    </div>
                        <h1 className='font-bold text-4xl'>$500<span className='text-xl font-normal'>onetime</span></h1>
                        <div>
                             <hr className='text-gray-500 ' />
                             <div className='h-[30vh]'>

                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>2× 45-min live coaching with our co-founder </p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Real-time, practical feedback</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>Build clarity, empathy & executive presence</p>
                             </div>
                            
                             <div className='flex gap-1'>
                                <IoCheckmarkCircle size={25} className='text-green-600'/>
                                <p className='text-xs my-1 w-[98%]'>For senior and leadership roles — technical & non-technical</p>
                             </div>
                            
                             </div>
                             <button className='bg-[#0649E7] gap-3  text-white justify-center items-center border rounded-full px-5 py-2 flex mt-8'>
                                Get Started <FiArrowRight />
                            </button>
                        </div>
                   </div>

                  

                </div>
            </div>

            {/* Advance */}
            <div className='mx-82 bg-[#0649E7] text-white h-[38vh] rounded-2xl p-10 flex justify-center   '>         
                    <div className='flex justify-between w-full items-center '>

                      
                        <h1 className='font-normal text-2xl w-[150px]'>STILL HAVE DOUGHTS ?</h1>
                        <p className='font-bold text-5xl'>Contact Us</p>
                       
                        <div className='bg-white rounded-full w-13 py-4 flex items-center text-[#0649E7] justify-center justify-self-end m-3'><FiArrowRight size={20} /></div>                  </div>
            </div>

            {/* Footer */}
            <Footer/>
            
        </section>
    )
}

export default HomePage
