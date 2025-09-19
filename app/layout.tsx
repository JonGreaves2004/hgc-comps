import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hagley Golf Club Competitions',
  description: 'Official rules & procedures for HGC competitions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="container-prose py-4 flex items-center justify-between">
            <a href="/" className="font-semibold">Hagley Golf Club Competitions</a>
            <nav className="flex gap-4 text-sm">
              <a href="/competitions">Competitions</a>
              <a href="/rules">Rules</a>
              <a href="/notices">Notices</a>
              <a href="/faqs">FAQs</a>
            </nav>
          </div>
        </header>
        <main className="container-prose py-8">{children}</main>
        <footer className="border-t mt-16">
          <div className="container-prose py-6 text-sm text-slate-600">
            © {new Date().getFullYear()} Hagley Golf Club — Competitions
          </div>
        </footer>
      </body>
    </html>
  )
}
