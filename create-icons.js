// Node.js script to create PNG icons
// Run with: node create-icons.js

const fs = require('fs');
const path = require('path');

// Simple PNG header for a 1x1 transparent pixel (we'll create larger ones)
function createSimplePNG(width, height, r = 102, g = 126, b = 234) {
    // This is a simplified approach - in a real scenario, you'd use a proper image library
    // For now, we'll create a basic colored square
    
    const canvas = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:rgb(${r},${g},${b});stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(118,75,162);stop-opacity:1" />
            </linearGradient>
        </defs>
        <circle cx="${width/2}" cy="${height/2}" r="${width/2 - 8}" fill="url(#grad)" stroke="white" stroke-width="8"/>
        <g fill="white" stroke="white" stroke-width="${width * 0.024}">
            <path d="M${width*0.35} ${height*0.35} L${width*0.27} ${height*0.43} L${width*0.27} ${height*0.57} L${width*0.35} ${height*0.65}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <path d="M${width*0.65} ${height*0.35} L${width*0.73} ${height*0.43} L${width*0.73} ${height*0.57} L${width*0.65} ${height*0.65}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <path d="M${width*0.55} ${height*0.31} L${width*0.45} ${height*0.69}" stroke-linecap="round" fill="none"/>
        </g>
        <text x="${width/2}" y="${height*0.82}" font-family="Arial" font-size="${width*0.06}" font-weight="bold" text-anchor="middle" fill="white">PORTFOLIO</text>
    </svg>`;
    
    return canvas;
}

// Create the SVG files
const icon192 = createSimplePNG(192, 192);
const icon512 = createSimplePNG(512, 512);

// Save as SVG files (which can be used as icons)
fs.writeFileSync(path.join(__dirname, 'assets', 'icons', 'icon-192.svg'), icon192);
fs.writeFileSync(path.join(__dirname, 'assets', 'icons', 'icon-512.svg'), icon512);

console.log('Icon SVG files created successfully!');
console.log('To convert to PNG, use an online converter or image editing software.');