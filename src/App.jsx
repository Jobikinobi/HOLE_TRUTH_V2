import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">The Hole Truth</h1>
              <span className="ml-2 text-sm text-blue-400">V2</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#articles" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Articles</a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">About</a>
              <a href="#articles" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Articles</a>
              <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Hole Truth
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Uncovering the stories that matter, revealing the truth beneath the surface.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Read Latest
            </button>
            <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-bold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About The Hole Truth</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Version 2 of our investigative journalism platform, dedicated to bringing you in-depth reporting and analysis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900/50 rounded-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">Investigation</h3>
              <p className="text-gray-300">Deep-dive investigations into important stories</p>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-lg">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-bold text-white mb-2">Reporting</h3>
              <p className="text-gray-300">Fact-based journalism you can trust</p>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-lg">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white mb-2">Analysis</h3>
              <p className="text-gray-300">Expert analysis and commentary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-300">Stay informed with our latest investigations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((article) => (
              <div key={article} className="bg-gray-800/70 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Article Title {article}</h3>
                  <p className="text-gray-300 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a story tip or want to learn more about our work? We'd love to hear from you.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </button>
            <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-bold py-3 px-8 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 The Hole Truth. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
