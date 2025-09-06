import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/logo.jpg" 
                alt="ข่าวศาสนาและปาเลสไตน์" 
                width={60} 
                height={60} 
                className="rounded-sm" 
              />
              <div>
                <h3 className="text-xl font-bold">ข่าวศาสนาและปาเลสไตน์</h3>
                <p className="text-sm text-gray-400">แหล่งข่าวสารที่เชื่อถือได้</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              แหล่งข่าวสารและบทความศาสนาที่เชื่อถือได้ เพื่อเสริมสร้างความรู้และความเข้าใจ
              เกี่ยวกับอิสลาม สถานการณ์ปาเลสไตน์ และข่าวสารที่สำคัญต่อชุมชนมุสลิม
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">หมวดหมู่</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/religious-news" className="text-gray-300 hover:text-green-400 transition-colors">
                  ข่าวศาสนา
                </Link>
              </li>
              <li>
                <Link href="/category/palestine-news" className="text-gray-300 hover:text-green-400 transition-colors">
                  ข่าวปาเลสไตน์
                </Link>
              </li>
              <li>
                <Link href="/category/religious-articles" className="text-gray-300 hover:text-green-400 transition-colors">
                  บทความศาสนา
                </Link>
              </li>
              <li>
                <Link href="/category/islam-society" className="text-gray-300 hover:text-green-400 transition-colors">
                  อิสลามและสังคม
                </Link>
              </li>
              <li>
                <Link href="/category/quran-hadith" className="text-gray-300 hover:text-green-400 transition-colors">
                  อัลกุรอานและฮะดีษ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors">
                  แบบฟอร์มติดต่อ
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-green-400 transition-colors">
                  ค้นหาข่าว
                </Link>
              </li>
              <li>
                <Link href="/archive/2025/09" className="hover:text-green-400 transition-colors">
                  คลังข่าว
                </Link>
              </li>
              <li className="text-sm text-gray-400 mt-4">
                อีเมล: info@religiousnews.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2568 ข่าวศาสนาและปาเลสไตน์ | เว็บไซต์ข่าวสารเพื่อชุมชนมุสลิม
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              ข้อกำหนดการใช้งาน
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
