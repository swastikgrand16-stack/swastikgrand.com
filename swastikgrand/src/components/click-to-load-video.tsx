"use client";

import Image from "next/image";
import { useState } from "react";

export function ClickToLoadVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-placeholder">
      {isPlaying ? (
        <iframe
          className="video-embed"
          src="https://www.youtube-nocookie.com/embed/BHTs56TPKFg?autoplay=1"
          title="Swastik Grand Industries factory introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          className="video-preview"
          type="button"
          aria-label="Play the Swastik Grand Industries factory introduction"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src="/images/general-engineering-workshop.jpg"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <span aria-hidden="true">▶</span>
        </button>
      )}
    </div>
  );
}
