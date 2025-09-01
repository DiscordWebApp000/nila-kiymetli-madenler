import { Users, Award, Star, Shield } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: "50K+",
    label: "Mutlu Müşteri"
  },
  {
    icon: Award,
    number: "25+",
    label: "Yıllık Deneyim"
  },
  {
    icon: Star,
    number: "99%",
    label: "Müşteri Memnuniyeti"
  },
  {
    icon: Shield,
    number: "100%",
    label: "Güvenlik Garantisi"
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neden Bizi Seçmelisiniz?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Yılların deneyimi ve güvenilir hizmetimizle altın sektöründe öncü olmaya devam ediyoruz
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-gray-600" />
              </div>
              
              {/* Number */}
              <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
