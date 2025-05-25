import express from 'express';
import QRCode from 'qrcode';
import cors from 'cors';
import { config } from 'dotenv';
import process from 'process';
// Load environment variables from .env file
config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Route to generate QR code
app.post('/api/generate', async (req, res) => {
    try {
        const { text, color, bgColor, size, errorCorrectionLevel } = req.body;

        // Validate inputs
        if (!text) {
            return res.status(400).json({ error: 'Text is required' });
        }

        // Validate color formats if provided
        if (color && !/^#[0-9A-F]{6}$/i.test(color)) {
            return res.status(400).json({ error: 'Invalid color format. Use hexadecimal format (e.g. #FF0000)' });
        }

        if (bgColor && !/^#[0-9A-F]{6}$/i.test(bgColor)) {
            return res.status(400).json({ error: 'Invalid background color format. Use hexadecimal format (e.g. #FFFFFF)' });
        }

        // Validate size
        if (size && (isNaN(size) || size < 100 || size > 1000)) {
            return res.status(400).json({ error: 'Size must be a number between 100 and 1000' });
        }

        // Validate error correction level
        const validErrorLevels = ['L', 'M', 'Q', 'H'];
        if (errorCorrectionLevel && !validErrorLevels.includes(errorCorrectionLevel)) {
            return res.status(400).json({
                error: `Invalid error correction level. Must be one of: ${validErrorLevels.join(', ')}`
            });
        }

        // Options for QR code generation
        const options = {
            color: {
                dark: color || '#000000',
                light: bgColor || '#ffffff'
            },
            width: size || 300,
            errorCorrectionLevel: errorCorrectionLevel || 'M',
            margin: 1
        };

        // Generate QR code as data URL
        const qrDataURL = await QRCode.toDataURL(text, options);

        res.json({ qrCode: qrDataURL });
    } catch (error) {
        console.error('Error generating QR code:', error);

        // More specific error handling
        if (error.name === 'TypeError') {
            res.status(400).json({ error: 'Invalid QR code parameters' });
        } else {
            res.status(500).json({ error: 'Failed to generate QR code: ' + error.message });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
