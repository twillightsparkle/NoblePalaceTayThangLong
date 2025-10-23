import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function ViTri() {
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
              Vị Trí Kết Nối Giao Thông
              <span className="block text-yellow-600 text-3xl sm:text-4xl mt-2">
                NOBLE PALACE TÂY THĂNG LONG
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
          </div>

          {/* Overview Image */}
          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300 mb-16">
            <Image 
              src="/18.jpg" 
              alt="Vị trí kết nối giao thông"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Introduction Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6 text-center">
                  Vị Trí Đắc Địa - Giao Thông Hạ Tầng Hiếm Có
                </h2>
                
                <div className="space-y-4 text-amber-800 leading-relaxed text-lg">
                  <p>
                    Noble Palace Tây Thăng Long nằm tại tọa độ <span className="font-bold">Phượng Hoàng</span>, 
                    <span className="font-bold"> vị trí đắc địa với lợi thế hiếm có về giao thông hạ tầng</span>:
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Traffic Advantages */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Lợi Thế Giao Thông Hạ Tầng
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
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Trục Thương Mại Xuyên Tâm</h3>
                      <p className="text-amber-700">Đắt giá là đường nối Hoàng Quốc Việt kéo dài, kết nối trực tiếp với các tuyến giao thông chính</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Kết Nối Huyết Mạch Giao Thông</h3>
                      <p className="text-amber-700">Nằm giữa và kết nối trực tiếp với các tuyến giao thông huyết mạch: Đường vành đai 4 và vành đai 3.5 giao cắt đại lộ Thăng Long và Quốc lộ 32</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Đại Lộ Tây Thăng Long - 10 Làn Xe</h3>
                      <p className="text-amber-700">Nằm sát Đại lộ Tây Thăng Long gồm 10 làn xe. Sau khi hoàn thiện, chỉ mất khoảng hơn 10 phút để di chuyển tới đường Võ Chí Công - Hồ Tây</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Kết Nối Công Viên Xanh</h3>
                      <p className="text-amber-700">Nằm cạnh sát công viên chuyên đề lớn nhất Hà Nội với diện tích gần 90ha và gần kề công viên mở đa chức năng rộng hơn 100ha</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 text-center mb-8">
              Bản Đồ Vị Trí Dự Án
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
              <Image 
                src="/19.jpg" 
                alt="Bản đồ vị trí Noble Palace Tây Thăng Long"
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
              />
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