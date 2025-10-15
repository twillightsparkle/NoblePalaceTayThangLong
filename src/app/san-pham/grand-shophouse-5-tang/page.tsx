import Navbar from '@/components/Navbar';

export default function GrandShophouse5Tang() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            🌟 GRAND SHOPHOUSE 5 TẦNG 🌟
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-4">
            ĐA TẦNG GIÁ TRỊ, VẠN LỐI PHỒN VINH
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-amber-700 leading-relaxed mb-6">
              💎 <strong>Grand Shophouse</strong> tại Noble Palace Tay Thang Long - biểu tượng thịnh vượng của giới tinh hoa, nơi mỗi tầng là một công năng, mỗi không gian là một giá trị đầu tư.
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
                <p className="text-amber-700">Mặt bằng vàng sinh lợi nhuận</p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 2: Văn phòng / Kho</h3>
                <p className="text-amber-700">Tối ưu vận hành</p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                3-4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 3 & 4: Không gian sinh hoạt riêng tư</h3>
                <p className="text-amber-700">Tiện nghi, sang trọng</p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">✨ Tầng 5: Đa năng / Sân vườn thư giãn</h3>
                <p className="text-amber-700">Điểm chạm cân bằng cho cuộc sống thư thái</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vị trí đắc địa */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">📍 Vị Trí Đắc Địa</h2>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
            <p className="text-amber-700 leading-relaxed text-lg">
              <strong>Toạ lạc mặt đường Hoàng Quốc Việt kéo dài</strong> - vị trí phượng hoàng hiếm có, Noble Palace Tay Thang Long bảo chứng cho giá trị đầu tư, thanh khoản bền vững, tiềm năng tăng giá vượt trội.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-amber-900 to-yellow-800 rounded-2xl shadow-xl p-8 text-white text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-lg leading-relaxed">
              <strong>Quyết định đầu tư Grand Shophouse ngay hôm nay</strong> để sở hữu tài sản đa công năng, đa giá trị, sinh lời bền vững.
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