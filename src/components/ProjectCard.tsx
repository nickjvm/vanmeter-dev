"use client";

import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  href?: string;
  source: string;
  description: string;
  tags: string[];
};
export default function ProjectCard({
  title,
  href,
  source,
  description,
  tags,
}: Props) {
  const [online, setOnline] = useState<boolean | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const retryCount = useRef<number>(0);
  useEffect(() => {
    if (!href) {
      return;
    }
    const checkStatus = () => {
      fetch("/api/appStatus?url=" + href).then((r) => {
        if (r.ok) {
          setOnline(true);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        } else {
          retryCount.current += 1;
          if (retryCount.current < 5) {
            intervalRef.current = setInterval(() => {
              checkStatus();
            }, 5000);
          }
        }
      });
    };
    checkStatus();
  }, [href]);

  return (
    <div className="text-slate-900 space-y-4 h-full">
      <div className="space-y-2">
        <h2 className="text-xl font-display">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex flex-wrap gap-x-2 text-sm text-slate-500">
        {tags.map((tag, index) => (
          <span className="whitespace-nowrap" key={index}>
            {tag}
            {index < tags.length - 1 && ", "}
          </span>
        ))}
      </div>
      <div className="space-y-2 items-center mt-auto">
        {href && online !== false && (
          <a
            href={online ? href : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10.5 relative rounded flex-1/2 flex items-center justify-center gap-2 p-2 bg-slate-800 text-white group after:content-[''] after:bg-white/10 after:absolute after:bottom-0 after:left-0 after:top-0 after:block after:w-[0px] hover:after:w-full after:mix-blend-screen after:transition-[width] after:duration-300"
          >
            {online !== true ? (
              <>
                <AiOutlineLoading3Quarters className="w-6 h-6 animate-spin" />
                <span className="sr-only">loading</span>
              </>
            ) : (
              <>
                <FaExternalLinkSquareAlt className="w-4 h-4" />
                Check it out
              </>
            )}
          </a>
        )}
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10.5 relative rounded flex items-center justify-center gap-2 flex-1/2 p-2 border border-slate-800 text-slate-800 group after:content-[''] after:bg-slate-800 after:absolute after:bottom-0 after:left-0 after:top-0 after:block after:w-[0px] after:mix-blend-soft-light hover:after:w-full after:transition-[width] after:duration-300"
        >
          <FaGithub className="w-4 h-4" />
          Github repo
        </a>
      </div>
    </div>
  );
}
