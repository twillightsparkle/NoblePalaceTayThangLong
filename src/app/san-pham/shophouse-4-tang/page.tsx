import Navbar from '@/components/Navbar';

export default function Shophouse4Tang() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            🌟 SHOPHOUSE 4 TẦNG 🌟
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-4">
            1 TÀI SẢN, 3 GIÁ TRỊ
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-amber-700 leading-relaxed mb-6">
              💎 Tại Noble Palace Tay Thang Long, <strong>Shophouse 4 tầng</strong> mang đến một giải pháp đầu tư linh hoạt và thông minh - nơi mỗi tầng là một giá trị, mỗi không gian là một cơ hội sinh lời.
            </p>
          </div>
        </div>

        {/* Công năng từng tầng */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">Công Năng Từng Tầng</h2>
          <div className="space-y-6">
            <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 1: Không gian kinh doanh</h3>
                <p className="text-amber-700">Mặt tiền thương mại vàng, thuận tiện, dễ khai thác dòng tiền</p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 2: Văn phòng hoặc kho</h3>
                <p className="text-amber-700">Đáp ứng nhu cầu làm việc, vận hành</p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 3: Không gian sinh hoạt riêng tư</h3>
                <p className="text-amber-700">Tiện nghi, ấm cúng cho gia đình</p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 4: Sân vườn thư giãn</h3>
                <p className="text-amber-700">Nơi cân bằng và tận hưởng cuộc sống cho gia chủ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Thông số chi tiết */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">📌 Thông Số Chi Tiết</h2>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900 mb-2">249m²</div>
                <p className="text-amber-700">Tổng diện tích sàn</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900 mb-2">75m²</div>
                <p className="text-amber-700">Diện tích nền đất</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900 mb-2">17,7 tỷ</div>
                <p className="text-amber-700">Giá đầu tư vừa tầm</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-amber-700 text-lg">
                Lựa chọn đầu tư phù hợp cho cả khách hàng tìm kiếm nơi an cư hay nhà đầu tư muốn cho thuê, tích lũy tài sản.
              </p>
            </div>
          </div>
        </div>

        {/* Ba giá trị cốt lõi */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">🏡 1 Sản Phẩm - 3 Giá Trị</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">AN CƯ</h3>
              <p className="text-amber-700">Không gian sống tiện nghi, ấm cúng cho gia đình</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">KINH DOANH</h3>
              <p className="text-amber-700">Mặt tiền thương mại thuận lợi khai thác</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">SINH LỜI</h3>
              <p className="text-amber-700">Tích lũy tài sản, đầu tư bền vững</p>
            </div>
          </div>
          
          <div className="mt-8 text-center bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl">
            <p className="text-lg text-amber-800 font-semibold">
              Shophouse 4 tầng là lời khẳng định cho chuẩn sống hiện đại và chiến lược đầu tư bền vững.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-amber-900 to-yellow-800 rounded-2xl shadow-xl p-8 text-white text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-lg leading-relaxed">
              <strong>Đầu tư Shophouse 4 tầng ngay hôm nay</strong> để sở hữu tài sản đa công năng, đa giá trị, sinh lời bền vững.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-yellow-800 text-white py-12 mt-20">
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