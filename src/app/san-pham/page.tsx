import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Products() {
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
              Nhà Phố Thương Mại
              <span className="block text-yellow-600 text-3xl sm:text-4xl mt-2">
                SHOPHOUSE
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6 text-center">
                  Thiết Kế Kiến Trúc Châu Âu Sang Trọng
                </h2>
                
                <div className="space-y-6 text-amber-800 leading-relaxed text-lg">
                  <p>
                    Shophouse Noble Palace Tây Thăng Long được thiết kế <span className="font-bold">4 – 5 tầng với kiến trúc Châu Âu sang trọng</span>, 
                    mặt tiền thoáng rộng, tối ưu hoá 100% phần diện tích phục vụ giao thông (thang máy, thang bộ) để ưu tiên tuyệt đối cho không gian kinh doanh 
                    và có thể an cư.
                  </p>
                  
                  <p>
                    Với diện tích sử dụng đa dạng (<span className="font-bold">từ 150m² đến 600m²</span>), các căn shophouse tại Noble Palace Tây Thăng Long 
                    vừa là chốn an cư thanh bình, tiện nghi; vừa là <span className="font-bold">địa chỉ kinh doanh sinh lời bền vững</span> của gia chủ, 
                    với khả năng vượt trội về dòng tiền, tính thanh khoản hấp dẫn, tạo nên hấp lực mạnh mẽ với thị trường bất động sản thấp tầng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Shophouse Images */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 text-center mb-8">
              Hình Ảnh Tổng Thể Dự Án
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-200 hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src="/NoblePalaceTayThangLong/overall.jpg" 
                  alt="Tổng thể shophouse - Hình 1" 
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-200 hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src="/NoblePalaceTayThangLong/overall2.jpg" 
                  alt="Tổng thể shophouse - Hình 2" 
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-200 hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src="/NoblePalaceTayThangLong/overall3.jpg" 
                  alt="Tổng thể shophouse - Hình 3" 
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Two Types of Shophouses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Grand Shophouse */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-yellow-400 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-yellow-600 px-8 py-8">
                <h3 className="text-3xl font-bold text-white text-center">
                  Grand Shophouse
                </h3>
              </div>
              
              <div className="px-8 py-10">
                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm text-amber-700 font-semibold mb-1">Chiều Cao</p>
                    <p className="text-2xl font-bold text-amber-900">5 Tầng</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm text-amber-700 font-semibold mb-1">Số Lượng Căn</p>
                    <p className="text-2xl font-bold text-amber-900">952 Căn</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm text-amber-700 font-semibold mb-2">Tổng Diện Tích Sàn</p>
                    <p className="text-lg font-bold text-yellow-600">211m² – 562m²/căn</p>
                    <p className="text-sm text-amber-700 mt-2">Linh hoạt cho cả sử dụng riêng và kinh doanh</p>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4 mt-6 border border-amber-200">
                    <p className="text-amber-900 font-semibold text-center">
                      Lý tưởng cho các chủ kinh doanh mong muốn không gian rộng và nhiều tầng sử dụng
                    </p>
                  </div>
                </div>

                <Link 
                  href="/san-pham/grand-shophouse-5-tang"
                  className="mt-8 block w-full bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                >
                  Xem Chi Tiết
                </Link>
              </div>
            </div>

            {/* Elegant Shophouse */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-yellow-400 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-yellow-600 px-8 py-8">
                <h3 className="text-3xl font-bold text-white text-center">
                  Elegant Shophouse
                </h3>
              </div>
              
              <div className="px-8 py-10">
                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm text-amber-700 font-semibold mb-1">Chiều Cao</p>
                    <p className="text-2xl font-bold text-amber-900">4 Tầng</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm text-amber-700 font-semibold mb-1">Số Lượng Căn</p>
                    <p className="text-2xl font-bold text-amber-900">1,496 Căn</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm text-amber-700 font-semibold mb-2">Tổng Diện Tích Sàn</p>
                    <p className="text-lg font-bold text-yellow-600">145m² – 372m²/căn</p>
                    <p className="text-sm text-amber-700 mt-2">Nhỏ gọn, hiệu quả kinh tế cao</p>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4 mt-6 border border-amber-200">
                    <p className="text-amber-900 font-semibold text-center">
                      Lý tưởng cho các chủ kinh doanh vừa và nhỏ, tối ưu chi phí đầu tư
                    </p>
                  </div>
                </div>

                <Link 
                  href="/san-pham/elegant-shophouse"
                  className="mt-8 block w-full bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                >
                  Xem Chi Tiết
                </Link>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6">
                Quan Tâm Đến Sản Phẩm Shophouse?
              </h2>
              <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
                Liên hệ với chúng tôi để nhận thông tin chi tiết, giá cả cạnh tranh, và hỗ trợ tư vấn đầu tư
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
