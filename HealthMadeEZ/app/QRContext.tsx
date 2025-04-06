import React, { createContext, useState, useContext } from 'react';

// Create the context
const QRContext = createContext<any>(null);

// Create a provider component
export const QRProvider = ({ children }: { children: React.ReactNode }) => {
  const [qrValue, setQrValue] = useState(''); // Shared state for QR code value

  return (
    <QRContext.Provider value={{ qrValue, setQrValue }}>
      {children}
    </QRContext.Provider>
  );
};

// Custom hook to use the QR context
export const useQRContext = () => {
  const context = useContext(QRContext);
  if (!context) {
    throw new Error('useQRContext must be used within a QRProvider');
  }
  return context;
};

// Default export
export default QRProvider;
