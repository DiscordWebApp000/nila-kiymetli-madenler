'use client';

import { TrendingUp, TrendingDown, BarChart3, DollarSign, Clock } from 'lucide-react';

interface MarketSummaryItem {
  title: string;
  value: string;
  change: string;
  changePercent: string;
  trend: 'up' | 'down' | 'neutral';
  icon: string;
  description: string;
}

interface MarketSummaryProps {
  items: MarketSummaryItem[];
}

export default function MarketSummary({ items }: MarketSummaryProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full mb-4">
            <BarChart3 className="w-3 h-3" />
            <span className="text-xs font-medium">PİYASA ÖZETİ</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Günlük Piyasa Özeti</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Altın piyasasındaki son gelişmeler ve trend analizi</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  {item.icon === 'TrendingUp' && <TrendingUp className="w-5 h-5 text-gray-600" />}
                  {item.icon === 'DollarSign' && <DollarSign className="w-5 h-5 text-gray-600" />}
                  {item.icon === 'BarChart3' && <BarChart3 className="w-5 h-5 text-gray-600" />}
                  {item.icon === 'Clock' && <Clock className="w-5 h-5 text-gray-600" />}
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  item.trend === 'up' ? 'text-emerald-600' : 
                  item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {item.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                  {item.trend === 'down' && <TrendingDown className="w-4 h-4" />}
                  {item.trend === 'neutral' && <BarChart3 className="w-4 h-4" />}
                  <span>{item.changePercent}</span>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-gray-900 mb-2">{item.value}</div>
              <div className="text-gray-600 mb-2">{item.title}</div>
              <div className="text-xs text-gray-500">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
