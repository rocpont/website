interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-black">
      <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
        <a href="/" className="text-sm font-normal tracking-wide">
          roc pont
        </a>
        <nav>
          <a
            href="/projectes"
            className="text-sm font-normal tracking-wide hover:opacity-60 transition-opacity"
          >
            Projectes
          </a>
        </nav>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 md:px-10">
        {children}
      </main>

      <footer className="fixed right-0 bottom-0 left-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
        <a
          href="/personal"
          className="text-sm font-normal tracking-wide hover:opacity-60 transition-opacity"
        >
          Personal
        </a>
        <a
          href="/info"
          className="text-sm font-normal tracking-wide hover:opacity-60 transition-opacity"
        >
          Info
        </a>
      </footer>
    </div>
  )
}
