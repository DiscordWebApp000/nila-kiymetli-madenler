import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
       

  

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">KM</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Hakkımızda</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Yılların deneyimi ve güvenilir hizmetimizle altın sektöründe öncü olmaya devam ediyoruz.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span className="text-gray-300 text-sm">SSL Güvenli</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">+90 (212) 555 0123</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">info@kiymetlimaden.com</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Ana Sayfa</a>
          <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Altın Fiyatları</a>
          <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Hizmetlerimiz</a>
          <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">İletişim</a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Kıymetli Maden. Tüm hakları saklıdır.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Gizlilik</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Şartlar</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
