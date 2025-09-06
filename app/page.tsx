



"use client";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";

function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="bg-white p-4">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="ค้นหาข่าว..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-3 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">เมนู</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="p-4 space-y-4">
              <Link href="/" className="block py-3 text-gray-700 font-medium border-b border-gray-100">
                หน้าหลัก
              </Link>
              <Link href="/news" className="block py-3 text-gray-700 font-medium border-b border-gray-100">
                ข่าวล่าสุด
              </Link>
              <Link href="/category/religious-news" className="block py-3 text-gray-700 font-medium border-b border-gray-100">
                ข่าวศาสนา
              </Link>
              <Link href="/category/palestine-news" className="block py-3 text-gray-700 font-medium border-b border-gray-100">
                ข่าวปาเลสไตน์
              </Link>
              <Link href="/category/religious-articles" className="block py-3 text-gray-700 font-medium border-b border-gray-100">
                บทความศาสนา
              </Link>
              <Link href="/video" className="block py-3 text-gray-700 font-medium border-b border-gray-100">
                วิดีโอ
              </Link>
              <Link href="/contact" className="block py-3 text-gray-700 font-medium border-b border-gray-100">
                ติดต่อ
              </Link>
            </nav>
          </div>
        </div>
      )}
      {/* Breaking News Banner */}
      <div className="bg-green-700 text-white py-2 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 min-w-0">
              <span className="bg-white text-green-700 px-2 py-1 text-xs font-bold uppercase mr-2 sm:mr-3 rounded text-center flex-shrink-0">
                ข่าวด่วน
              </span>
              <div className="flex-1 overflow-hidden">
                <p className="text-xs sm:text-sm font-medium animate-pulse truncate">
                  อัปเดตสถานการณ์ปาเลสไตน์ล่าสุด - ข่าวจากเยรูซาเลมและฉนวนกาซา
                </p>
              </div>
            </div>
            {/* Mobile Action Buttons */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-white hover:bg-green-600 rounded"
                aria-label="เปิดการค้นหา"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-white hover:bg-green-600 rounded"
                aria-label="เปิดเมนู"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Desktop Search Bar */}
        <div className="hidden lg:block py-4 border-b border-gray-100">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาข่าว บทความ หรือหัวข้อ..."
                className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Trending Topics - Mobile Only */}
        <div className="lg:hidden py-3 border-b border-gray-100">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">หัวข้อยอดนิยม:</span>
            {['ปาเลสไตน์', 'อิสลาม', 'อัลอักซอ', 'ฮัจญ์', 'รอมฎอน'].map((topic, i) => (
              <Link
                key={i}
                href={`/search?q=${topic}`}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap hover:bg-green-200 transition-colors"
              >
                #{topic}
              </Link>
            ))}
          </div>
        </div>
        {/* Top Stories Section */}
        <section className="py-4 sm:py-6 lg:py-8 border-b border-gray-200">
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Main Story */}
            <div className="lg:col-span-2">
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-green-700 uppercase tracking-wide">
                    ข่าวสำคัญ
                  </span>
                  <span className="text-xs text-gray-500 hidden sm:block">
                    อัปเดตล่าสุด: 2 นาทีที่แล้ว
                  </span>
                </div>
              </div>
              <LiveVideoPlayer />
              <div className="mt-3 sm:mt-4">
                <Link href="/news/main-story" className="block group">
                  <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                    สถานการณ์ปาเลสไตน์: รายงานล่าสุดจากเยรูซาเลมและการเจรจาสันติภาพ
                  </h1>
                </Link>
                <div className="flex flex-wrap items-center mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 gap-1 sm:gap-2">
                  <time>6 กันยายน 2568</time>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-green-600 font-medium">ข่าวศาสนา</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">8 นาทีในการอ่าน</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">ด่วน</span>
                </div>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-700 leading-relaxed line-clamp-3">
                  รายงานเชิงลึกเกี่ยวกับสถานการณ์ปัจจุบันในปาเลสไตน์ และผลกระทบต่อชุมชนมุสลิม
                  พร้อมการวิเคราะห์จากนักวิชาการด้านศาสนาและผู้เชี่ยวชาญตะวันออกกลาง
                  รวมถึงมุมมองจากผู้นำศาสนาในการแสวงหาสันติภาพ...
                </p>
                <div className="flex items-center justify-between mt-3 sm:mt-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      234
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.05 4.11c-.05.23-.09.46-.09.7 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      แชร์
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      บันทึก
                    </span>
                  </div>
                  <Link href="/news/main-story" className="text-green-600 hover:text-green-700 text-sm font-medium">
                    อ่านต่อ →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Stories */}
            <div className="space-y-4 sm:space-y-6 mt-6 lg:mt-0">
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 pb-2 border-b border-gray-200 flex-1">
                    ข่าวล่าสุด
                  </h2>
                  <Link href="/news" className="text-green-600 hover:text-green-700 text-sm font-medium lg:hidden">
                    ดูทั้งหมด
                  </Link>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      title: "การประชุมสภาอิสลามโลกเพื่อปาเลสไตน์",
                      category: "ข่าวศาสนา",
                      time: "2 ชั่วโมงที่แล้ว",
                      urgent: true,
                      views: "1.2k"
                    },
                    {
                      title: "บทความ: ความหมายของอัลอักซอในอิสลาม",
                      category: "บทความศาสนา",
                      time: "4 ชั่วโมงที่แล้ว",
                      urgent: false,
                      views: "856"
                    },
                    {
                      title: "รายงานสถานการณ์ฉนวนกาซาวันนี้",
                      category: "ข่าวปาเลสไตน์",
                      time: "6 ชั่วโมงที่แล้ว",
                      urgent: false,
                      views: "2.1k"
                    },
                    {
                      title: "ชุมชนมุสลิมทั่วโลกร่วมสนับสนุนปาเลสไตน์",
                      category: "ข่าวสากล",
                      time: "8 ชั่วโมงที่แล้ว",
                      urgent: false,
                      views: "643"
                    }
                  ].map((item, i) => (
                    <article key={i} className="group border-b border-gray-50 pb-3 last:border-b-0">
                      <Link href={`/news/story-${i}`} className="block">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          {item.urgent && (
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-green-600 transition-colors leading-tight line-clamp-2">
                              {item.title}
                            </h3>
                            <div className="flex items-center justify-between mt-1">
                              <div className="flex items-center text-xs text-gray-500 truncate">
                                <span className="text-green-600 font-medium">{item.category}</span>
                                <span className="mx-1 sm:mx-2">•</span>
                                <time className="truncate">{item.time}</time>
                              </div>
                              <span className="text-xs text-gray-400 ml-2 flex-shrink-0">
                                {item.views} ครั้ง
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              {/* Quick Links - Mobile */}
              <div className="lg:hidden bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-sm text-gray-900 mb-3">ลิงก์ด่วน</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/video" className="bg-white p-3 rounded border text-center hover:shadow-sm transition-shadow">
                    <div className="text-green-600 mb-1">
                      <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-700">วิดีโอ</span>
                  </Link>
                  <Link href="/contact" className="bg-white p-3 rounded border text-center hover:shadow-sm transition-shadow">
                    <div className="text-green-600 mb-1">
                      <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-700">ติดต่อ</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Categories */}
        <section className="py-4 sm:py-6 lg:py-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">หมวดหมู่ข่าว</h2>
            <Link href="/categories" className="text-green-600 hover:text-green-700 text-sm font-medium hidden sm:block">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { 
                name: "ข่าวศาสนา", 
                slug: "religious-news", 
                count: 45,
                icon: "🕌",
                color: "bg-green-50 border-green-200 hover:bg-green-100"
              },
              { 
                name: "บทความศาสนา", 
                slug: "religious-articles", 
                count: 38,
                icon: "📖",
                color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
              },
              { 
                name: "ข่าวปาเลสไตน์", 
                slug: "palestine-news", 
                count: 52,
                icon: "🇵🇸",
                color: "bg-red-50 border-red-200 hover:bg-red-100"
              },
              { 
                name: "อิสลามและสังคม", 
                slug: "islam-society", 
                count: 29,
                icon: "🤝",
                color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
              }
            ].map(category => (
              <div key={category.slug} className="group">
                <Link href={`/category/${category.slug}`}>
                  <div className={`border-2 ${category.color} rounded-lg p-3 sm:p-4 transition-all duration-200 group-hover:shadow-md`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl sm:text-2xl">{category.icon}</span>
                      <span className="text-xs sm:text-sm text-gray-500 bg-white px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1 hidden sm:block">
                      บทความล่าสุด
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Articles Grid */}
        <section className="py-4 sm:py-6 lg:py-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">บทความและข่าวเพิ่มเติม</h2>
            <div className="flex items-center space-x-3">
              <select className="text-sm border border-gray-300 rounded px-3 py-1 hidden sm:block">
                <option>ทั้งหมด</option>
                <option>ข่าวศาสนา</option>
                <option>บทความศาสนา</option>
                <option>ข่าวปาเลสไตน์</option>
              </select>
              <Link href="/news" className="text-green-600 hover:text-green-700 text-sm font-medium">
                ดูทั้งหมด →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "ประวัติศาสตร์มัสยิดอัลอักซอและความสำคัญทางศาสนา",
                category: "บทความศาสนา",
                date: "6 กันยายน 2568",
                readTime: "5 นาที",
                views: "1.2k",
                author: "อาจารย์อาหมัด"
              },
              {
                title: "รายงานสดจากเยรูซาเลม: ชีวิตของชาวปาเลสไตน์",
                category: "ข่าวปาเลสไตน์", 
                date: "5 กันยายน 2568",
                readTime: "8 นาที",
                views: "2.1k",
                author: "นักข่าวภาคสนาม"
              },
              {
                title: "การละหมาดและความหมายเชิงจิตวิญญาณ",
                category: "บทความศาสนา",
                date: "5 กันยายน 2568",
                readTime: "6 นาที",
                views: "856",
                author: "อิหม่าม ยูซุฟ"
              },
              {
                title: "ชุมชนมุสลิมไทยสนับสนุนปาเลสไตน์",
                category: "ข่าวในประเทศ",
                date: "4 กันยายน 2568",
                readTime: "4 นาที",
                views: "643",
                author: "ทีมข่าว"
              },
              {
                title: "เดือนรอมฎอนและความหมายของการอดอาหาร",
                category: "บทความศาสนา",
                date: "4 กันยายน 2568",
                readTime: "7 นาที",
                views: "1.5k",
                author: "ดร.ฟาฏิมะห์"
              },
              {
                title: "นานาชาติเรียกร้องสันติภาพในตะวันออกกลาง",
                category: "ข่าวสากล",
                date: "3 กันยายน 2568",
                readTime: "3 นาที",
                views: "892",
                author: "ผู้สื่อข่าวสากล"
              }
            ].map((article, i) => (
              <article key={i} className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                <Link href={`/news/article-${i}`}>
                  <div className="bg-gray-100 aspect-video overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-green-600 uppercase tracking-wide bg-green-50 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.views} ครั้ง</span>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 mt-1 sm:mt-2 group-hover:text-green-600 transition-colors leading-tight line-clamp-2 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3">
                      อ่านเพิ่มเติมเกี่ยวกับเนื้อหาที่สำคัญและมีความหมายในมุมมองศาสนาและสังคม
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <span>{article.author}</span>
                        <span>•</span>
                        <time>{article.date}</time>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          {/* Load More Button - Mobile */}
          <div className="text-center mt-6 lg:hidden">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors w-full sm:w-auto">
              โหลดเพิ่มเติม
            </button>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-6 sm:py-8 bg-gradient-to-r from-green-50 to-green-100 border-t border-gray-200">
          <div className="max-w-2xl mx-auto text-center px-4">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                ติดตามข่าวสารศาสนา
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                รับข่าวสารและบทความศาสนาล่าสุดส่งตรงถึงอีเมลของคุณ
              </p>
            </div>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="อีเมลของคุณ"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-green-700 transition-colors font-medium text-sm sm:text-base whitespace-nowrap">
                สมัครรับข่าว
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                ฟรี 100%
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                ไม่มีสแปม
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                ปลอดภัย
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              ข่าวสารศาสนาและการอัปเดตสำคัญเท่านั้น • ยกเลิกได้ตลอดเวลา
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

// --- LiveVideoPlayer Component ---
const streamUrl = "https://live.ufu.life/hls/streamufu.m3u8";

function LiveVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLive, setIsLive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on client side
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          liveSyncDurationCount: 3,
          liveMaxLatencyDurationCount: 5,
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90,
        });

        hls.loadSource(streamUrl);
        hls.attachMedia(videoRef.current);
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsLive(true);
          setIsLoading(false);
          videoRef.current?.play().catch(console.log);
        });

        hls.on(Hls.Events.ERROR, () => {
          setIsLoading(false);
        });

        return () => {
          hls.destroy();
          window.removeEventListener('resize', handleResize);
        };
      } else if (videoRef.current.canPlayType && videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = streamUrl;
        setIsLive(true);
        setIsLoading(false);
        videoRef.current.play().catch(console.log);
      }
    }

    // Handle fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    // On mobile, show controls instead of going fullscreen
    if (isMobile) {
      setShowControls(!showControls);
      setTimeout(() => setShowControls(false), 3000);
      return;
    }

    if (!isFullscreen) {
      if (video.requestFullscreen) video.requestFullscreen();
      // @ts-expect-error - Legacy browser support
      else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
      // @ts-expect-error - Legacy browser support
      else if (video.msRequestFullscreen) video.msRequestFullscreen();
      // @ts-expect-error - Legacy browser support
      else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
    }
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isFullscreen) {
      if (video.requestFullscreen) video.requestFullscreen();
      // @ts-expect-error - Legacy browser support
      else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
      // @ts-expect-error - Legacy browser support
      else if (video.msRequestFullscreen) video.msRequestFullscreen();
      // @ts-expect-error - Legacy browser support
      else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="relative w-full">
      {/* Live Badge */}
      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20">
        <div className="flex items-center bg-red-600 text-white px-2 sm:px-3 py-1 rounded text-xs font-bold shadow-lg">
          <div className={`w-2 h-2 bg-white rounded-full mr-2 ${isLive ? 'animate-pulse' : ''}`}></div>
          {isLive ? 'LIVE' : 'OFFLINE'}
        </div>
      </div>

      {/* Video Container */}
      <div className="aspect-video bg-black rounded-lg overflow-hidden cursor-pointer relative" onClick={handleVideoClick}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
              <p className="text-sm">กำลังโหลด...</p>
            </div>
          </div>
        )}
        
        <video
          ref={videoRef}
          controls={false}
          muted={isMuted}
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        />
        
        {/* Mobile Touch Indicator */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`text-white text-center transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-black bg-opacity-50 rounded-lg p-3">
              <p className="text-xs mb-2">แตะเพื่อแสดงการควบคุม</p>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
                <span className="text-xs">เต็มจอ</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className={`absolute bottom-2 right-2 z-20 flex items-center space-x-1 sm:space-x-2 transition-opacity duration-300 ${isFullscreen ? 'hidden' : ''} ${showControls || !isMobile ? 'opacity-100' : 'md:opacity-100 opacity-0'}`}>
          {/* Mute/Unmute Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleMuteToggle();
            }}
            className="text-white p-2 sm:p-3 rounded transition-all duration-200 hover:scale-110 bg-black bg-opacity-50 hover:bg-opacity-70"
            title={isMuted ? "เปิดเสียง" : "ปิดเสียง"}
          >
            {isMuted ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFullscreen();
            }}
            className="text-white p-2 sm:p-3 rounded transition-all duration-200 hover:scale-110 bg-black bg-opacity-50 hover:bg-opacity-70"
            title={isFullscreen ? "ออกจากเต็มจอ" : "เต็มจอ"}
          >
            {isFullscreen ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
