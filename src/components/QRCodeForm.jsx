import { useState } from 'react';
import PropTypes from '../utils/PropTypes';

const QRCodeForm = ({ onGenerate, isLoading }) => {
  const [text, setText] = useState('https://example.com');
  const [settings, setSettings] = useState({
    color: '#000000',
    bgColor: '#FFFFFF',
    size: 300,
    errorCorrectionLevel: 'M',
  });
  const [activeTab, setActiveTab] = useState('text');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Please enter some text or URL');
      return;
    }
    setError('');
    onGenerate(text, settings);
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex space-x-4 border-b mb-5">
          <button
            type="button"
            onClick={() => setActiveTab('text')}
            className={`pb-2 px-1 ${activeTab === 'text' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
          >
            Text/URL
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`pb-2 px-1 ${activeTab === 'settings' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
          >
            Customize
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {activeTab === 'text' && (
            <div>              <label htmlFor="text" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Enter text or URL
              </label>
              <textarea
                id="text"
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter URL or text"
                className="input-field mb-2"
              />
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="space-y-4">
              <div>                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  QR Code Color
                </label>
                <div className="flex items-center">
                  <input
                    type="color"
                    value={settings.color}
                    onChange={(e) => setSettings({...settings, color: e.target.value})}
                    className="h-10 w-10 rounded mr-2 border"
                  />
                  <input
                    type="text"
                    value={settings.color}
                    onChange={(e) => setSettings({...settings, color: e.target.value})}
                    className="input-field"
                  />
                </div>
              </div>
              
              <div>                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Background Color
                </label>
                <div className="flex items-center">
                  <input
                    type="color"
                    value={settings.bgColor}
                    onChange={(e) => setSettings({...settings, bgColor: e.target.value})}
                    className="h-10 w-10 rounded mr-2 border"
                  />
                  <input
                    type="text"
                    value={settings.bgColor}
                    onChange={(e) => setSettings({...settings, bgColor: e.target.value})}
                    className="input-field"
                  />
                </div>
              </div>
              
              <div>                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Size (px)
                </label>
                <input
                  type="number"
                  value={settings.size}
                  onChange={(e) => setSettings({...settings, size: parseInt(e.target.value) || 200})}
                  min="100"
                  max="1000"
                  step="10"
                  className="input-field"
                />
              </div>
              
              <div>                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Error Correction Level
                </label>
                <select
                  value={settings.errorCorrectionLevel}
                  onChange={(e) => setSettings({...settings, errorCorrectionLevel: e.target.value})}
                  className="input-field"
                >
                  <option value="L">Low (7%)</option>
                  <option value="M">Medium (15%)</option>
                  <option value="Q">Quartile (25%)</option>
                  <option value="H">High (30%)</option>
                </select>
              </div>
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading || !text.trim()}
            className="btn-primary w-full flex justify-center items-center mt-4 pulse-button dark:shadow-blue-500/20"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : 'Generate QR Code'}
          </button>
          
          {error && (
            <div className="mt-3 text-sm text-red-500 dark:text-red-400">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
};

QRCodeForm.propTypes = {
  onGenerate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default QRCodeForm;
