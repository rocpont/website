import { Link } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-black">
      <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="text-sm font-normal tracking-wide">
          Roc Pont
        </Link>
        <nav>
          <Link
            to="/projectes"
            className="text-sm font-normal tracking-wide hover:opacity-60 transition-opacity"
          >
            Projectes
          </Link>
        </nav>
      </header>

      <main className="flex flex-1 items-center overscroll-none justify-center px-6 md:px-10">
        {children}
      </main>

      <footer className="fixed right-0 bottom-0 left-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/personal"
          className="text-sm font-normal tracking-wide hover:opacity-60 transition-opacity"
        >
          Personal
        </Link>
        <Link
          to="/info"
          className="text-sm font-normal tracking-wide hover:opacity-60 transition-opacity"
        >
          Info
        </Link>
      </footer>
    </div>
  )
}
