const Jimp = require('jimp');
const path = require('path');

const W = 1200;
const H = 630;

async function main() {
  // Dark background #0B0C0E
  const bg = new Jimp(W, H, 0x0B0C0Eff);

  // Subtle gold horizontal line (top accent)
  const lineH = 3;
  const lineY = Math.round(H * 0.12);
  for (let x = Math.round(W * 0.38); x < Math.round(W * 0.62); x++) {
    for (let dy = 0; dy < lineH; dy++) {
      bg.setPixelColor(0xC6AA4Cff, x, lineY + dy);
    }
  }

  // Bottom accent line
  for (let x = Math.round(W * 0.38); x < Math.round(W * 0.62); x++) {
    for (let dy = 0; dy < lineH; dy++) {
      bg.setPixelColor(0xC6AA4Cff, x, H - lineY - lineH + dy);
    }
  }

  // Load and center the logo
  const logoPath = path.join(__dirname, '../public/letra_logo.png');
  const logo = await Jimp.read(logoPath);

  // Scale logo to ~220px tall
  const targetH = 220;
  const scale = targetH / logo.getHeight();
  logo.scale(scale);

  const lx = Math.round((W - logo.getWidth()) / 2);
  const ly = Math.round((H - logo.getHeight()) / 2);

  bg.composite(logo, lx, ly, {
    mode: Jimp.BLEND_SOURCE_OVER,
    opacitySource: 1,
    opacityDest: 1,
  });

  const outPath = path.join(__dirname, '../public/og-image.png');
  await bg.writeAsync(outPath);
  console.log(`OG image generated: ${outPath} (${W}x${H})`);
}

main().catch(err => { console.error(err); process.exit(1); });
