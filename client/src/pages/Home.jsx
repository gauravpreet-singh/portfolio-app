import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Certifications from '../components/Certifications'
import Footer from '../components/Footer'
import ChatBot from '../components/ChatBot'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Certifications />
      <Footer />
      <ChatBot />
    </div>
  )
}