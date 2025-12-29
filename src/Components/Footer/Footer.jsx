import React from 'react'
import logoimage from '../../assets/images/logoimage.png'

const Footer = () => {
    return (
        <footer class="bg-[#172134] text-gray-300 py-10 ">
            <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 grid-cols-2 gap-8">


                <div>
                    <div className="flex items-center gap-2">
                        <img
                            src={logoimage}
                            alt="logo"
                            className="md:w-12 w-8 transition-all duration-300"
                        />
                        <p className="font-bold md:text-xl text-[10px]  text-[#daa54a]">
                            Nahwa Almustaqbal
                        </p>
                    </div>
                    <p class="md:text-sm text-[12px] font-mono font-medium mt-4">
                        General Contracting Company L.L.C
                    </p>
                </div>


                <div>
                    <h3 class="text-white text-lg font-semibold mb-3">Company</h3>
                    <ul class="space-y-2 md:text-md text-sm">
                        <li><a href="#aboutus" class="hover:text-white">About Us</a></li>
                        <li><a href="#services" class="hover:text-white">Our Services</a></li>
                        <li><a href="#projects" class="hover:text-white">Projects</a></li>

                    </ul>
                </div>
                <div>
                    <h3 class="text-white text-lg font-semibold mb-3">Services</h3>
                    <ul class="space-y-2 md:text-md text-sm">
                        <li><a href="#aboutus" class="hover:text-white">About</a></li>
                        <li><a href="#services" class="hover:text-white">Services</a></li>
                        <li><a href="#projects" class="hover:text-white">Projects</a></li>
                        <li><a href="#contact" class="hover:text-white"> Contact</a></li>
                    </ul>
                </div>


                <div>
                    <h3 class="text-white text-lg font-semibold mb-3"> Support</h3>
                    <ul class="space-y-2 md:text-md text-sm">
                        <li><a href="#contact" class="hover:text-white">Contact Us</a></li>

                        <li>
                            <a href="https://wa.me/971589803373" target='_blank' className="text-yellow-500 font-semibold">+971589803373</a>
                        </li>
                        <li>
                            <a href="https://wa.me/971589803373" target='_blank' className="text-yellow-500 font-semibold">+971589803373</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t w-[90%] mx-auto border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                © 2025 Nahwa Almustaqbal Contracting. All rights reserved.
            </div>
        </footer>

    )
}

export default Footer