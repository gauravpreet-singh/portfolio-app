import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import API from '../services/api'

export default function ContactModal({
  isOpen,
  onClose,
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await API.post(
        '/contact',
        form
      )

      alert(response.data.message)

      setForm({
        name: '',
        email: '',
        message: '',
      })

      onClose()
    } catch (error) {
      console.error(error)

      alert('Something went wrong')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-6"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-xl rounded-3xl p-8 shadow-2xl relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-3xl text-gray-500 hover:text-black transition"
            >
              ×
            </button>

            <h2 className="text-4xl font-bold mb-8 text-black">
              Get In Touch
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="w-full border border-gray-300 bg-[#fffaf0] text-black p-4 rounded-xl outline-none focus:border-yellow-500"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="w-full border border-gray-300 bg-[#fffaf0] text-black p-4 rounded-xl outline-none focus:border-yellow-500"
                required
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="w-full border border-gray-300 bg-[#fffaf0] text-black p-4 rounded-xl outline-none focus:border-yellow-500"
                required
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-2xl hover:scale-[1.01] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}