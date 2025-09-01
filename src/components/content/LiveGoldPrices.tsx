import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

// Live gold price data
const liveGoldPrices = [
  {
    id: 1,
    name: "Gram Altın",
    currentPrice: 2150.50,
    change: 12.75,
    changePercent: 0.60,
    trend: "up",
    lastUpdate: "11:35",
    category: "Yatırım"
  },
  {
    id: 2,
    name: "Çeyrek Altın",
    currentPrice: 3450.00,
    change: -8.25,
    changePercent: -0.24,
    trend: "down",
    lastUpdate: "11:35",
    category: "Yatırım"
  },
  {
    id: 3,
    name: "Yarım Altın",
    currentPrice: 6900.00,
    change: 25.50,
    changePercent: 0.37,
    trend: "up",
    lastUpdate: "11:35",
    category: "Yatırım"
  },
  {
    id: 4,
    name: "Tam Altın",
    currentPrice: 13800.00,
    change: 45.00,
    changePercent: 0.33,
    trend: "up",
    lastUpdate: "11:35",
    category: "Yatırım"
  },
  {
    id: 5,
    name: "Cumhuriyet Altını",
    currentPrice: 14250.00,
    change: 32.80,
    changePercent: 0.23,
    trend: "up",
    lastUpdate: "11:35",
    category: "Koleksiyon"
  },
  {
    id: 6,
    name: "Ata Altın",
    currentPrice: 14500.00,
    change: 28.50,
    changePercent: 0.20,
    trend: "up",
    lastUpdate: "11:35",
    category: "Koleksiyon"
  },
  {
    id: 7,
    name: "14 Ayar Altın",
    currentPrice: 1250.00,
    change: -5.20,
    changePercent: -0.41,
    trend: "down",
    lastUpdate: "11:35",
    category: "Takı"
  },
  {
    id: 8,
    name: "18 Ayar Altın",
    currentPrice: 1620.00,
    change: 18.30,
    changePercent: 1.14,
    trend: "up",
    lastUpdate: "11:35",
    category: "Takı"
  }
];

export default function LiveGoldPrices() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full mb-4">
            <TrendingUp className="w-3 h-3" />
            <span className="text-xs font-medium">CANLI TAKİP</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Canlı Altın Fiyatları
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Güncel altın fiyatlarını takip edin ve en uygun zamanda yatırım kararlarınızı alın
          </p>
        </div>

        {/* Modern Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-800 px-6 py-4">
            <div className="grid grid-cols-6 gap-4 text-white font-medium text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                Altın Türü
              </div>
              <div className="text-center">Kategori</div>
              <div className="text-center">Güncel Fiyat</div>
              <div className="text-center">Değişim</div>
              <div className="text-center">Trend</div>
              <div className="text-center">Güncelleme</div>
            </div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {liveGoldPrices.map((item) => (
              <div 
                key={item.id} 
                className="px-6 py-4 hover:bg-amber-50/50 transition-colors duration-200 group"
              >
                <div className="grid grid-cols-6 gap-4 items-center">
                  {/* Gold Type */}
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      item.category === 'Yatırım' ? 'bg-emerald-500' : 
                      item.category === 'Koleksiyon' ? 'bg-amber-500' : 'bg-purple-500'
                    }`}></div>
                    <div className="font-medium text-gray-800 group-hover:text-amber-700 transition-colors duration-200">
                      {item.name}
                    </div>
                  </div>
                  
                  {/* Category */}
                  <div className="text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.category === 'Yatırım' ? 'bg-gray-100 text-gray-700' :
                      item.category === 'Koleksiyon' ? 'bg-gray-100 text-gray-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Current Price */}
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900">
                      ₺{item.currentPrice.toLocaleString()}
                    </div>
                  </div>
                  
                  {/* Change */}
                  <div className="text-center">
                    <div className={`flex flex-col items-center gap-1 ${
                      item.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      <div className="flex items-center gap-1">
                        {item.trend === 'up' ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4" />
                        )}
                        <span className="font-medium text-sm">
                          {item.trend === 'up' ? '+' : ''}{item.change.toFixed(2)} ₺
                        </span>
                      </div>
                      <span className="text-xs opacity-80">
                        ({item.trend === 'up' ? '+' : ''}{item.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                  
                  {/* Trend Visual */}
                  <div className="text-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${
                      item.trend === 'up' ? 'bg-gray-100' : 'bg-gray-100'
                    }`}>
                      {item.trend === 'up' ? (
                        <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  </div>
                  
                  {/* Last Update */}
                  <div className="text-center">
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {item.lastUpdate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Live Update Indicator */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            <span>Fiyatlar her dakika güncellenmektedir</span>
          </div>
        </div>
      </div>
    </section>
  );
}
