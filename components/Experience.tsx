"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Globe, MessageSquare, ExternalLink, Calendar } from "lucide-react"
import Script from "next/script"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const scrollToCard = (index: number) => {
    setActiveTab(index)

    if (cardRefs.current[index]) {
      // Add a small delay to ensure state updates before scrolling
      setTimeout(() => {
        cardRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 100)
    }
  }

  const experiences = [
    {
      title: "Content Planner",
      organization: "Bảo tàng dân tộc học Việt Nam",
      project: "Trung thu 2024: Sắc màu văn hoá Hà Tĩnh",
      description:
        "Xây dựng masterplan truyền thông và timeline bài đăng, đóng góp và thực thi ý tưởng content, thực hiện ghi hình ngày diễn ra sự kiện",
      socialContent: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div
              className="fb-post"
              data-href="https://www.facebook.com/btdth/posts/pfbid0rDy5wWyBhbouzc92yxzG6RWRvt3Fmwy3j5W2etX4M5w123uoF32b7HbabjeUZqjfl"
              data-width="100%"
              data-show-text="true"
            ></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div
              className="fb-post"
              data-href="https://www.facebook.com/btdth/posts/pfbid0oG53yHNpcEL88aRKyAZww6nhV7XdrMsneY4CR5RcBfxWVo6cnBf87XtMJBVoUkxyl"
              data-width="100%"
              data-show-text="true"
            ></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div
              className="fb-post"
              data-href="https://www.facebook.com/btdth/posts/pfbid02nNCFfnyiCahEknkDHmtzRvCkcgJNHVpS1M8UzzCcwAEitCbnyPSCRwQdhqGs1UMwl"
              data-width="100%"
              data-show-text="true"
            ></div>
          </div>
        </div>
      ),
      buttons: [
        {
          icon: <Facebook className="mr-2 h-4 w-4" />,
          label: "Facebook",
          url: "https://www.facebook.com/btdth",
        },
      ],
    },
    {
      title: "Event Coordinator",
      organization: "Vietnam Tech Impact Summit 2024",
      description:
        "Tham gia điều phối sự kiện, hỗ trợ sân khấu, đảm bảo sự kiện diễn ra đúng timeline và xử lý các sự cố phát sinh",
      socialContent: (
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/vtis-1.png"
              alt="VTIS 2024 Event Image 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/vtis-2.jpg"
              alt="VTIS 2024 Event Image 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
      buttons: [
        {
          icon: <Globe className="mr-2 h-4 w-4" />,
          label: "VTIS2024",
          url: "https://vtis.io/",
        },
      ],
    },
    {
      title: "Content Creator",
      organization: "Giấy trắng & Mực đen",
      description:
        "Xây dựng nội dung trending, tăng độ nhận biết với sản phẩm secondhand và áo in parody, thiết kế quảng cáo cơ bản",
      socialContent: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@mucden_banao/video/7438465301202603271"
                data-video-id="7438465301202603271"
                style={{ maxWidth: "100%", minWidth: "100%" }}
              >
                <section></section>
              </blockquote>
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@mucden_banao/video/7442592931602631944"
                data-video-id="7442592931602631944"
                style={{ maxWidth: "100%", minWidth: "100%" }}
              >
                <section></section>
              </blockquote>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DBo2qQnzWl9/?img_index=1"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "8px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "0",
                  maxWidth: "100%",
                  minWidth: "100%",
                  padding: 0,
                  width: "100%",
                }}
              ></blockquote>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DDi5Qqzvoap/?img_index=1"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "8px",
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "0",
                  maxWidth: "100%",
                  minWidth: "100%",
                  padding: 0,
                  width: "100%",
                }}
              ></blockquote>
            </div>
          </div>
        </div>
      ),
      buttons: [
        {
          icon: <Instagram className="mr-2 h-4 w-4" />,
          label: "Giấy Trắng",
          url: "https://www.instagram.com/giaytrang.2hand/",
        },
        {
          icon: <Instagram className="mr-2 h-4 w-4" />,
          label: "Mực Đen",
          url: "https://www.instagram.com/mucden.banao/",
        },
      ],
    },
    {
      title: "Social Media",
      organization: "Gia sư Vietmentor",
      description:
        "Làm content đa kênh cho Vietmentor (Facebook, Instagram, TikTok, Threads), thiết kế quảng cáo cơ bản.",
      socialContent: (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="aspect-square relative rounded-lg overflow-hidden shadow-md group">
              <Image
                src={`/vietmentor-${index}.png`}
                alt={`Vietmentor content ${index}`}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      ),
      buttons: [
        {
          icon: <Facebook className="mr-2 h-4 w-4" />,
          label: "Facebook",
          url: "https://facebook.com/giasuvietmentor",
        },
        {
          icon: <MessageSquare className="mr-2 h-4 w-4" />,
          label: "Threads",
          url: "https://www.threads.net/@giasu.vietmentor",
        },
      ],
    },
  ]

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
    <section className="py-12 px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trải nghiệm</h2>
            <div className="h-1 w-16 bg-gray-300 rounded-full mt-2"></div>
          </div>

          <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 no-scrollbar">
            {experiences.map((exp, index) => (
              <Button
                key={index}
                variant={activeTab === index ? "default" : "outline"}
                className="whitespace-nowrap"
                onClick={() => scrollToCard(index)}
              >
                {exp.title}
              </Button>
            ))}
          </div>
        </div>

        <motion.div variants={container} initial="hidden" animate={isVisible ? "show" : "hidden"} className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={item}
              ref={(el) => { cardRefs.current[index] = el }}
              className="scroll-mt-24"
            >
              <Card className="p-6 sm:p-8 shadow-md border-gray-200 overflow-hidden relative hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100 to-transparent opacity-70 rounded-bl-full" />

                <div className="space-y-6 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          {experience.organization}
                        </span>
                      </div>
                      {experience.project && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          <span>{experience.project}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative pl-4 border-l-2 border-gray-200">
                    <p className="text-gray-600">{experience.description}</p>
                  </div>

                  <div className="pt-2">{experience.socialContent}</div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.buttons.map((button, buttonIndex) => (
                      <Button
                        key={buttonIndex}
                        variant="outline"
                        className="flex-1 sm:flex-none group"
                        onClick={() => window.open(button.url, "_blank")}
                      >
                        {button.icon}
                        <span>{button.label}</span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* TikTok and Instagram Scripts */}
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      {/* Facebook SDK */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
        strategy="lazyOnload"
        nonce="your-nonce"
      />
    </section>
  )
}
