import PropTypes from '../utils/PropTypes';

const Alert = ({ type, message, onClose }) => {
  const alertStyles = {
    success: 'bg-green-50 text-green-800 border-green-400',
    error: 'bg-red-50 text-red-800 border-red-400',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-400',
    info: 'bg-blue-50 text-blue-800 border-blue-400'
  };
  
  return (
    <div className={`p-4 mb-4 border-l-4 rounded-md ${alertStyles[type] || alertStyles.info}`}>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p>{message}</p>
        </div>
        {onClose && (
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close alert"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

export default Alert;
