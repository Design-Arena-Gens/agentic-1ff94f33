import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EHR Demo',
  description: 'Electronic Health Record demo with RBAC',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen">
          <aside className="hidden md:block w-64 bg-white border-r border-slate-200">
            <div className="p-4 text-xl font-semibold text-brand-700">EHR Demo</div>
            <nav className="p-2 space-y-1">
              <Link className="block px-3 py-2 rounded hover:bg-slate-50" href="/">Home</Link>
              <Link className="block px-3 py-2 rounded hover:bg-slate-50" href="/login">Login</Link>
              <Link className="block px-3 py-2 rounded hover:bg-slate-50" href="/signup">Signup</Link>
              <Link className="block px-3 py-2 rounded hover:bg-slate-50" href="/dashboard">Dashboard</Link>
            </nav>
          </aside>
          <main className="flex-1 p-4 md:p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
