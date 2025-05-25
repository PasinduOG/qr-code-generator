import { useState } from "react";
import "./App.css";
import QRCodeForm from "./components/QRCodeForm";
import QRCodeDisplay from "./components/QRCodeDisplay";

function App() {
  const [qrCode, setQrCode] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQRCode = async (text, settings) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          ...settings,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate QR code");
      }

      const data = await response.json();
      setQrCode(data.qrCode);
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to generate QR code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">QR Code</span> Generator
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            Create beautiful QR codes for your website, business, or personal use.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left side - Input settings */}
              <div className="flex-1">
                <QRCodeForm onGenerate={generateQRCode} isLoading={loading} />
              </div>

              {/* Right side - QR code display */}
              <div className="flex-1">
                <QRCodeDisplay qrCode={qrCode} onDownload={handleDownload} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} QR Code Generator by <a href="https://github.com/PasinduOG" target="_blank"><b>Pasindu OG</b></a>. Create beautiful QR codes quickly and easily.
          </p>
          <p className="text-sm text-gray-500">
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
