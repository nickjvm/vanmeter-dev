import ProjectCard from "@/components/ProjectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main-content">
      <header className="fixed left-0 right-0 top-0 z-50 text-slate-900 py-6 px-4">
        <div className="flex items-center justify-center sm:justify-end w-full max-w-300 mx-auto">
          <h1 className="font-bold sr-only">vanmeter.dev</h1>
          <nav>
            <ul className="flex gap-8 font-xl">
              <li>
                <a href="https://github.com/nickjvm" target="_blank" rel="noopener noreferrer" className="hover:text-white/75 transition focus:text-white/75">
                  <FaGithub className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nickvanmeter" target="_blank" rel="noopener noreferrer" className="hover:text-white/75 transition focus:text-white/75">
                  <FaLinkedin className="social-icon" />
                </a>
              </li>
              <li>
                <a href="mailto:nick@vanmeter.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white/75 transition focus:text-white/75">
                  <MdOutlineAlternateEmail className="social-icon" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="gridded">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-4 lg:grid-cols-4 md:min-h-[400px] items-center">
          <div className="col-span-4 md:col-span-3 lg:col-span-3 bg-[#A8DACD] h-full flex items-center order-2 md:order-1">
            <div className="h-full w-full gridded flex items-center ">
              <div className="relative w-full md:max-w-260 ml-auto md:px-24 px-6 text-center md:text-left pt-24 pb-8 md:pt-0 md:pb-0">
                <h2 className="text-slate-800 inline-block">
                  <span className="
                lg:text-[100px] md:text-[10vw] sm:text-[60px] text-[48px] 
                lg:leading-[75px] md:leading-[7.5vw] sm:leading-[45px] leading-[36px]
                font-display  tracking-tighter inline-block">
                    nick<br className="hidden md:block" /> vanmeter
                  </span>
                  <div className="w-full flex justify-between text-left text-slate-500
                lg:text-lg md:text-md text-sm">
                    <span>front end engineer</span>
                    <span>react developer</span>
                    <span>tech enthusiast</span>
                  </div>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 lg:col-span-1 bg-[#7A4D9F] max-h-[200px] md:max-h-full md:h-full flex items-center order-1 md:order-2 py-18 md:py-0">
            <div className="gridded h-full w-full flex items-center">

              <div className="w-full md:max-w-100 text-center">
                <Image src="/avatar.png" alt="avatar" width={400} height={400} className="relative md:-left-1/2 inline translate-y-[38%] md:translate-y-0 md:mb-0 md:w-auto max-w-full w-[200px] rounded-full md:rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#A8DACD]">
        <div className="max-w-4xl mx-auto grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 grow-1 md:-mt-6 pb-12 space-y-12">
          <div className="col-span-4 space-y-12">
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="text-center space-y-2 flex flex-col items-center justify-center mb-12">
                <p className="rounded font-bold md:text-5xl sm:text-3xl text-xl font-display bg-slate-800 text-white px-2 inline-block">seasoned front-end engineer</p>
                <p className="rounded font-bold md:text-2xl sm:text-xl text-md font-display bg-slate-800 text-white px-2 inline-block">user experience, design & development</p>
                <p className="rounded font-bold md:text-sm sm:text-xs text-xs font-display bg-slate-800 text-white px-2 inline-block">(and dogs, sourdough, trails & crochet)</p>
              </div>
              <div className="px-4 lg:px-0 space-y-4">
                <p>From SaaS products and e-commerce sites to developer tools, I&apos;m all about crafting smooth, intuitive user experiences. Working with a team of product managers/owners, designers and other engineers is where I do my best work.</p>
                <p>I&apos;m driven by the constantly evolving frontend landscape (especially seeing AI pop up in user experiences in cool and innovative ways). I enjoy tinkering with fun little projects like what you see below — they&apos;re my playgrounds for experimenting with interesting tech and creative product ideas.</p>
              </div>

            </div>
            <div className="relative w-full grid md:grid-cols-3 gap-10 px-4 lg:px-0">
              <ProjectCard
                title="reciparse"
                href="https://reciparse.com"
                source="https://github.com/nickjvm/reciparse"
                description="Recipe viewer that extracts and displays clean, clutter-free recipe content from popular food websites. It pulls in the essential details and removes distractions like intrusive ads and annoying popups."
                tags={["react", "next.js", "typescript", "tailwind", "node", "express", "vercel"]} />
              <ProjectCard
                title="sync shop"
                href="https://socket-shopping.vanmeter.dev/"
                source="https://github.com/nickjvm/socket-shopping-list"
                description="Minimalist, collaborative shopping list app inspired by the simplicity of iOS Reminders. It uses generative AI to automatically categorize items as they’re added and enables real-time updates across shared lists."
                tags={["react", "next.js", "typescript", "tailwind", "socket.io", "gen ai", "railway", "docker", "draggable"]} />
              <ProjectCard
                title="taste match"
                href="https://restaurant-matcher.vanmeter.dev/"
                source="https://github.com/nickjvm/restaurant-matcher"
                description="Tinder-style restaurant pairing game designed to answer the age-old question: “Where should we eat tonight?”"
                tags={["react", "next.js", "typescript", "tailwind", "node", "socket.io", "railway", "docker"]} />
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
