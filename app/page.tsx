"use client"

import { useRef } from "react"
import Profile from "@/components/Profile"
import Experience from "@/components/Experience"
import AdditionalSkills from "@/components/AdditionalSkills"
import Contact from "@/components/Contact"
import { ChevronUp } from "lucide-react"

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null)

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Thắng Lê</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#profile" className="text-gray-600 hover:text-gray-900 transition">
                  Lời chào
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 hover:text-gray-900 transition">
                  Trải nghiệm
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-gray-900 transition">
                  Kỹ năng 
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">
                  Liên hệ 
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white" ref={topRef}>
        {/* Container with max width and proper spacing */}
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Sections with proper IDs and spacing */}
          <section id="profile" className="mb-16 md:mb-24 scroll-mt-20">
            <Profile />
          </section>

          <section id="experience" className="mb-16 md:mb-24 scroll-mt-20">
            <Experience />
          </section>

          <section id="skills" className="mb-16 md:mb-24 scroll-mt-20">
            <AdditionalSkills />
          </section>

          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </div>
      </main>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </button>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Thang&apos;s Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
