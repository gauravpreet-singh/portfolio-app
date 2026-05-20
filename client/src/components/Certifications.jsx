import { motion } from 'framer-motion'

import awsBadge from '../assets/AWS_badge.png'
import oracleBadge from '../assets/OCPJSE17.png'

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[4px] text-gray-500 font-semibold">
            Achievements
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Professional Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-3xl shadow-xl text-center"
          >
            <img
              src={awsBadge}
              alt="AWS Certification"
              className="w-[320px] h-[320px] object-contain mx-auto"
            />

            <h3 className="text-3xl font-bold mt-8">
              AWS Certified Developer Associate
            </h3>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Expertise in AWS cloud development, deployment,
              serverless architecture, and scalable infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-[#fff8dc] p-10 rounded-3xl border border-yellow-200 shadow-xl text-center hover:shadow-yellow-200 transition"
          >
            <img
              src={oracleBadge}
              alt="Oracle Java Certification"
              className="w-[320px] h-[320px] object-contain mx-auto"
            />

            <h3 className="text-3xl font-bold mt-8">
              Oracle Certified Professional Java SE 17 Developer
            </h3>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Advanced Java development expertise in enterprise applications,
              backend systems, and scalable software engineering.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}