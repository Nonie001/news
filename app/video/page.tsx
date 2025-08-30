
"use client";

import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const channelLogo = "/globe.svg"; // เปลี่ยนเป็นโลโก้ช่องจริงได้
const streamUrl = "https://live.ufu.life/hls/streamufu.m3u8";

const VideoPage = () => {
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
      } else if (videoRef.current && videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = streamUrl;
      }
    }
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 24,
          marginTop: 32,
        }}
      >
        <img
          src={channelLogo}
          alt="Channel Logo"
          style={{ width: 48, height: 48, borderRadius: "50%", boxShadow: "0 2px 8px #0008" }}
        />
        <span
          style={{
            color: "#fff",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 1,
            textShadow: "0 2px 8px #000a",
          }}
        >
          UFU TV LIVE
        </span>
        <span
          style={{
            background: "red",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            borderRadius: 8,
            padding: "4px 12px",
            marginLeft: 12,
            boxShadow: "0 2px 8px #0005",
            letterSpacing: 1,
          }}
        >
          LIVE
        </span>
      </div>
      <div
        style={{
          background: "#181c24",
          borderRadius: 18,
          boxShadow: "0 8px 32px #0007",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <video
          ref={videoRef}
          controls
          autoPlay
          style={{
            width: "80vw",
            maxWidth: 900,
            height: 500,
            borderRadius: 12,
            boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
            background: "#000",
            outline: "none",
          }}
          poster="/globe.svg"
        />
        <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
          <button
            style={{
              background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 24px",
              fontWeight: 600,
              fontSize: 18,
              cursor: "pointer",
              boxShadow: "0 2px 8px #0004",
              transition: "background 0.2s",
            }}
            onClick={() => window.location.reload()}
          >
            รีเฟรช
          </button>
        </div>
      </div>
      <div style={{ color: "#fff8", fontSize: 16, marginTop: 32, textAlign: "center" }}>
        © 2025 UFU TV | รับชมถ่ายทอดสดคุณภาพสูง 24 ชั่วโมง
      </div>
    </main>
  );
};

export default VideoPage;
