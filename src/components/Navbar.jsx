import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex justify-center gap-5 border-b border-slate-200 bg-white p-4 text-left dark:border-slate-800 dark:bg-slate-950"
    >
      <Link
        className="text-slate-900 hover:text-violet-600 dark:text-slate-100"
        to="/"
      >
        Hub
      </Link>
      <Link
        className="text-slate-900 hover:text-violet-600 dark:text-slate-100"
        to="/about"
      >
        Podcast
      </Link>
      <Link
        className="text-slate-900 hover:text-violet-600 dark:text-slate-100"
        to="/report"
      >
        Monthly Report
      </Link>
      
    </nav>
  )
}
