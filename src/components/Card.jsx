import Icon from './common/Svgs.jsx'

export default function Card({ card }) {
  return (
    <article
      className={`group max-w-103.25 w-full relative flex min-h-45 flex-col items-start overflow-hidden rounded-xl border p-3.5 text-left transition duration-200 ease-out hover:-translate-y-0.5 hover:border-white/20 motion-reduce:transition-none `}
    >
      <div
        className={`mb-3 flex  items-center justify-center rounded-lg transition duration-200 group-hover:scale-105 motion-reduce:transition-none [&_svg]:h-7 [&_svg]:w-7 `}
      >
        <Icon className="size-20" name={card.icon} />
      </div>
      <h2 className="mb-1.5 text-base font-medium leading-snug text-[#f5f5f5]">
        {card.heading}
      </h2>
      <p className="mb-3 text-[10px] leading-[1.45] text-[#aaa]">
        {card.paragraph}
      </p>
      <span
        className={`mt-auto block w-full cursor-pointer rounded-full border px-2.5 py-1.75 text-center text-[10px] leading-tight text-[#f5f5f5] transition duration-200 ease-out group-hover:-translate-y-px group-hover:border-violet-400 group-hover:bg-linear-to-r group-hover:from-purple-800 group-hover:to-purple-500 group-hover:shadow-[0_0_14px_rgba(168,85,247,0.28)] motion-reduce:transition-none `}
      >
        {card.buttonText}
      </span>
    </article>
  );
}
