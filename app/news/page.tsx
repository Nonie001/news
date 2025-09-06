export default function NewsListPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">ข่าวล่าสุด</h1>
        <p className="text-gray-600">ติดตามข่าวสารและความเป็นไปในชุมชนมุسลิมและสถานการณ์ปาเลสไตน์</p>
      </div>

      <div className="grid gap-8">
        {[1,2,3,4,5].map(i => (
          <article key={i} className="border-b border-gray-200 pb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-semibold">ภาพข่าว {i}</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                    ข่าวศาสนา
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
                  หัวข้อข่าวที่ {i}: สถานการณ์สำคัญในชุมชนมุสลิมและการพัฒนาล่าสุด
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  รายละเอียดข่าวสารที่สำคัญ การวิเคราะห์เชิงลึก และผลกระทบต่อชุมชนมุสลิม 
                  พร้อมข้อมูลที่น่าเชื่อถือจากแหล่งข่าวที่เชื่อถือได้...
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <time>6 กันยายน 2568</time>
                  <span className="mx-2">•</span>
                  <span>5 นาทีในการอ่าน</span>
                  <span className="mx-2">•</span>
                  <span>โดย บรรณาธิการ</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
          โหลดข่าวเพิ่มเติม
        </button>
      </div>
    </main>
  );
}
