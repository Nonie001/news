export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">ติดต่อเรา</h1>
        <p className="text-gray-600">เรายินดีรับฟังความคิดเห็นและข้อเสนอแนะจากท่าน</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">ส่งข้อความถึงเรา</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ชื่อ-นามสกุล
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="กรุณากรอกชื่อของท่าน"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                อีเมล
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                หัวข้อ
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="หัวข้อที่ต้องการติดต่อ"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ข้อความ
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="รายละเอียดที่ต้องการสอบถามหรือแสดงความคิดเห็น"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              ส่งข้อความ
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">ช่องทางการติดต่อ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">ที่อยู่</h3>
              <p className="text-gray-700">
                123 ถนนตัวอย่าง<br />
                เขตตัวอย่าง กรุงเทพมหานคร 10100<br />
                ประเทศไทย
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">โทรศัพท์</h3>
              <p className="text-gray-700">02-xxx-xxxx</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">อีเมล</h3>
              <p className="text-gray-700">info@religiousnews.com</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">เวลาทำการ</h3>
              <p className="text-gray-700">
                จันทร์ - ศุกร์: 09:00 - 18:00 น.<br />
                เสาร์ - อาทิตย์: 09:00 - 17:00 น.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">หมายเหตุ</h3>
            <p className="text-green-700 text-sm">
              เราจะตอบกลับข้อความของท่านภายใน 24 ชั่วโมง 
              และให้ความสำคัญกับทุกความคิดเห็นที่ได้รับ
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
