import { motion } from 'framer-motion'

const services = [
  {
    title: 'Website Layout and Development',
    description:
      'Creating stunning, responsive, and high-performance websites with modern UI/UX.',
  },
  {
    title: 'Shopify Website Development',
    description:
      'Building custom Shopify stores with secure payment integration and scalable ecommerce solutions.',
  },
  {
    title: 'Website Hosting',
    description:
      'Reliable hosting, SSL security, backups, and optimized deployment infrastructure.',
  },
  {
    title: 'Functional System',
    description:
      'Developing modern and scalable business systems with optimized architecture.',
  },
  {
    title: 'Test, Review and Launch',
    description:
      'Complete QA testing, deployment pipelines, and launch support.',
  },
  {
    title: 'Website Maintenance',
    description:
      'Ongoing monitoring, security updates, and performance optimization.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Android and iOS mobile applications using React Native and Flutter.',
  },
  {
    title: 'Cloud Computing',
    description:
      'Cloud-native solutions using AWS, Azure, and Google Cloud Platform.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-[#fff4cc]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <span className="uppercase tracking-[4px] text-gray-500 font-semibold">
            Services
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What I Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#fff8dc] p-10 rounded-3xl border border-yellow-200 shadow-lg hover:shadow-yellow-200 hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-bold mb-5">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}