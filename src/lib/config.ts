// Configuration utility for environment variables
export const config = {
  // Firebase Configuration
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  },
  
  // Application Configuration
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Kıymetli Maden',
  },
  
  // Contact Form Configuration
  contact: {
    timeout: Number(process.env.NEXT_PUBLIC_CONTACT_FORM_TIMEOUT) || 3000,
    errorTimeout: Number(process.env.NEXT_PUBLIC_CONTACT_FORM_ERROR_TIMEOUT) || 5000,
  },
  
  // Investment Configuration
  investment: {
    minAmount: Number(process.env.NEXT_PUBLIC_MIN_INVESTMENT_AMOUNT) || 5000,
    gramGoldMin: Number(process.env.NEXT_PUBLIC_GRAM_GOLD_MIN_AMOUNT) || 1000,
    etfMin: Number(process.env.NEXT_PUBLIC_ETF_MIN_AMOUNT) || 500,
    stockMin: Number(process.env.NEXT_PUBLIC_STOCK_MIN_AMOUNT) || 2000,
  },
};

// Validation function to ensure required environment variables are set
export const validateConfig = () => {
  const requiredVars = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID',
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn('Missing required environment variables:', missingVars);
    return false;
  }
  
  return true;
};
