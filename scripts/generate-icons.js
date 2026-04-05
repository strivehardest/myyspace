const { PNG } = require('pngjs');
const path = require('path');
const fs = require('fs');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const source = path.join(__dirname, '..', 'public', 'logo.png');
const outDir = path.join(__dirname, '..', 'public', 'icons');

fs.mkdirSync(outDir, { recursive: true });

function resizePNG(srcPng, targetSize) {
  const srcW = srcPng.width;
  const srcH = srcPng.height;

  // Contain: fit within targetSize keeping aspect ratio, center on transparent bg
  const scale = Math.min(targetSize / srcW, targetSize / srcH);
  const scaledW = Math.round(srcW * scale);
  const scaledH = Math.round(srcH * scale);
  const offsetX = Math.floor((targetSize - scaledW) / 2);
  const offsetY = Math.floor((targetSize - scaledH) / 2);

  const dst = new PNG({ width: targetSize, height: targetSize });
  // Fill with white background
  for (let i = 0; i < dst.data.length; i += 4) {
    dst.data[i] = 255;     // R
    dst.data[i + 1] = 255; // G
    dst.data[i + 2] = 255; // B
    dst.data[i + 3] = 255; // A
  }

  // Bilinear interpolation
  for (let y = 0; y < scaledH; y++) {
    for (let x = 0; x < scaledW; x++) {
      const srcX = (x / scaledW) * srcW;
      const srcY = (y / scaledH) * srcH;
      const x0 = Math.floor(srcX);
      const y0 = Math.floor(srcY);
      const x1 = Math.min(x0 + 1, srcW - 1);
      const y1 = Math.min(y0 + 1, srcH - 1);
      const fx = srcX - x0;
      const fy = srcY - y0;

      const dstIdx = ((offsetY + y) * targetSize + (offsetX + x)) * 4;
      // Get interpolated RGBA from source
      const channels = [];
      for (let c = 0; c < 4; c++) {
        const v00 = srcPng.data[(y0 * srcW + x0) * 4 + c];
        const v10 = srcPng.data[(y0 * srcW + x1) * 4 + c];
        const v01 = srcPng.data[(y1 * srcW + x0) * 4 + c];
        const v11 = srcPng.data[(y1 * srcW + x1) * 4 + c];
        channels[c] = v00 * (1 - fx) * (1 - fy) + v10 * fx * (1 - fy) + v01 * (1 - fx) * fy + v11 * fx * fy;
      }
      // Alpha composite over white background
      const srcA = channels[3] / 255;
      dst.data[dstIdx] = Math.round(channels[0] * srcA + 255 * (1 - srcA));
      dst.data[dstIdx + 1] = Math.round(channels[1] * srcA + 255 * (1 - srcA));
      dst.data[dstIdx + 2] = Math.round(channels[2] * srcA + 255 * (1 - srcA));
      dst.data[dstIdx + 3] = 255;
    }
  }
  return dst;
}

const data = fs.readFileSync(source);
const srcPng = PNG.sync.read(data);

for (const size of sizes) {
  const resized = resizePNG(srcPng, size);
  const buffer = PNG.sync.write(resized);
  const outFile = path.join(outDir, `icon-${size}x${size}.png`);
  fs.writeFileSync(outFile, buffer);
  console.log(`Generated icon-${size}x${size}.png`);
}
console.log('All icons generated!');
