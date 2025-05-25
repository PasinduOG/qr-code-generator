const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-700">Generating QR code...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
