import ReportIcon from './common/ReportIcon.jsx'

export default function ReportCard({ report }) {
  return (
    <article
      className={`rounded-xl border p-1.5 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 motion-reduce:transition-none `}
    >
      <div className="flex gap-2">
        <div className="flex min-h-28 w-[42%] shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#101010]">
          <ReportIcon name={report.icon} />
        </div>

        <div className="min-w-0 flex-1 py-1">
          <div className="mb-2 flex flex-wrap gap-1 text-[8px] text-white/80">
            <span className="rounded-full border border-white/10 bg-black/50 px-1.5 py-0.5">
              ▣ {report.date}
            </span>
            <span className="rounded-full border border-white/10 bg-black/50 px-1.5 py-0.5">
              ◷ 3 min read
            </span>
          </div>
          <h2 className="mb-2 text-[11px] font-medium leading-snug text-white">
            {report.title}
          </h2>
          <ul className="space-y-1 text-[8px] leading-snug text-white/50">
            {report.points.map((point) => (
              <li key={point} className="flex gap-1">
                <span aria-hidden="true">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-1.5 min-h-10 rounded-lg border border-white/5 bg-white/3 px-2 py-1.5 text-center text-[9px] leading-snug text-white/90">
        {report.excerpt}
      </p>

      <button
        className={`mt-1.5 w-full rounded-full border px-3 py-1.5 text-[9px] text-white transition duration-200 hover:border-purple-400 hover:bg-purple-600/30 focus-visible:outline-2 focus-visible:outline-purple-400 motion-reduce:transition-none ${
          report.featured
            ? 'border-transparent bg-linear-to-r from-purple-700 to-purple-400'
            : 'border-white/15 bg-transparent'
        }`}
        type="button"
      >
        Read Report
      </button>
    </article>
  )
}
