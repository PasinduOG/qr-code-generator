# QR Code Generator

A beautiful and user-friendly QR code generator built with React, Vite, and Node.js.

![QR Code Generator](resources/QR%20Code%20Generator.png)

## Features

- Generate QR codes from text or URLs
- Customize QR code colors
- Adjust QR code size
- Choose error correction level
- Download generated QR codes as PNG images
- Beautiful, responsive user interface with Tailwind CSS

## Technologies Used

- **Frontend**: 
  - React
  - Vite
  - Tailwind CSS
  - HeadlessUI

- **Backend**: 
  - Node.js
  - Express
  - qrcode library

## Project Structure

```
├── public/                  # Public assets
├── src/
│   ├── components/          # React components
│   │   ├── Alert.jsx        # Alert notifications
│   │   ├── DarkModeToggle.jsx # Dark mode toggle
│   │   ├── Footer.jsx       # Page footer
│   │   ├── Header.jsx       # Page header
│   │   ├── LoadingSpinner.jsx # Loading indicator
│   │   ├── QRCodeDisplay.jsx # QR code display component
│   │   └── QRCodeForm.jsx   # Form for QR code generation
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Entry point
├── server.js                # Express server
├── server-package.json      # Backend dependencies
├── .gitignore               # Git ignore file
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

### Version Control

The project includes a comprehensive `.gitignore` file that excludes:

- **Dependencies**: Node modules and package manager files
- **Build outputs**: Distribution directories and local build files
- **Environment variables**: `.env` files with sensitive information
- **Editor-specific files**: Settings for various IDEs
- **Temporary files**: Logs, cache files, and backups
- **OS-specific files**: System-generated files
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/PasinduOG/qr-code-generator.git
cd qr-code-generator
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory (optional):

```bash
# .env
PORT=5000
```

> Note: The `.env` file is included in the `.gitignore` file and will not be committed to the repository.

### Running the Application

You can run both the frontend and backend servers concurrently with a single command:

```bash
npm run start
```

Alternatively, you can run them separately:

- Frontend (Vite development server):
```bash
npm run dev
```

- Backend (Express server):
```bash
npm run server
```

The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:5000`.

## API Endpoints

### Generate QR Code

```
POST /api/generate
```

**Request Body:**

```json
{
  "text": "https://example.com",
  "color": "#000000",
  "bgColor": "#FFFFFF",
  "size": 300,
  "errorCorrectionLevel": "M"
}
```

**Response:**

```json
{
  "qrCode": "data:image/png;base64,..."
}
```

## Demo

Check out the live demo of the application:

[Live Demo](https://pasinduog.github.io/qr-code-generator)

## Deployment

### Frontend Deployment

The frontend can be built using:

```bash
npm run build
```

This will create a `dist` directory with the production build that can be deployed to any static hosting service like GitHub Pages, Netlify, or Vercel.

### Backend Deployment

The backend is a Node.js Express application that can be deployed to any Node.js hosting service like Heroku, Railway, or Render.

Remember to set the environment variables on your hosting platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open-source and available for personal and commercial use under the MIT License.

## Acknowledgements

- [qrcode](https://www.npmjs.com/package/qrcode) - QR code generation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Frontend build tool
- [HeadlessUI](https://headlessui.dev/) - Unstyled, accessible UI components

## Author

- [PasinduOG](https://github.com/PasinduOG) - Developer
