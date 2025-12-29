import React from 'react'
import { OutlineText } from '../../Components/outline-text'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Icon } from '@iconify/react';


const Contact = () => {
    return (


        <section id="contact" className="bg-gray-100 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <div className=" text-center py-8">
                    <OutlineText>Contact Us</OutlineText>
                </div>
                <p className="md:text-lg text-md  mb-12 fotn-serif text-gray-700 font-semibold">
                    لأي استفسارات أو معلومات إضافية، يمكنكم التواصل معنا من خلال التفاصيل التالية
                </p>

                <div className="flex justify-between flex-col md:flex-row gap-8">

                    <div className="space-y-6 md:w-1/2 ">
                        <div className="flex items-center gap-5 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                            <Icon icon="line-md:phone" width="24" height="24" className='text-blue-950 bg-[#F4A711] rounded-lg p-2 w-10 h-10' />
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Eng. Ahmed Mounir</h4>
                                <p className="flex items-center gap-2 font-semibold font-mono text-blue-700">
                                    <a href="https://wa.me/971582598387" target='_blank' className="">+971582598387</a>

                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                            <Icon icon="line-md:phone" width="24" height="24" className='text-blue-950 bg-[#F4A711] rounded-lg p-2 w-10 h-10' />
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Eng. Ashraf Zain</h4>
                                <p className="flex items-center gap-2 font-semibold font-mono text-blue-700">
                                    <a href="https://wa.me/971589803373" target='_blank' className="">+971589803373</a>

                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                            <div className='flex items-center gap-5'>
                                <Icon icon="basil:location-outline" width="24" height="24" className='text-blue-950 bg-[#F4A711] rounded-lg p-2 w-10 h-10' />                            <div>
                                    <h4 className="text-xl font-semibold mb-2">Address</h4>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className="  font-semibold font-mono text-right">

                                    الفجيره <br />
                                    شارع حمد بن عبد الله، منطقة تون سنتر <br />
                                    بناية الفيوا سابقا، الدور الخامس، مكتب رقم 502
                                </p>
                            </div>
                        </div>



                    </div>


                    <div className={`container d-flex justify-content-center items-center py-4   md:w-1/2 `}>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.3844074089866!2d56.32045857537945!3d25.122691577758925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA3JzIxLjciTiA1NsKwMTknMjIuOSJF!5e0!3m2!1sen!2seg!4v1754143344402!5m2!1sen!2seg" className={`border-0 rounded-lg w-full md:h-100 h-50 `} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>




                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact