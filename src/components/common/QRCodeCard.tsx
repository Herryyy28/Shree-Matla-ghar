import React, { useState } from 'react';
import { QrCode, Download, Share2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { trackEvent } from '../../utils/analytics';

interface QRCodeCardProps {
  url: string;
  title: string;
  subtitle?: string;
}

export const QRCodeCard: React.FC<QRCodeCardProps> = ({ url, title, subtitle }) => {
  const [isGenerated, setIsGenerated] = useState(false);
  
  // Use a reliable public API for QR code generation
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}&margin=10`;

  const handleGenerate = () => {
    setIsGenerated(true);
    trackEvent({ event: 'qr_generated', label: title });
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `QR-${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('Failed to download QR code', err);
    }
  };

  if (!isGenerated) {
    return (
      <button
        onClick={handleGenerate}
        className="w-full flex items-center justify-center gap-2 p-3 bg-clay-100 hover:bg-clay-200 text-clay-900 border border-clay-300 rounded-xl text-sm font-bold transition-all"
      >
        <QrCode className="w-4 h-4" />
        Generate Shop QR Code
      </button>
    );
  }

  return (
    <div className="bg-white border border-clay-200 rounded-2xl p-5 text-center shadow-earth relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-amber-500"></div>
      
      <div className="space-y-1 mb-4">
        <h4 className="font-serif font-bold text-clay-900 text-lg">{title}</h4>
        {subtitle && <p className="text-xs text-clay-600">{subtitle}</p>}
      </div>

      <div className="bg-clay-50 p-4 rounded-xl border border-clay-100 flex items-center justify-center mx-auto mb-4">
        <img 
          src={qrCodeUrl} 
          alt={`QR Code for ${title}`} 
          className="w-32 h-32 object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-1.5 p-2.5 bg-clay-900 hover:bg-clay-800 text-white rounded-xl text-xs font-bold transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Download
        </button>
        <button
          onClick={async () => {
            if (navigator.share) {
              try {
                await navigator.share({
                  title: `${title} QR Code`,
                  text: `Scan this QR Code for ${title} at ${BUSINESS_CONFIG.brandName}`,
                  url: url,
                });
              } catch (err) {
                // Ignore abort errors
              }
            }
          }}
          className="flex-1 flex items-center justify-center gap-1.5 p-2.5 bg-white hover:bg-clay-50 border border-clay-200 text-clay-900 rounded-xl text-xs font-bold transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
          Share
        </button>
      </div>
    </div>
  );
};
