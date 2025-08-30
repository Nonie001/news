import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white/95 shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-2">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.jpg" alt="Logo" width={120} height={120} className="rounded shadow cursor-pointer" />
          </Link>
        </div>
        <nav className="flex flex-wrap gap-2 sm:gap-5 items-center mt-2 sm:mt-0">
          <Link href="/" className="text-blue-900 font-semibold hover:text-blue-600 transition">หน้าหลัก</Link>
          <Link href="/news" className="text-blue-900 font-semibold hover:text-blue-600 transition">ข่าวทั้งหมด</Link>
          <Link href="/categories" className="text-blue-900 font-semibold hover:text-blue-600 transition">หมวดหมู่</Link>
          <Link href="/authors" className="text-blue-900 font-semibold hover:text-blue-600 transition">ผู้เขียน</Link>
          <Link href="/about" className="text-blue-900 font-semibold hover:text-blue-600 transition">เกี่ยวกับเรา</Link>
          <Link href="/contact" className="text-blue-900 font-semibold hover:text-blue-600 transition">ติดต่อ</Link>
          <Link href="/search" className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition">ค้นหา</Link>
        </nav>
      </div>
    </header>
  );
}
