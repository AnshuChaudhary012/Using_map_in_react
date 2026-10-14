import PlatformIcon from "../components/common/PlatformIcon.jsx";
import { platforms } from "../utility/platformData.js";

export default function About() {
  return (
    <main className="min-h-[calc(100vh-57px)] bg-[#1c1c1c] px-4 py-8 text-white sm:px-8">
      <section className="mx-auto max-w-328 w-full px-4">
        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[8px] leading-none text-white/75">
          Listen On
        </span>
        <div className="mb-5 mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-2xl font-medium leading-[1.05] tracking-tight sm:text-3xl">
            Find the Podcast on
            <br />
            Your Favorite Platform
          </h1>
          <p className="max-w-sm text-[9px] leading-relaxed text-white/60">
            Listen to stories from visionary leaders and builders — from Spotify
            and Apple Podcasts to YouTube and Amazon Music. Choose a platform
            below to start listening.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              className={`flex rounded-2xl max-w-76 w-full min-h-19 flex-col items-center justify-center gap-1.5 py-7.5 border text-[10px] transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 motion-reduce:transition-none 
                ${
                platform.featured
                  ? "border-transparent bg-linear-to-br from-[#67259a] to-[#352044] shadow-[inset_0_0_30px_rgba(194,80,255,0.28)]"
                  : "border-white/5 bg-[#242424]"
              }
              `}
            >
              <PlatformIcon name={platform.icon} />
              {platform.name}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
