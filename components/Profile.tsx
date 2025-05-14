"use client"

/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function Profile() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="max-w-6xl mx-auto p-6 sm:p-8 shadow-lg border-gray-200 overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-gray-100 to-transparent opacity-70 rounded-bl-full" />

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            {/* Profile Image */}
            <div className="w-full md:w-1/3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-md border border-gray-200"
              >
                {/* Placeholder for profile image - replace with your actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Add your profile image</span>
                </div>
                {/* Uncomment and replace with your actual image when ready */}
                {
                  <Image
                    src="/profile.jpg"
                    alt="Profile picture"
                    fill
                    className="object-cover transition-all duration-300 hover:brightness-105"
                    priority
                    onLoadingComplete={() => setIsLoaded(true)}
                  />
                }
              </motion.div>

              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Ứng cử sinh viên tài năng
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  NextStart Incubator
                </Badge>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="w-full md:w-2/3 space-y-5">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Xin chào NextStart Incubator, mình là Thắng Lê
                </h1>
                <div className="h-1 w-20 bg-gray-300 rounded-full"></div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Mình muốn ứng cử "Sinh viên tài năng".
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Mình là một người dám nghĩ dám làm, sẵn sàng hiện thực hoá các ý tưởng mới mẻ trong suy nghĩ dù chỉ là thoáng qua. 
                Mình đến <strong>NextStart Incubator</strong> với mục tiêu tìm kiếm những người dẫn đường, những bạn trẻ cùng chung đam mê khởi nghiệp
                và sẵn sàng hiện thực hoá giấc mơ.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-gray-300 pl-4">
                &ldquo;Trẻ, khoẻ, hoang dại,... là những thứ người ta dùng để miêu tả mình chứ mình thì không&rdquo;
              </p>

            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
