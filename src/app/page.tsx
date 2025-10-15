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
                TAY THANG LONG
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-amber-800 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              TUYỆT PHẨM NHÀ PHỐ CHÂU ÂU GIỮA LÒNG ĐÔ THỊ PHỒN HOA
            </p>
          </div>

          {/* Project Overview Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Tổng quan dự án
              </h2>
            </div>
            
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-8 text-center leading-tight">
                  NOBLE PALACE TAY THANG LONG
                  <span className="block text-yellow-600 text-xl sm:text-2xl mt-2">
                    TUYỆT PHẨM NHÀ PHỐ CHÂU ÂU GIỮA LÒNG ĐÔ THỊ PHỒN HOA
                  </span>
                </h3>
                
                <div className="prose prose-lg max-w-none text-amber-800 leading-relaxed">
                  <p className="text-lg sm:text-xl mb-6 text-center italic">
                    Sở hữu vị trí trung tâm khu Tây thủ đô, kết nối trực tiếp với đường nối Hoàng Quốc Việt kéo dài, 
                    giữa Vành đai 3.5 và Vành đai 4, Noble Palace Tay Thang Long mang đến dòng sản phẩm nhà phố đặc quyền, 
                    mỗi căn là một &ldquo;di sản sống&rdquo;, vừa để ở, vừa là tài sản thương mại sinh lời bền vững.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Vị Trí Đắc Địa</h3>
              <p className="text-amber-700 leading-relaxed">
                Trung tâm Tây thủ đô, kết nối thuận tiện với các trục đường chính
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Thiết Kế Châu Âu</h3>
              <p className="text-amber-700 leading-relaxed">
                Kiến trúc đẳng cấp Châu Âu, sang trọng và tinh tế
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-yellow-200 p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Đầu Tư Sinh Lời</h3>
              <p className="text-amber-700 leading-relaxed">
                Tài sản thương mại sinh lời bền vững, giá trị tăng trưởng cao
              </p>
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
