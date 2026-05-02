"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import DomeGallery from "../components/DomeGallery";
import SplitText from "../components/SplitText";
import  Checkbox  from "../components/Checkbox";
import  Button  from "../components/Button";


export default function Page() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const songSrc = "/song.mp3"; // Place your song file in public/song.mp3 or change this path

  const handleAnimationComplete = () => {
    console.log("All letters animated!");

    // wait little moment then open gallery
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = isMuted;
    audio.volume = volume;
    audio.preload = "auto";
    audio.load();

    const onLoadedData = () => {
      audio.play().catch(() => {
        // Autoplay may be blocked until user interaction, but audio is still preloaded.
      });
    };

    audio.addEventListener("loadeddata", onLoadedData);

    return () => {
      audio.removeEventListener("loadeddata", onLoadedData);
    };
  }, [isMuted, volume]);

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextVolume = Number(event.target.value);
    setVolume(nextVolume);
    const audio = audioRef.current;
    if (audio) audio.volume = nextVolume;
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audio.muted = nextMuted;

    if (!nextMuted) {
      audio.play().catch(() => {
        // ignore play rejection if browser blocks it
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src={songSrc} preload="auto" loop />
      {loading ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <SplitText
            text="Navoda Rajapaksha"
            className="text-2xl font-semibold text-center text-white"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            showCallback
          />
          <div
            style={{
              position: "absolute",
              bottom: 24,
              right: 16,
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 12px",
              borderRadius: 999,
              background: "rgba(0,0,0,0.65)",
              color: "#fff",
              zIndex: 10,
            }}
          >
            
           
          </div>
        </div>
      ) : (
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale
          />
          <div
            style={{
              position: "absolute",
              bottom: 24,
              right: 16,
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 12px",
              borderRadius: 999,
              background: "rgba(0,0,0,0.65)",
              color: "#fff",
              zIndex: 10,
            }}
          >
            <button
              onClick={toggleMute}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                fontSize: 22,
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
              }}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? "🔇" : "🔊"}
            </button>
            <div style={{ minWidth: 180 }}>
              <div style={{ fontSize: 12, marginBottom: 6, textAlign: "left" }}>
                Volume {Math.round(volume * 100)}%
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ minWidth: 20 }}>
              <Checkbox/>
            </div>

             <div>
            <Button/>
          </div>

          
          </div>
         
        </div>
      )}
    </>
  );
}