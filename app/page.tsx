



"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import Hls from "hls.js";


function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] font-sans overflow-x-hidden">
      <main className="max-w-5xl mx-auto py-8 px-4">
        {/* LIVE VIDEO */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-full md:w-[60%] flex flex-col items-center">
              {/* LIVE VIDEO แบบ video + hls.js */}
              <LiveVideoPlayer />
            </div>
            <div className="w-full md:w-[40%] flex flex-col gap-3">
              <h2 className="text-lg font-bold text-blue-900 mb-1">ข่าวไฮไลต์วันนี้</h2>
              <div className="bg-white rounded-lg shadow p-4 text-gray-700 flex flex-col gap-2">
                <Link href="/news/breaking-news-1" className="font-bold hover:underline text-blue-700">เหตุการณ์สำคัญประจำวัน – คลิกอ่านต่อ</Link>
                <div className="text-xs text-gray-500 mt-1">31 ส.ค. 2025 • การเมือง</div>
                <div className="text-sm text-gray-700 line-clamp-2">เนื้อหาข่าวย่อสั้น ๆ เพื่อดึงดูดความสนใจของผู้อ่าน...</div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-gray-700 flex flex-col gap-2">
                <Link href="/news/breaking-news-2" className="font-bold hover:underline text-blue-700">ข่าวด่วน: ผลเลือกตั้งล่าสุด</Link>
                <div className="text-xs text-gray-500 mt-1">31 ส.ค. 2025 • การเมือง</div>
                <div className="text-sm text-gray-700 line-clamp-2">สรุปผลคะแนนเลือกตั้งและบรรยากาศสด...</div>
              </div>
            </div>
          </div>
        </section>

        {/* ข่าวล่าสุด */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3 text-blue-900">ข่าวล่าสุด</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
                <Link href={`/news/news-${i}`} className="font-semibold text-blue-800 hover:underline">หัวข้อข่าวตัวอย่าง {i}</Link>
                <div className="text-xs text-gray-500">31 ส.ค. 2025 • เศรษฐกิจ</div>
                <div className="text-sm text-gray-700 line-clamp-2">เนื้อหาข่าวย่อสั้น ๆ เพื่อดึงดูดความสนใจของผู้อ่าน...</div>
              </div>
            ))}
          </div>
        </section>

        {/* หมวดหมู่เด่น */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3 text-blue-900">หมวดหมู่</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "การเมือง", slug: "politics" },
              { name: "เศรษฐกิจ", slug: "economy" },
              { name: "ไลฟ์สไตล์", slug: "lifestyle" },
              { name: "เทคโนโลยี", slug: "tech" },
              { name: "กีฬา", slug: "sport" },
            ].map(cat => (
              <Link key={cat.slug} href={`/category/${cat.slug}`} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 text-sm font-medium">
                {cat.name}
              </Link>
            ))}
          </div>
        </section>

        {/* ลิงก์ไปยังฟีเจอร์อื่น */}
        <section className="flex flex-wrap gap-4 mt-8">
          <Link href="/search" className="underline text-blue-700">ค้นหาข่าว</Link>
          <Link href="/archive/2025/08" className="underline text-blue-700">คลังข่าว ส.ค. 2025</Link>
          <Link href="/tag/เลือกตั้ง" className="underline text-blue-700">#เลือกตั้ง</Link>
        </section>
      </main>
    </div>
  );
}

export default Home;

// --- LiveVideoPlayer Component ---
const channelLogo = "/globe.svg";
const streamUrl = "https://live.ufu.life/hls/streamufu.m3u8";

function LiveVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(videoRef.current);
        return () => {
          hls.destroy();
        };
      } else if (videoRef.current.canPlayType && videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = streamUrl;
      }
    }
  }, []);

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen();
    // @ts-expect-error - Legacy browser support
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    // @ts-expect-error - Legacy browser support
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
    // @ts-expect-error - Legacy browser support
    else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        controls
        autoPlay
        style={{
          width: "100%",
          maxWidth: 900,
          height: 360,
          background: "#000",
          outline: "none",
        }}
        poster={channelLogo}
      />
      <button
        onClick={handleFullscreen}
        className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-70 text-sm"
        title="เต็มจอ"
      >
        ⛶
      </button>
    </div>
  );
}
