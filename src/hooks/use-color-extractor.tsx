import { useState, useCallback } from 'react';

export const useColorExtractor = () => {
  const [gradientColor, setGradientColor] = useState<string | null>(null);

  const extractColor = useCallback((imageUrl: string | undefined) => {
    if (!imageUrl) {
      setGradientColor(null);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Use smaller canvas for faster processing
      canvas.width = 50;
      canvas.height = 50;
      ctx.drawImage(img, 0, 0, 50, 50);

      const imageData = ctx.getImageData(0, 0, 50, 50);
      const data = imageData.data;
      
      // Color frequency map
      const colorMap: { [key: string]: number } = {};
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        
        // Skip transparent or very dark/light pixels
        if (a < 125 || (r + g + b < 50) || (r + g + b > 720)) continue;
        
        // Round to reduce unique colors
        const roundedR = Math.round(r / 10) * 10;
        const roundedG = Math.round(g / 10) * 10;
        const roundedB = Math.round(b / 10) * 10;
        
        const key = `${roundedR},${roundedG},${roundedB}`;
        colorMap[key] = (colorMap[key] || 0) + 1;
      }
      
      // Find most frequent color
      let maxCount = 0;
      let dominantColor = '0,0,0';
      
      for (const [color, count] of Object.entries(colorMap)) {
        if (count > maxCount) {
          maxCount = count;
          dominantColor = color;
        }
      }
      
      const [r, g, b] = dominantColor.split(',').map(Number);
      
      // Convert RGB to HSL for better gradient control
      const hsl = rgbToHsl(r, g, b);
      setGradientColor(`${hsl.h} ${hsl.s}% ${hsl.l}%`);
    };

    img.onerror = () => {
      // Silently fail and keep default background
      setGradientColor(null);
    };
  }, []);

  const clearColor = useCallback(() => {
    setGradientColor(null);
  }, []);

  return { gradientColor, extractColor, clearColor };
};

// Helper function to convert RGB to HSL
function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}
