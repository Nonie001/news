export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">เกี่ยวกับเรา</h1>
        
        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-4">พันธกิจของเรา</h2>
          <p className="text-gray-700 leading-relaxed">
            เราเป็นแหล่งข่าวสารและบทความศาสนาที่เชื่อถือได้ มุ่งเน้นการนำเสนอข่าวสารเกี่ยวกับอิสลาม 
            สถานการณ์ปาเลสไตน์ และความรู้ทางศาสนาที่เป็นประโยชน์ต่อชุมชนมุสลิม
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">วิสัยทัศน์</h3>
            <p className="text-gray-700">
              เป็นสื่อกลางที่เชื่อมโยงชุมชนมุสลิมทั่วโลก ผ่านการนำเสนอข่าวสารและความรู้
              ที่ถูกต้องตามหลักการของอิสลาม
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ค่านิยม</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• ความถูกต้องและเชื่อถือได้</li>
              <li>• ความเป็นกลางและยุติธรรม</li>
              <li>• การให้ความรู้ที่เป็นประโยชน์</li>
              <li>• การเคารพในความแตกต่าง</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ติดต่อเรา</h3>
          <div className="text-gray-700">
            <p className="mb-2">อีเมล: info@religiousnews.com</p>
            <p className="mb-2">โทรศัพท์: 02-xxx-xxxx</p>
            <p>ที่อยู่: กรุงเทพมหานคร ประเทศไทย</p>
          </div>
        </div>
      </div>
    </main>
  );
}
