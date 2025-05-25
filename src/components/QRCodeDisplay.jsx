import PropTypes from '../utils/PropTypes';

const QRCodeDisplay = ({ qrCode, onDownload }) => {
  return (
    <div className="flex flex-col items-center">      <div className="mb-3 w-full">
        <div className="bg-gray-50 dark:bg-gray-700 border dark:border-gray-600 rounded-lg p-4 flex items-center justify-center h-64 transition-colors duration-300">
          {qrCode ? (
            <img src={qrCode} alt="QR Code" className="max-h-full qr-animate qr-container" />
          ) : (
            <div className="text-gray-400 dark:text-gray-300 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75Z" />
              </svg>
              Your QR code will appear here
            </div>
          )}
        </div>
      </div>
      
      <button
        onClick={onDownload}        disabled={!qrCode}
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
          qrCode 
            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
        }`}
      >
        Download QR Code
      </button>
    </div>
  );
};

QRCodeDisplay.propTypes = {
  qrCode: PropTypes.string,
  onDownload: PropTypes.func.isRequired
};

export default QRCodeDisplay;
