import React from 'react'
import { OutlineText } from '../../Components/outline-text'
import { Eye, Target, Gem } from "lucide-react";

const Services = () => {
    return (
        <section className="py-24 bg-gray-100 text-center" id="services">
            <OutlineText> Our Services</OutlineText>
            <p className="text-gray-600 py-4  md:text-lg text-sm font-semibold">
                نغطي جميع أنواع المشاريع باحترافية وجودة عالية
            </p>

            <div className="grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-5">

                {/* Card */}
                {[
                    {
                        title: "المشاريع السكنية",
                        desc: "فلل – مجمعات – بنايات سكنية",
                        icon: "🏠",
                    },
                    {
                        title: "المشاريع التجارية",
                        desc: "أسواق – مولات – مراكز أعمال",
                        icon: "🏢",
                    },
                    {
                        title: "المشاريع الصناعية",
                        desc: "مصانع – مستودعات – منشآت لوجستية",
                        icon: "🏭",
                    },
                    {
                        title: "المشاريع الحكومية",
                        desc: "مدارس – مرافق عامة – مراكز صحية",
                        icon: "🏫",
                    },
                    {
                        title: "مشاريع البنية التحتية",
                        desc: "طرق – شبكات مياه – إنارة",
                        icon: "🛣️",
                    },
                    {
                        title: "الترميم والتطوير",
                        desc: "إعادة تأهيل وتحديث المباني",
                        icon: "🔧",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl active:shadow-2xl  transition-all duration-500 hover:-translate-y-3 active:-translate-y-3 relative overflow-hidden"
                    >
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition duration-500"></div> */}

                        <div className="relative z-10">
                            <div className="text-4xl mb-4  group-hover:scale-125 group-active:scale-125  transition-all duration-500">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-2  font-serif  transition">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 transition font-sans font-medium">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services