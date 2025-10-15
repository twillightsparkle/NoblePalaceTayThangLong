import Navbar from '@/components/Navbar';

export default function ElegantShophouse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            ✨ ELEGANT SHOPHOUSE
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6"></div>
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-4">
            NHÀ PHỐ THÔNG MINH, 4 TẦNG ĐA CÔNG NĂNG
          </h2>
          <p className="text-lg text-amber-700 max-w-4xl mx-auto">
            Lựa chọn hoàn hảo cho các nhà đầu tư trẻ, chủ kinh doanh quy mô vừa và nhỏ hoặc mô hình vừa ở vừa kinh doanh.
          </p>
        </div>

        {/* Thông số kỹ thuật */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Thông tin sản phẩm</h2>
          <div className="space-y-4 text-amber-700">
            <div className="flex items-start">
              <span className="text-amber-500 mr-3">●</span>
              <span>Số lượng: 1.496 căn</span>
            </div>
            <div className="flex items-start">
              <span className="text-amber-500 mr-3">●</span>
              <span>Tầng cao: 4 tầng</span>
            </div>
            <div className="flex items-start">
              <span className="text-amber-500 mr-3">●</span>
              <span>Diện tích sàn từ 144,6m² - 371,1m²/căn</span>
            </div>
            <div className="flex items-start">
              <span className="text-amber-500 mr-3">●</span>
              <span>Thiết kế tối ưu, chi phí vận hành hợp lý, phù hợp nhiều mô hình khai thác như: boutique shop, lưu trú cao cấp, dịch vụ ăn uống, studio sáng tạo,...</span>
            </div>
            <div className="flex items-start">
              <span className="text-amber-500 mr-3">●</span>
              <span>Vị trí nhà phố Elegant shophouse 4 tầng: Nằm tại trục trung tâm các phân khu, có giao thông nội khu thông suốt, dễ tiếp cận công viên, clubhouse và các tiện ích chính.</span>
            </div>
          </div>
        </div>

        {/* Thiết kế và công năng */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-amber-900 mb-4">🏠 Các Dòng Sản Phẩm Nổi Bật</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                <h4 className="font-bold text-amber-900 mb-2">Smart 4T</h4>
                <p className="text-amber-700">Tối ưu diện tích 50-60m²</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                <h4 className="font-bold text-amber-900 mb-2">Fastlink Plus</h4>
                <p className="text-amber-700">Diện tích lớn, đa công năng (70m²+)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ưu điểm */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">🎯 ƯU ĐIỂM ELEGANT SHOPHOUSE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Dễ Khai Thác</h3>
              <p className="text-amber-700 text-sm">Dễ khai thác, dễ cho thuê</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Chi Phí Hợp Lý</h3>
              <p className="text-amber-700 text-sm">Khả năng tăng giá tốt khi hạ tầng hoàn thiện</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-amber-900 mb-2">Đáp Ứng Linh Hoạt</h3>
              <p className="text-amber-700 text-sm">Phù hợp người trẻ khởi nghiệp - doanh nghiệp sáng tạo</p>
            </div>
          </div>
        </div>

        {/* Chính sách bán hàng */}
        <div className="bg-gradient-to-r from-amber-900 to-yellow-800 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">📍 ƯU ĐÃI CHƯA TỪNG CÓ - DÀNH CHO NHÀ ĐẦU TƯ NHẠY BÉN</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="font-semibold">Chiết khấu 2%</span>
              </div>
              <p className="text-sm opacity-90">Khi giao dịch qua Noble App</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="font-semibold">Chiết khấu 10%/năm</span>
              </div>
              <p className="text-sm opacity-90">Khi thanh toán sớm</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="font-semibold">Miễn phí 24 tháng</span>
              </div>
              <p className="text-sm opacity-90">Quản lý vận hành</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="font-semibold">Hỗ trợ vay 70%</span>
              </div>
              <p className="text-sm opacity-90">Ngân hàng hỗ trợ</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="font-semibold">Lãi suất 0%</span>
              </div>
              <p className="text-sm opacity-90">Trong 18 tháng</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="font-semibold">Chiết khấu 1%</span>
              </div>
              <p className="text-sm opacity-90">ĐKTT tại Đan Phượng (cũ)</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="font-semibold">Chiết khấu 1,5%</span>
              </div>
              <p className="text-sm opacity-90">Khách hàng thân thiết</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:col-span-2">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="font-semibold">Tặng gian hàng điện tử</span>
              </div>
              <p className="text-sm opacity-90">Trên Noble App - hỗ trợ vay lên tới 2 tỷ đồng</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span>Sổ đỏ lâu dài, bàn giao hoàn thiện tiêu chuẩn hàng hiệu</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span>Ký HĐMB ngay, giao nhà ngay (từ quý 3/2025)</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span>Bảng hàng hiện có trên Noble App</span>
              </div>
            </div>
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