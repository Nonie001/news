



"use client";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";


function Home() {
  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Breaking News Banner */}
      <div className="bg-green-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <span className="bg-white text-green-700 px-2 py-1 text-xs font-bold uppercase mr-3 rounded text-center">
            ข่าวด่วน
          </span>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs sm:text-sm font-medium animate-pulse truncate">
              อัปเดตสถานการณ์ปาเลสไตน์ล่าสุด - ข่าวจากเยรูซาเลมและฉนวนกาซา
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Top Stories Section */}
        <section className="py-4 sm:py-8 border-b border-gray-200">
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Main Story */}
            <div className="lg:col-span-2">
              <div className="mb-3 sm:mb-4">
                <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                  ข่าวสำคัญ
                </span>
              </div>
              <LiveVideoPlayer />
              <div className="mt-3 sm:mt-4">
                <Link href="/news/main-story" className="block">
                  <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight hover:text-green-600 transition-colors">
                    สถานการณ์ปาเลสไตน์: รายงานล่าสุดจากเยรูซาเลมและการเจรจาสันติภาพ
                  </h1>
                </Link>
                <div className="flex items-center mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">
                  <time>6 กันยายน 2568</time>
                  <span className="mx-1 sm:mx-2">•</span>
                  <span>ข่าวศาสนา</span>
                  <span className="mx-1 sm:mx-2">•</span>
                  <span className="hidden sm:inline">8 นาทีในการอ่าน</span>
                </div>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  รายงานเชิงลึกเกี่ยวกับสถานการณ์ปัจจุบันในปาเลสไตน์ และผลกระทบต่อชุมชนมุสลิม
                  พร้อมการวิเคราะห์จากนักวิชาการด้านศาสนาและผู้เชี่ยวชาญตะวันออกกลาง...
                </p>
              </div>
            </div>

            {/* Sidebar Stories */}
            <div className="space-y-4 sm:space-y-6 mt-6 lg:mt-0">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 pb-2 border-b border-gray-200">
                  ข่าวล่าสุด
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      title: "การประชุมสภาอิสลามโลกเพื่อปาเลสไตน์",
                      category: "ข่าวศาสนา",
                      time: "2 ชั่วโมงที่แล้ว",
                      urgent: true
                    },
                    {
                      title: "บทความ: ความหมายของอัลอักซอในอิสลาม",
                      category: "บทความศาสนา",
                      time: "4 ชั่วโมงที่แล้ว",
                      urgent: false
                    },
                    {
                      title: "รายงานสถานการณ์ฉนวนกาซาวันนี้",
                      category: "ข่าวปาเลสไตน์",
                      time: "6 ชั่วโมงที่แล้ว",
                      urgent: false
                    },
                    {
                      title: "ชุมชนมุสลิมทั่วโลกร่วมสนับสนุนปาเลสไตน์",
                      category: "ข่าวสากล",
                      time: "8 ชั่วโมงที่แล้ว",
                      urgent: false
                    }
                  ].map((item, i) => (
                    <article key={i} className="group">
                      <Link href={`/news/story-${i}`} className="block">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          {item.urgent && (
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                              {item.title}
                            </h3>
                            <div className="flex items-center mt-1 text-xs text-gray-500">
                              <span className="text-green-600 font-medium">{item.category}</span>
                              <span className="mx-1 sm:mx-2">•</span>
                              <time className="truncate">{item.time}</time>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Categories */}
        <section className="py-4 sm:py-8 border-b border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { name: "ข่าวศาสนา", slug: "religious-news", count: 45 },
              { name: "บทความศาสนา", slug: "religious-articles", count: 38 },
              { name: "ข่าวปาเลสไตน์", slug: "palestine-news", count: 52 },
              { name: "อิสลามและสังคม", slug: "islam-society", count: 29 }
            ].map(category => (
              <div key={category.slug} className="group">
                <Link href={`/category/${category.slug}`}>
                  <div className="border-l-4 border-green-600 pl-3 sm:pl-4 group-hover:border-green-800 transition-colors">
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-green-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {category.count} บทความ
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Articles Grid */}
        <section className="py-4 sm:py-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">บทความและข่าวเพิ่มเติม</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "ประวัติศาสตร์มัสยิดอัลอักซอและความสำคัญทางศาสนา",
                category: "บทความศาสนา",
                date: "6 กันยายน 2568"
              },
              {
                title: "รายงานสดจากเยรูซาเลม: ชีวิตของชาวปาเลสไตน์",
                category: "ข่าวปาเลสไตน์", 
                date: "5 กันยายน 2568"
              },
              {
                title: "การละหมาดและความหมายเชิงจิตวิญญาณ",
                category: "บทความศาสนา",
                date: "5 กันยายน 2568"
              },
              {
                title: "ชุมชนมุสลิมไทยสนับสนุนปาเลสไตน์",
                category: "ข่าวในประเทศ",
                date: "4 กันยายน 2568"
              },
              {
                title: "เดือนรอมฎอนและความหมายของการอดอาหาร",
                category: "บทความศาสนา",
                date: "4 กันยายน 2568"
              },
              {
                title: "นานาชาติเรียกร้องสันติภาพในตะวันออกกลาง",
                category: "ข่าวสากล",
                date: "3 กันยายน 2568"
              }
            ].map((article, i) => (
              <article key={i} className="group">
                <Link href={`/news/article-${i}`}>
                  <div className="bg-gray-100 aspect-video mb-3 sm:mb-4 rounded-sm overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                      {article.category}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-gray-900 mt-1 sm:mt-2 group-hover:text-green-600 transition-colors leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      อ่านเพิ่มเติมเกี่ยวกับเนื้อหาที่สำคัญและมีความหมายในมุมมองศาสนาและสังคม
                    </p>
                    <time className="text-xs text-gray-500 mt-2 sm:mt-3 block">
                      {article.date}
                    </time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-4 sm:py-8 bg-green-50 border-t border-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              ติดตามข่าวสารศาสนา
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">
              รับข่าวสารและบทความศาสนาล่าสุดส่งตรงถึงอีเมลของคุณ
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 sm:gap-0 px-4">
              <input
                type="email"
                placeholder="อีเมลของคุณ"
                className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded sm:rounded-l-sm sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
              />
              <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded sm:rounded-r-sm sm:rounded-l-none hover:bg-green-700 transition-colors font-medium text-sm sm:text-base">
                สมัครรับข่าว
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 sm:mt-3 px-4">
              เราจะส่งข่าวสารที่เป็นประโยชน์และเกี่ยวข้องกับศาสนาเท่านั้น
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

  useEffect(() => {
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
          videoRef.current?.play().catch(console.log);
        });

        return () => {
          hls.destroy();
        };
      } else if (videoRef.current.canPlayType && videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = streamUrl;
        setIsLive(true);
        videoRef.current.play().catch(console.log);
      }
    }

    // Handle fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleVideoClick = () => {
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
      <div className="absolute top-3 right-3 z-20">
        <div className="flex items-center bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
          <div className={`w-2 h-2 bg-white rounded-full mr-2 ${isLive ? 'animate-pulse' : ''}`}></div>
          {isLive ? 'LIVE' : 'OFFLINE'}
        </div>
      </div>

      {/* Video Container */}
      <div className="aspect-video bg-black rounded-lg overflow-hidden cursor-pointer relative" onClick={handleVideoClick}>
        <video
          ref={videoRef}
          controls={false}
          muted={isMuted}
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        />
        
        {/* Bottom Right Controls */}
        <div className={`absolute bottom-2 right-2 z-20 flex items-center space-x-1 sm:space-x-2 ${isFullscreen ? 'hidden' : ''}`}>
          {/* Mute/Unmute Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleMuteToggle();
            }}
            className="text-white p-2 sm:p-3 rounded transition-all duration-200 hover:scale-110"
            title={isMuted ? "เปิดเสียง" : "ปิดเสียง"}
          >
            {isMuted ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
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
            className="text-white p-2 sm:p-3 rounded transition-all duration-200 hover:scale-110"
            title={isFullscreen ? "ออกจากเต็มจอ" : "เต็มจอ"}
          >
            {isFullscreen ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
