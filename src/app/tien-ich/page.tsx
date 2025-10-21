import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Amenities() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-white">
      <Navbar />
      
      <main className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-yellow-100/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-8 leading-tight">
              Tiện ích tại dự án
              <span className="block text-yellow-600 text-3xl sm:text-4xl mt-2">
                NOBLE PALACE TÂY THĂNG LONG
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6 text-center">
                  Quản Lý Vận Hành Quốc Tế Best Western Hotels & Resorts
                </h2>
                
                <div className="space-y-6 text-amber-800 leading-relaxed text-lg">
                  <p>
                    Noble Palace Tây Thăng Long là <span className="font-bold">khu đô thị thấp tầng đầu tiên tại Hà Nội</span> được quản lý và vận hành bởi 
                    <span className="font-bold"> Đơn vị vận hành thương hiệu Quốc tế là Best Western Hotels & Resorts (BWH)</span> - đơn vị quản lý vận hành 
                    Khách sạn đẳng cấp Quốc tế với lịch sử hơn 70 năm hoạt động trong ngành dịch vụ Khách sạn và hiện diện tại gần 100 quốc gia và vùng lãnh thổ, 
                    danh tiếng toàn cầu, chắc chắn sẽ thoả mãn được mọi nhu cầu khắt khe nhất về tận hưởng tinh hoa, mang tới những trải nghiệm đầy đủ từ nghỉ dưỡng, 
                    giải trí, ẩm thực… theo mô hình <span className="font-bold">&quot;all in one&quot;</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Image */}
          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300 mb-16">
            <Image 
              src="/NoblePalaceTayThangLong/9.png" 
              alt="Tiện ích tại dự án"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Main Amenities List */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Các Tiện Ích Nổi Bật
              </h2>
            </div>
            
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Tổ hợp 4 công viên</h3>
                      <p className="text-amber-700">Với quy mô lên tới 200ha</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Trục đại lộ thương mại</h3>
                      <p className="text-amber-700">Cùng những tuyến phố mua sắm thời thượng</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Không gian giải trí và nghệ thuật</h3>
                      <p className="text-amber-700">Đỉnh cao với những hoạt động văn hoá sôi động</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Trường học quốc tế Regal Academy</h3>
                      <p className="text-amber-700">Giáo dục chất lượng cao cho các em nhỏ</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Công viên hoàng gia Imperial Garden</h3>
                      <p className="text-amber-700">Khu vườn mang đậm dấu ấn hoàng gia châu Âu</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Tổ hợp bể bơi bốn mùa Infinity Oasis</h3>
                      <p className="text-amber-700">Ốc đảo nhiệt đới giữa lòng thành phố</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Bệnh viện quốc tế Noble Hospital</h3>
                      <p className="text-amber-700">Tuyệt phẩm y tế nghỉ dưỡng chuẩn 5 sao</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Công nghệ AI tiên phong</h3>
                      <p className="text-amber-700">Được tích hợp đồng bộ trong toàn khu đô thị</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Gallery */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 text-center mb-8">
              Hình Ảnh Tiện Ích
            </h2>
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src="/NoblePalaceTayThangLong/10.jpg" 
                  alt="Tiện ích - Hình 1"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src="/NoblePalaceTayThangLong/11.jpg" 
                  alt="Tiện ích - Hình 2"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src="/NoblePalaceTayThangLong/12.jpg" 
                  alt="Tiện ích - Hình 3"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src="/NoblePalaceTayThangLong/13.jpg" 
                  alt="Tiện ích - Hình 4"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src="/NoblePalaceTayThangLong/14.jpg" 
                  alt="Tiện ích - Hình 5"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src="/NoblePalaceTayThangLong/15.jpg" 
                  alt="Tiện ích - Hình 6"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src="/NoblePalaceTayThangLong/16.jpg" 
                  alt="Tiện ích - Hình 7"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src="/NoblePalaceTayThangLong/17.jpg" 
                  alt="Tiện ích - Hình 8" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6">
                Khám Phá Tiện Ích Tuyệt Vời
              </h2>
              <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
                Trải nghiệm cuộc sống đẳng cấp tại Noble Palace Tây Thăng Long với những tiện ích hiện đại và toàn diện
              </p>
              <a 
                href="tel:0984704988"
                className="inline-block bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Liên Hệ Ngay: 0984 704 988
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-gradient-to-r from-amber-900 to-yellow-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-yellow-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-yellow-200 text-lg">
                Liên hệ ☏: <a href="tel:0984704988" className="text-yellow-100 hover:text-white transition-colors duration-300">0984 704 988</a>
              </p>
            </div>
            <div className="text-center">
              <p className="text-yellow-100 text-lg">
                © 2025 Noble Palace Tay Thang Long. All rights reserved.
              </p>
              <p className="text-yellow-200 mt-2">
                Dự án bất động sản cao cấp tại Tây Thủ Đô
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
