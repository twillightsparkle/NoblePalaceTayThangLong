import Navbar from '@/components/Navbar';

export default function ChinhSach() {
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
              Chính Sách Bán Hàng
              <span className="block text-yellow-600 text-3xl sm:text-4xl mt-2">
                NOBLE PALACE TÂY THĂNG LONG
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
          </div>

          {/* Policy Image */}
          <div className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-2xl transition-shadow duration-300 mb-16">
            <img 
              src="/NoblePalaceTayThangLong/20.png" 
              alt="Chính sách bán hàng" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Sales Incentive Policies */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Chương Trình Ưu Đãi Hấp Dẫn
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
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Chiết Khấu Thanh Toán Sớm</h3>
                      <p className="text-amber-700 text-lg">10%/năm khi thanh toán sớm</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Miễn Phí Quản Lý Vận Hành</h3>
                      <p className="text-amber-700 text-lg">24 tháng miễn phí quản lý vận hành</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Hỗ Trợ Vay Ngân Hàng</h3>
                      <p className="text-amber-700 text-lg">Hỗ trợ vay ngân hàng tới 70%</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Hỗ Trợ Lãi Suất 0%</h3>
                      <p className="text-amber-700 text-lg">Hỗ trợ lãi suất 0% trong 18 tháng</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Chiết Khấu Khách Hàng Địa Phương</h3>
                      <p className="text-amber-700 text-lg">1% chiết khấu cho khách hàng có đăng ký thường trú tại Dân Phượng (cũ)</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Ưu Đãi Khách Hàng Thân Thiết</h3>
                      <p className="text-amber-700 text-lg">1,5% chiết khấu cho khách hàng thân thiết</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 text-sm">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">Gian Hàng Điện Tử Noble App</h3>
                      <p className="text-amber-700 text-lg">Tặng gian hàng điện tử trên Noble App – hỗ trợ vay lên tới 2 tỷ đồng</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Bảng Giá Bán
              </h2>
            </div>
            
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <p className="text-amber-800 mb-8 text-center text-lg">
                  Giá bán Noble Palace Tây Thăng Long đã được công bố chính thức. Tuy nhiên, với vị trí đắc địa và chất lượng cao cấp, 
                  dự án được dự đoán sẽ có mức giá cạnh tranh trong phân khúc bất động sản cao cấp tại Hà Nội.
                </p>

                {/* Price Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-yellow-400 to-amber-500">
                        <th className="border border-yellow-300 px-4 py-3 text-amber-900 font-bold text-left">Loại Hình Sản Phẩm</th>
                        <th className="border border-yellow-300 px-4 py-3 text-amber-900 font-bold text-left">Diện Tích</th>
                        <th className="border border-yellow-300 px-4 py-3 text-amber-900 font-bold text-left">Giá Bán</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-yellow-50 transition-colors duration-200">
                        <td className="border border-yellow-200 px-4 py-3 text-amber-800">Shophouse 4 Tầng</td>
                        <td className="border border-yellow-200 px-4 py-3 text-amber-800">50 – 79.5 m²</td>
                        <td className="border border-yellow-200 px-4 py-3 text-amber-900 font-semibold">12.7 – 20 tỷ</td>
                      </tr>
                      <tr className="hover:bg-yellow-50 transition-colors duration-200">
                        <td className="border border-yellow-200 px-4 py-3 text-amber-800">Shophouse 4 Tầng Lô Góc</td>
                        <td className="border border-yellow-200 px-4 py-3 text-amber-800">50 – 80.6 m²</td>
                        <td className="border border-yellow-200 px-4 py-3 text-amber-900 font-semibold">15.4 – 25.7 tỷ</td>
                      </tr>
                      <tr className="hover:bg-yellow-50 transition-colors duration-200">
                        <td className="border border-yellow-200 px-4 py-3 text-amber-800">Shophouse 5 Tầng</td>
                        <td className="border border-yellow-200 px-4 py-3 text-amber-800">67.5 – 100 m²</td>
                        <td className="border border-yellow-200 px-4 py-3 text-amber-900 font-semibold">Đang cập nhật</td>
                      </tr>
                      <tr className="hover:bg-yellow-50 transition-colors duration-200">
                        <td className="border border-yellow-200 px-4 py-3 text-amber-800">Shophouse 5 Tầng Lô Góc</td>
                        <td className="border border-yellow-200 px-4 py-3 text-amber-800">59.5 – 167.4 m²</td>
                        <td className="border border-yellow-200 px-4 py-3 text-amber-900 font-semibold">Đang cập nhật</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-amber-800 text-lg leading-relaxed mb-6">
                  Giá bán Noble Palace Tây Thăng Long Dân Phượng sẽ phụ thuộc vào nhiều yếu tố như vị trí, diện tích, hướng nhìn của từng căn hộ. 
                  Các căn liền kề và biệt thự có thể sẽ có mức giá cao hơn do không gian sống rộng rãi và riêng tư hơn.
                </p>

                <p className="text-amber-800 text-lg leading-relaxed bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <span className="font-bold">Để có thông tin chính xác về giá bán,</span> khách hàng nên liên hệ trực tiếp với đơn vị phân phối chính thức của dự án. 
                  Điều này sẽ giúp khách hàng có được thông tin cập nhật nhất và chính xác nhất về giá cả cũng như các chương trình ưu đãi hiện có.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Schedule Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-8 py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                Tiến Độ Thanh Toán
              </h2>
            </div>
            
            <div className="px-8 py-12">
              <div className="max-w-4xl mx-auto">
                <p className="text-amber-800 mb-12 text-center text-lg">
                  Dự án Noble Palace Tây Thăng Long áp dụng 3 phương thức thanh toán linh hoạt, giúp khách hàng có thể dễ dàng sở hữu căn nhà mơ ước.
                </p>

                {/* Payment Method 1 */}
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-4 rounded-t-lg">
                    <h3 className="text-2xl font-bold text-white">
                      Phương Thức 1: Tiến Độ Chuẩn (Vốn Tự Có)
                    </h3>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-b-lg p-6 space-y-3">
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đặt cọc:</span> 300 triệu đồng</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đợt 1:</span> Thanh toán 25% giá trị bất động sản khi ký HĐMB</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đợt 2:</span> Thanh toán 20% giá trị bất động sản sau 30 ngày kể từ ngày ký HĐMB</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đợt 3:</span> Thanh toán 25% giá trị bất động sản sau 60 ngày kể từ ngày ký HĐMB</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đợt 4:</span> Thanh toán 30% giá trị bất động sản và 100% kinh phí bảo trì khi bàn giao nhà <span className="font-semibold">(Dự kiến Quý 2/2026)</span></p>
                    </div>
                  </div>
                </div>

                {/* Payment Method 2 */}
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-4 rounded-t-lg">
                    <h3 className="text-2xl font-bold text-white">
                      Phương Thức 2: Tiến Độ Thanh Toán Sớm
                    </h3>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-b-lg p-6 space-y-3">
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đặt cọc:</span> 300 triệu đồng</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đợt 1:</span> Thanh toán 30% giá trị bất động sản khi ký HĐMB</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đợt 2:</span> Thanh toán 70% giá trị bất động sản sau 30 ngày kể từ ngày ký HĐMB</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đợt 3:</span> Thanh toán 100% kinh phí bảo trì khi bàn giao nhà <span className="font-semibold">(Dự kiến Quý 2/2026)</span></p>
                    </div>
                  </div>
                </div>

                {/* Payment Method 3 */}
                <div className="mb-10">
                  <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-6 py-4 rounded-t-lg">
                    <h3 className="text-2xl font-bold text-white">
                      Phương Thức 3: Tiến Độ Thanh Toán Vay Vốn Ngân Hàng
                    </h3>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-b-lg p-6 space-y-3">
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đặt cọc:</span> 300 triệu đồng</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đợt 1:</span> Thanh toán 20% giá trị bất động sản khi ký HĐMB</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đợt 2:</span> Ngân hàng giải ngân 65% giá trị bất động sản sau 30 ngày kể từ ngày ký HĐMB</p>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-yellow-500 text-white rounded-full text-center text-sm font-bold mr-4 flex-shrink-0">•</span>
                      <p className="text-amber-800 text-lg"><span className="font-semibold">Đợt 3:</span> Thanh toán 15% giá trị bất động sản và 100% kinh phí bảo trì khi bàn giao nhà <span className="font-semibold">(Dự kiến Quý 2/2026)</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-6">
                Chọn Phương Thức Thanh Toán Phù Hợp
              </h2>
              <p className="text-lg text-amber-800 mb-8 max-w-2xl mx-auto">
                Với 3 phương thức thanh toán linh hoạt, bạn có thể dễ dàng sở hữu căn nhà mơ ước tại Noble Palace Tây Thăng Long
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
