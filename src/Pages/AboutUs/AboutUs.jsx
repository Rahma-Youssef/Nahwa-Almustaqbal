import { motion } from "framer-motion";
import {

  CheckCircle,
  EyeIcon,
  GemIcon,
  TargetIcon
} from "lucide-react";
import { OutlineText } from "../../Components/outline-text";
import { Eye, Target, Gem } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 text-right" id="aboutus">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* العنوان */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <OutlineText>About us</OutlineText>

          <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed mt-4 md:text-lg text-sm">
            نحن شركة متخصصة في تنفيذ وإدارة المشاريع الإنشائية بمختلف أنواعها،
            نقدم حلولًا هندسية مبتكرة بمعايير عالمية تواكب التطور العمراني الحديث
          </p>
        </motion.div>

        {/* الكروت */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* الرؤية */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#F4C947] group cursor-pointer "
          >
            <EyeIcon className="text-white bg-[#29475C] transition-all duration-500 group-hover:scale-110 group-active:scale-110 rounded-lg p-2 w-12 h-12 mb-4" />
            <h3 className="md:text-2xl text-xl font-bold mb-2 font-serif">رؤيتنا</h3>
            <p className="text-gray-600 leading-relaxed">
              أن نكون الشريك الأول في تطوير البنية التحتية وبناء مستقبل مستدام للأجيال القادمة
            </p>
          </motion.div>

          {/* رسالتنا */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.35 }}
            className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#F4C947] group cursor-pointer"
          >
            <TargetIcon className="text-white bg-[#29475C] transition-all duration-500 group-hover:scale-110 group-active:scale-110 rounded-lg p-2 w-12 h-12 mb-4" />
            <h3 className=" font-bold mb-2 font-serif md:text-2xl text-xl">رسالتنا</h3>
            <p className="text-gray-600 leading-relaxed">
              تقديم خدمات مقاولات متكاملة بجودة عالية، التزام كامل بالوقت والتكلفة،
              وبأعلى معايير السلامة والاحترافية.
            </p>
          </motion.div>

          {/* قيمنا */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5 }}
            className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#F4C947] group cursor-pointer"
          >
            <GemIcon className="text-white bg-[#29475C] transition-all duration-500 group-hover:scale-110 group-active:scale-110 rounded-lg p-2 w-12 h-12 mb-4 " />
            <h3 className="font-bold mb-3 font-serif md:text-2xl text-xl">قيمنا</h3>
            <ul className="space-y-2 text-gray-600 text-right">
              <li className="flex flex-row-reverse items-center gap-2">
                <CheckCircle className="w-5 text-red-500" />
                الجودة والسلامة
              </li>

              <li className="flex flex-row-reverse items-center gap-2">
                <CheckCircle className="w-5 text-red-500" />
                الشفافية والمصداقية
              </li>

              <li className="flex flex-row-reverse items-center gap-2">
                <CheckCircle className="w-5 text-red-500" />
                التطوير والابتكار
              </li>

              <li className="flex flex-row-reverse items-center gap-2">
                <CheckCircle className="w-5 text-red-500" />
                رضا العميل أولًا
              </li>
            </ul>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
