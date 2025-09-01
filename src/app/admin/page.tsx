'use client';

import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { checkAuthState } from '../../store/slices/authSlice';
import AdminLogin from '../../components/admin/AdminLogin';
import AdminDashboard from '../../components/admin/AdminDashboard';

export default function AdminPage() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading } = useAppSelector((state: { auth: { isAuthenticated: boolean; loading: boolean } }) => state.auth);
  const [isStaticAuth, setIsStaticAuth] = useState(false);

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  // Statik giriş kontrolü
  const handleStaticLogin = (email: string, password: string) => {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setIsStaticAuth(true);
    } else {
      alert('Hatalı e-posta veya şifre!');
    }
    return false;
  };

  // Firebase authentication varsa statik girişi devre dışı bırak
  useEffect(() => {
    if (isAuthenticated) {
      setIsStaticAuth(false);
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-600"></div>
      </div>
    );
  }

  // Firebase authentication varsa veya statik giriş yapıldıysa dashboard'u göster
  if (isAuthenticated || isStaticAuth) {
    return <AdminDashboard isStaticAuth={isStaticAuth} />;
  }

  // Giriş yapılmamışsa login formunu göster
  return <AdminLogin onStaticLogin={handleStaticLogin} />;
}
