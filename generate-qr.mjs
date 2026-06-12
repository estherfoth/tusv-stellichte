// generate-qr.mjs
import QRCode from "qrcode";

const URL = "https://tusv-stellichte.de/strassenlauf";
const OUTPUT = "./qr-strassenlauf.png";

await QRCode.toFile(OUTPUT, URL, {
  errorCorrectionLevel: "M",
  width: 512,
  margin: 2,
  color: {
    dark: "#000000",
    light: "#ffffff",
  },
});

console.log(`QR gespeichert: ${OUTPUT}`);
