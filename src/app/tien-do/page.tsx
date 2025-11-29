import Navbar from '@/components/Navbar';

export default function TienDo() {
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
              Tiến Độ Xây Dựng
              <span className="block text-yellow-600 text-3xl sm:text-4xl mt-2">
                NOBLE PALACE TÂY THĂNG LONG
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
          </div>

            {/* Video Section */}
            <div className="mt-16 bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
              VIDEO CẬP NHẬT TIẾN ĐỘ XÂY DỰNG
              </h2>
            </div>
            <div className="p-8">
              <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/VTlOYNVLVOU?si=9KW7QW3acu-PTDmv" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
              </div>
            </div>
            </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6">
                Theo Dõi Tiến Độ Dự Án
              </h2>
              <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
                Cập nhật thông tin tiến độ xây dựng mới nhất và những hình ảnh thực tế từ công trường
              </p>
              <a 
                href="tel:0984704988"
                className="inline-block bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Liên Hệ Ngay: <span className="inline">0984 704 988</span>
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
