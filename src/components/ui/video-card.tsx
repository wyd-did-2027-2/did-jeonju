"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoCardProps {
  videoId: string;
  title: string;
  date: string;
}

export default function VideoCard({ videoId, title, date }: VideoCardProps) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <li className="flex-1 flex flex-col fadeInUp">
      <div className="aspect-video overflow-hidden relative group">
        {!isIframeLoaded ? (
          <button
            type="button"
            onClick={() => setIsIframeLoaded(true)}
            className="w-full h-full relative cursor-pointer"
          >
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
              <div className="bg-red-600 rounded-full p-4 transition-transform group-hover:scale-110">
                <Play className="size-8 text-white fill-white" />
              </div>
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <div className="flex-1 flex flex-col pt-10 gap-y-15 text-gray-900 max-sm:gap-y-8">
        <Link
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="heading01B max-sm:heading04B hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="body01M max-md:heading04M">{date}</p>
      </div>
    </li>
  );
}
