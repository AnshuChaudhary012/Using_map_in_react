import ReportCard from "../components/ReportCard.jsx";
import { reports } from "../utility/reportData.js";

export default function Report() {
  return (
    <main className="min-h-[calc(100vh-57px)] bg-black px-3 pb-8 pt-4 text-white sm:px-5">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      ></div>
      <section className="relative mx-auto max-w-5xl">
        <h1 className="mb-5 text-center text-xl font-medium tracking-tight sm:text-2xl">
          Previous Waves
        </h1>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </section>
    </main>
  );
}
