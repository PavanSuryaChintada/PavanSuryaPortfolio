import { useState, useCallback, useRef } from 'react';

export const useColorExtractor = () => {
  const [gradientColor, setGradientColor] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const extractColor = useCallback(async (imageUrl: string | undefined) => {
    // Cancel any in-flight work when moving between cards quickly
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    if (!imageUrl) {
      // Fallback to Spotify brand green when no image is supplied
      setGradientColor('141 73% 42%');
      return;
    }

    try {
      // Fetch as blob to avoid canvas tainting from some CDNs
      const res = await fetch(imageUrl, { signal: controller.signal, mode: 'cors' as RequestMode });
      if (!res.ok) throw new Error('Image fetch failed');
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);

      await new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Image load error'));
        img.src = objectUrl;
      });

      // Draw and sample colors
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('No 2D context');

      canvas.width = 50;
      canvas.height = 50;

      const img2 = new Image();
      img2.src = objectUrl;
      await new Promise<void>((resolve) => { img2.onload = () => resolve(); });

      try {
        ctx.drawImage(img2, 0, 0, 50, 50);
        const imageData = ctx.getImageData(0, 0, 50, 50);
        const data = imageData.data;

        const colorMap: { [key: string]: number } = {};
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          if (a < 125 || (r + g + b < 50) || (r + g + b > 720)) continue;
          const roundedR = Math.round(r / 10) * 10;
          const roundedG = Math.round(g / 10) * 10;
          const roundedB = Math.round(b / 10) * 10;
          const key = `${roundedR},${roundedG},${roundedB}`;
          colorMap[key] = (colorMap[key] || 0) + 1;
        }

        let maxCount = 0;
        let dominantColor = '0,0,0';
        for (const [color, count] of Object.entries(colorMap)) {
          if (count > maxCount) {
            maxCount = count;
            dominantColor = color;
          }
        }

        const [r, g, b] = dominantColor.split(',').map(Number);
        const hsl = rgbToHsl(r, g, b);
        if (!controller.signal.aborted) {
          setGradientColor(`${hsl.h} ${hsl.s}% ${hsl.l}%`);
        }
      } catch {
        // If canvas read fails (tainted), fallback to Spotify green
        if (!controller.signal.aborted) setGradientColor('141 73% 42%');
      } finally {
        URL.revokeObjectURL(objectUrl);
      }
    } catch {
      if (!controller.signal.aborted) setGradientColor('141 73% 42%');
    }
  }, []);

  const clearColor = useCallback(() => {
    abortRef.current?.abort();
    setGradientColor(null);
  }, []);

  const setColor = useCallback((hsl: string | null) => {
    setGradientColor(hsl);
  }, []);

  return { gradientColor, extractColor, clearColor, setColor };
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
