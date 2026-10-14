import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex-1 px-6 py-12 text-center text-slate-700 dark:text-slate-200 h-screen bg-black/70">
      <h1 className="mb-6 text-4xl font-medium text-slate-950 dark:text-white">
        Page not found 
      </h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link className="text-violet-600 hover:text-violet-500" to="/">
        Return home
      </Link>
    </section>
  )
}
