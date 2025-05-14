"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Phone, Mail, ExternalLink, MapPin, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" ref={containerRef} id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Liên hệ Thắng</h2>
          <div className="h-1 w-16 bg-gray-300 rounded-full mt-2"></div>
        </div>

        <motion.div variants={container} initial="hidden" animate={isVisible ? "show" : "hidden"}>
          <Card className="p-6 sm:p-8 shadow-lg border-gray-200 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gray-100 to-transparent opacity-70 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gray-100 to-transparent opacity-70 rounded-tr-full" />

            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Social Media Links */}
                <motion.div variants={item} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Facebook className="h-5 w-5 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Mạng xã hội</h3>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 sm:flex-none group hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300"
                        onClick={() => window.open("https://www.facebook.com/starcngdc/", "_blank")}
                      >
                        <Facebook className="mr-2 h-4 w-4" />
                        Facebook
                        <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 sm:flex-none group hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300"
                        onClick={() => window.open("https://www.linkedin.com/in/thang-lee-75365a258/", "_blank")}
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                        <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 sm:flex-none group hover:bg-gray-50 hover:text-gray-600 hover:border-gray-200 transition-all duration-300"
                        onClick={() => window.open("https://github.com/thnglee", "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Github
                        <ExternalLink className="ml-1.5 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500">
                        Liên hệ Thắng qua bất kì nền tảng nào.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div variants={item} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Phone className="h-5 w-5 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Thông tin liên hệ</h3>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="space-y-4">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Button
                          variant="ghost"
                          className="w-full justify-start p-0 hover:bg-transparent"
                          onClick={() => (window.location.href = "tel:+84981779204")}
                        >
                          <Phone className="mr-3 h-4 w-4 text-green-500" />
                          <span>+84 981779204</span>
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Button
                          variant="ghost"
                          className="w-full justify-start p-0 hover:bg-transparent"
                          onClick={() => (window.location.href = "mailto:lethang1281@gmail.com")}
                        >
                          <Mail className="mr-3 h-4 w-4 text-blue-500" />
                          <span>lethang1281@gmail.com</span>
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <MapPin className="mr-3 h-4 w-4 text-red-500" />
                          <span className="text-gray-700">KTX Ngoai Ngu, 144 Xuan Thuy, Cau Giay, Hanoi, Vietnam</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500">
                        Sẵn sàng trả lời mọi câu hỏi và thảo luận về cơ hội hợp tác!
                      </p>
                    </div> */}
                  </div>
                </motion.div>
              </div>

              <motion.div variants={item} className="mt-8 text-center">
                <p className="text-gray-500">
                  Cảm ơn bạn đã ghé thăm portfolio của Thắng. Hãy liên hệ nếu bạn có bất kì câu hỏi nào!
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
