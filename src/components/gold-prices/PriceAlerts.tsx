'use client';

import { Bell, Clock, TrendingUp, TrendingDown, Edit, CheckCircle } from 'lucide-react';

interface PriceAlertItem {
  id: number;
  product: string;
  targetPrice: number;
  currentPrice: number;
  status: 'active' | 'triggered' | 'expired';
  progress: number;
  daysLeft: number;
  type: 'above' | 'below';
}

interface PriceAlertsProps {
  alerts: PriceAlertItem[];
}

export default function PriceAlerts({ alerts }: PriceAlertsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 2
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'triggered':
        return 'bg-blue-100 text-blue-700';
      case 'expired':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Aktif';
      case 'triggered':
        return 'Tetiklendi';
      case 'expired':
        return 'Süresi Doldu';
      default:
        return 'Bilinmiyor';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full mb-4">
            <Bell className="w-3 h-3" />
            <span className="text-xs font-medium">FİYAT ALARMLARI</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Fiyat Alarmları</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hedef fiyatlara ulaşıldığında anında bildirim alın</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alerts.map((alert) => (
            <div key={alert.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Bell className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(alert.status)}`}>
                    {getStatusText(alert.status)}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{alert.product}</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Hedef Fiyat:</span>
                  <span className="text-sm font-medium text-gray-900">{formatPrice(alert.targetPrice)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Mevcut Fiyat:</span>
                  <span className="text-sm font-medium text-gray-900">{formatPrice(alert.currentPrice)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tip:</span>
                  <div className="flex items-center gap-1">
                    {alert.type === 'above' ? (
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span className="text-sm text-gray-900">
                      {alert.type === 'above' ? 'Yukarı' : 'Aşağı'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500">İlerleme</span>
                  <span className="text-xs text-gray-500">{alert.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-gray-800 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${alert.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{alert.daysLeft} gün kaldı</span>
                </div>
                
                {alert.status === 'triggered' && (
                  <div className="flex items-center gap-1 text-sm text-blue-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Tetiklendi</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-all duration-200 shadow-sm">
            Yeni Alarm Oluştur
          </button>
        </div>
      </div>
    </section>
  );
}
