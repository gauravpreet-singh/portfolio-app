import { motion } from 'framer-motion'
import mypic from '../assets/pic.jpg'

export default function Hero() {
  return (
    <section className="min-h-[65vh] flex items-center pt-10 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[4px] text-gray-500 font-semibold">
            Based in India
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6">
            Crafting Digital Experiences with Precision.
          </h1>

          <p className="text-xl text-gray-600 mt-8 leading-relaxed">
           I create websites and mobile apps using AI-assisted development to deliver faster, cheaper, and higher-quality solutions.
          </p>

          <a
            href="#certifications"
            className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-2xl hover:bg-yellow-300 hover:scale-105 transition shadow-lg shadow-yellow-200"
          >
            View Certifications
          </a>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center"
>
  <img
    src={mypic}
    alt="Developer"
    className="w-[280px] md:w-[380px] rounded-3xl shadow-2xl object-cover"
  />
</motion.div>
      </div>
    </section>
  )
}