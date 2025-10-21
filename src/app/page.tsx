import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 to-yellow-100/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-amber-900 mb-8 leading-tight">
              NOBLE PALACE
              <span className="block text-yellow-600 text-3xl sm:text-5xl mt-2">
                TÂY THĂNG LONG
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
          </div>

          {/* Introduction Section */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl text-amber-800 mb-8 leading-relaxed text-justify">
                  Noble Palace Tây Thăng Long là <span className="font-bold">đô thị thấp tầng hàng hiệu (Branded Residences) đầu tiên của Hà Nội</span>, 
                  nơi nghệ thuật chạm đến tầm cao, nằm trong bộ sưu tập nhà phố thương mại, biệt thự và dinh thự hàng hiệu Noble Palace của NOBLE Group. 
                  Dự án cũng là <span className="font-bold">thành phố thông minh tiên phong ứng dụng công nghệ AI tối đa</span> trong quản lý đô thị, 
                  sánh ngang tầm với những thành phố danh tiếng của thế giới.
                </p>
              </div>
            </div>
          </div>
          {/* Video Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                VIDEO GIỚI THIỆU DỰ ÁN
              </h2>
            </div>
            <div className="p-8">
              <div className="aspect-video w-full">
                <video 
                  controls 
                  className="w-full h-full rounded-lg"
                  poster="/1.jpg"
                >
                  <source src="/NoblePalaceTayThangLong/tvc.mp4" type="video/mp4" />
                  Trình duyệt của bạn không hỗ trợ video.
                </video>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="mt-16 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
              <img 
                src="/NoblePalaceTayThangLong/1.jpg" 
                alt="Noble Palace Tây Thăng Long" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
              <img 
                src="/NoblePalaceTayThangLong/2.jpg" 
                alt="Noble Palace Tây Thăng Long" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          {/* Project Overview Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                TỔNG QUAN DỰ ÁN NOBLE PALACE TÂY THĂNG LONG
              </h2>
            </div>
            
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                {/* Project Details Table */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-1">Tên dự án</p>
                      <p className="text-lg text-amber-900 font-bold">Noble Palace Tây Thăng Long</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-1">Tổng diện tích đất</p>
                      <p className="text-lg text-amber-900 font-bold">77 ha</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="text-sm text-amber-700 font-semibold mb-1">Mật độ xây dựng</p>
                      <p className="text-lg text-amber-900 font-bold">30%</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-yellow-200 pt-6">
                    <p className="text-sm text-amber-700 font-semibold mb-3">Vị trí dự án</p>
                    <p className="text-amber-900 leading-relaxed">
                      Mặt đường nối đường Hoàng Quốc Việt kéo dài, xã Tân Lập, huyện Đan Phượng, Hà Nội
                    </p>
                  </div>

                  <div className="border-t-2 border-yellow-200 pt-6">
                    <p className="text-sm text-amber-700 font-semibold mb-3">Chủ đầu tư</p>
                    <p className="text-amber-900 leading-relaxed">
                      Liên danh Công ty Cổ phần đầu tư DIA và Công ty Cổ phần Tư vấn Đầu tư thương mại Tân Cương
                    </p>
                  </div>

                  <div className="border-t-2 border-yellow-200 pt-6">
                    <p className="text-sm text-amber-700 font-semibold mb-3">Đơn vị phát triển dự án</p>
                    <p className="text-amber-900 leading-relaxed">
                      Công ty cổ phần kinh doanh Bất động sản Noble
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t-2 border-yellow-200 pt-6">
                    <div>
                      <p className="text-sm text-amber-700 font-semibold mb-2">Loại hình sản phẩm</p>
                      <p className="text-amber-900 font-bold">Nhà phố thương mại, Shophouse</p>
                    </div>
                    <div>
                      <p className="text-sm text-amber-700 font-semibold mb-2">Hình thức sở hữu</p>
                      <p className="text-amber-900 font-bold">Sổ đỏ lâu dài</p>
                    </div>
                  </div>

                  <div className="border-t-2 border-yellow-200 pt-6">
                    <p className="text-sm text-amber-700 font-semibold mb-2">Số lượng sản phẩm</p>
                    <p className="text-2xl font-bold text-yellow-600">2,448 sản phẩm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 District Sections */}
          <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 text-center mb-4">
              Quy Mô Dự Án: 4 Phân Khu Tinh Hoa
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Legacy */}
              <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2 text-center">Phân Khu A</h3>
                <p className="text-lg font-semibold text-yellow-600 text-center">Legacy</p>
                <p className="text-amber-700 leading-relaxed mt-4 text-center">
                  Khu vực tinh tế mang đậm dấu ấn kiến trúc cổ điển, kết hợp hài hòa với hiện đại
                </p>
              </div>

              {/* Century */}
              <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">B</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2 text-center">Phân Khu B</h3>
                <p className="text-lg font-semibold text-yellow-600 text-center">Century</p>
                <p className="text-amber-700 leading-relaxed mt-4 text-center">
                  Biểu tượng của sự phát triển bền vững qua các thế kỷ
                </p>
              </div>

              {/* Harmony */}
              <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">C</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2 text-center">Phân Khu C</h3>
                <p className="text-lg font-semibold text-yellow-600 text-center">Harmony</p>
                <p className="text-amber-700 leading-relaxed mt-4 text-center">
                  Sự hòa hợp giữa con người, thiên nhiên và công nghệ
                </p>
              </div>

              {/* Victory */}
              <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">D</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-2 text-center">Phân Khu D</h3>
                <p className="text-lg font-semibold text-yellow-600 text-center">Victory</p>
                <p className="text-amber-700 leading-relaxed mt-4 text-center">
                  Chiến thắng trong mỗi khía cạnh: thiết kế, vị trí, và đầu tư
                </p>
              </div>
            </div>
          </div>
        {/* Image Section */}
        <div className="mt-16 space-y-8">
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
          <img 
          src="/NoblePalaceTayThangLong/3.jpg" 
          alt="Noble Palace Tây Thăng Long" 
          className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
          <img 
          src="/NoblePalaceTayThangLong/4.jpg" 
          alt="Noble Palace Tây Thăng Long" 
          className="w-full h-auto object-cover"
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
