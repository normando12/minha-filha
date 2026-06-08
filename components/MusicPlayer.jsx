"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { MUSIC } from "@/config/site";

function loadYouTubeApi() {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.YT?.Player) {
      resolve(window.YT);
      return;
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT);
    };
    if (!document.getElementById("yt-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "yt-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  });
}

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const ytPlayerRef = useRef(null);
  const ytContainerRef = useRef(null);
  const pendingPlayRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [ytReady, setYtReady] = useState(false);

  const useLocalAudio = Boolean(MUSIC.src);
  const useYouTube = Boolean(MUSIC.youtubeId) && !useLocalAudio;
  const ytStart = MUSIC.youtubeStartSeconds ?? 0;

  const playYouTube = useCallback((player) => {
    if (!player?.loadVideoById) return;

    player.loadVideoById({
      videoId: MUSIC.youtubeId,
      startSeconds: ytStart,
    });
    setPlaying(true);
    pendingPlayRef.current = false;
  }, [ytStart]);

  const startPlayback = useCallback(() => {
    if (useLocalAudio && audioRef.current) {
      if (ytStart > 0) audioRef.current.currentTime = ytStart;
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
      return;
    }
    if (ytPlayerRef.current?.loadVideoById) {
      playYouTube(ytPlayerRef.current);
    } else {
      pendingPlayRef.current = true;
    }
  }, [useLocalAudio, ytStart, playYouTube]);

  const play = () => {
    setShowStart(false);
    startPlayback();
  };

  const toggle = () => {
    if (useLocalAudio && audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
      return;
    }
    if (ytPlayerRef.current) {
      const state = ytPlayerRef.current.getPlayerState?.();
      if (state === 1) {
        ytPlayerRef.current.pauseVideo();
        setPlaying(false);
      } else {
        ytPlayerRef.current.playVideo();
        setPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (useLocalAudio && audioRef.current) {
      audioRef.current.load();
    }
  }, [useLocalAudio]);

  useEffect(() => {
    if (!useYouTube) return;

    let cancelled = false;

    (async () => {
      const YT = await loadYouTubeApi();
      if (cancelled || !ytContainerRef.current) return;

      ytPlayerRef.current = new YT.Player(ytContainerRef.current, {
        height: "1",
        width: "1",
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          enablejsapi: 1,
          origin: typeof window !== "undefined" ? window.location.origin : undefined,
          host: "https://www.youtube-nocookie.com",
        },
        events: {
          onReady: (e) => {
            if (cancelled) return;
            setYtReady(true);
            if (pendingPlayRef.current) playYouTube(e.target);
          },
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.PLAYING) setPlaying(true);
            if (e.data === YT.PlayerState.PAUSED) setPlaying(false);
            if (e.data === YT.PlayerState.ENDED) {
              playYouTube(e.target);
            }
          },
          onError: () => {
            setPlaying(false);
          },
        },
      });
    })();

    return () => {
      cancelled = true;
      if (ytPlayerRef.current?.destroy) {
        ytPlayerRef.current.destroy();
      }
      ytPlayerRef.current = null;
    };
  }, [useYouTube, playYouTube]);

  if (!useLocalAudio && !useYouTube) return null;

  return (
    <>
      {useLocalAudio && (
        <audio ref={audioRef} src={MUSIC.src} loop preload="auto" />
      )}
      {useYouTube && (
        <div
          ref={ytContainerRef}
          className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px overflow-hidden"
          aria-hidden="true"
        />
      )}

      <AnimatePresence>
        {showStart && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-sm rounded-3xl border border-neon-pink/45 bg-[#0a0414]/95 p-8 text-center shadow-[0_0_40px_rgba(255,77,157,0.35),0_0_80px_rgba(255,45,111,0.15)] backdrop-blur-xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-neon-pink/85">
                {MUSIC.overlayLabel}
              </p>

              <h2 className="mb-1 font-[family-name:var(--font-great-vibes)] text-[clamp(2rem,6vw,2.75rem)] leading-tight text-neon-pink text-glow-pink-intense">
                {MUSIC.overlayPhrase}
              </h2>

              <p className="mb-1 font-[family-name:var(--font-dancing)] text-2xl text-[#ffb3e0] text-glow-pink">
                {MUSIC.title}
              </p>

              <p className="mb-6 text-sm text-white/65">
                {MUSIC.overlayHint}
              </p>

              <motion.button
                type="button"
                onClick={play}
                disabled={useYouTube && !ytReady}
                className="rounded-full border border-neon-pink/70 bg-transparent px-10 py-3.5 text-base font-semibold text-white shadow-[0_0_20px_rgba(255,77,157,0.25)] transition-colors hover:bg-neon-pink/10 disabled:cursor-wait disabled:opacity-60"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255, 77, 157, 0.55)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {MUSIC.buttonLabel}
              </motion.button>

              {useYouTube && !ytReady && (
                <p className="mt-3 text-[0.65rem] text-white/35">Carregando música…</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showStart && (
        <motion.button
          type="button"
          onClick={toggle}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-neon-pink/50 bg-magic-900/85 text-lg text-neon-pink shadow-neon backdrop-blur-md"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255, 77, 157, 0.6)" }}
          aria-label={playing ? "Pausar música" : "Tocar música"}
        >
          {playing ? "♪" : "♫"}
        </motion.button>
      )}
    </>
  );
}
