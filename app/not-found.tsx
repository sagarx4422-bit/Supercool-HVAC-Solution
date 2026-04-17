import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-900">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-lg text-slate-600 mb-8">Could not find requested resource</p>
      <Link href="/" className="bg-[#004494] hover:bg-[#003377] text-white font-medium px-6 py-3 rounded-lg transition-all">
        Return Home
      </Link>
    </div>
  );
}
