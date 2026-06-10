//import ContactForm from '../pages/ContactForm'
import { useState } from 'react'
import ContactModal from './ContactModal'
export default function Footer() {
  const [isModalOpen, setIsModalOpen] =
    useState(false)
  return (
    <footer
      id="contact"
      className="bg-[#1f1a00] text-yellow-100 py-14 px-6 mt-10"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-8">
          Let's Build Something Amazing
        </h2>

        <p className="text-gray-300 text-lg mb-10">
          Open for freelance projects, collaborations, and opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

  
   <button
  onClick={() => setIsModalOpen(true)}
  className="bg-yellow-400 text-black px-8 py-4 rounded-2xl hover:bg-yellow-300 hover:scale-105 transition"
>
  Get In Touch
</button>

  <a
    href="https://calendly.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-yellow-300 text-yellow-100 px-8 py-4 rounded-2xl hover:bg-yellow-400 hover:text-black transition"
  >
    Schedule a Call
  </a>

</div>
 
<ContactModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>
      <div className="flex items-center justify-center gap-8 mt-12">

  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition text-lg"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition text-lg"
  >
    LinkedIn
  </a>

</div>

<p className="text-gray-500 mt-10">
  © 2026 Gauravpreet Singh
</p>
      </div>
    </footer>
  )
}