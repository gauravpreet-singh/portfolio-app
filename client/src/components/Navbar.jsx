export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#fffaf0]/90 backdrop-blur-md border-b border-yellow-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gauravpreet Singh</h1>

        <div className="hidden md:flex gap-10 font-medium">
          <a href="#services">Services</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}