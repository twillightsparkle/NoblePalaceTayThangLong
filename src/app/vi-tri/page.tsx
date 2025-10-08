import Navbar from '@/components/Navbar';

export default function ViTri() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-8">
            Vị Trí
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-amber-700 mb-8">
            Trang này đang được phát triển...
          </p>
          <div className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-12">
            <p className="text-amber-600 text-lg">
              Nội dung về vị trí dự án sẽ được cập nhật sớm.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}