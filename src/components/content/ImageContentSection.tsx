import Image from 'next/image';
import { ArrowRight, Star, Shield, Award, Users, Clock } from 'lucide-react';

export default function ImageContentSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-100 h-120 overflow-hidden rounded-2xl shadow-lg">
              <Image 
                src="https://www.shopdorsey.com/cdn/shop/products/Untitled_1080x1920px_1080x1080px_1080x1920px_1080x1080px_908x1200px_350x500px_908x1200px_350x500px_908x1200px_1200x.png?v=1699294808"
                alt="Premium Altın Koleksiyonu"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-10">
            {/* Main Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Premium Altın
                <span className="block text-gray-700">Koleksiyonu</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                En kaliteli altın ürünlerimizi keşfedin. Özel tasarım ve premium kalite ile 
                değerli yatırımlarınız için güvenilir çözümler sunuyoruz.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Premium Kalite</h3>
                <p className="text-sm text-gray-600">En yüksek standartlarda üretim</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Güvenli Alışveriş</h3>
                <p className="text-sm text-gray-600">SSL korumalı ödeme sistemi</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3 mx-auto shadow-sm">
                Ürünleri İncele
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Info */}
            <div className="text-center">
              <div className="inline-flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1000+ Müşteri</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Hızlı Teslimat</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>5.0 Puan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
