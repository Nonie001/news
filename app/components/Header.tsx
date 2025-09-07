import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center space-x-4">
            <time>วันศุกร์ที่ 6 กันยายน 2568</time>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">กรุงเทพมหานคร, ประเทศไทย</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/search" className="hover:text-gray-900 transition-colors">ค้นหา</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-gray-900 transition-colors">ติดต่อ</Link>
            <div className="flex items-center space-x-2 ml-4">
              <span className="text-gray-500">ติดตาม:</span>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.jpg" 
              alt="ข่าวออนไลน์" 
              width={80} 
              height={80} 
              className="rounded-sm" 
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              หน้าหลัก
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              ข่าวล่าสุด
            </Link>
            <Link href="/category/religious-news" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              ข่าวศาสนา
            </Link>
            <Link href="/category/palestine-news" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              ข่าวปาเลสไตน์
            </Link>
            <Link href="/category/religious-articles" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              บทความศาสนา
            </Link>
            <Link href="/video" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              วิดีโอ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Secondary Navigation - Simplified */}
      <div className="border-t border-gray-100 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 text-sm text-gray-600">
          <Link href="/category/islam-society" className="hover:text-gray-900 transition-colors">
            อิสลามและสังคม
          </Link>
          <Link href="/category/quran-hadith" className="hover:text-gray-900 transition-colors">
            อัลกุรอานและฮะดีษ
          </Link>
          <Link href="/category/islamic-history" className="hover:text-gray-900 transition-colors">
            ประวัติศาสตร์อิสลาม
          </Link>
          <Link href="/archive/2025/09" className="hover:text-gray-900 transition-colors">
            คลังข่าว
          </Link>
        </div>
      </div>
    </header>
  );
}