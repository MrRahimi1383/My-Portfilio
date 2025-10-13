# Assets Folder

This folder contains all the offline resources needed to run the portfolio without an internet connection.

## 📁 Folder Structure

```
assets/
├── css/
│   ├── tailwind.min.css      # TailwindCSS framework (offline version)
│   └── fontawesome.min.css   # Font Awesome icons (offline version)
├── fonts/
│   ├── inter.css             # Inter font family CSS
│   ├── fa-solid-900.woff2    # Font Awesome solid icons font
│   ├── fa-brands-400.woff2   # Font Awesome brand icons font
│   └── fa-regular-400.woff2  # Font Awesome regular icons font
└── js/
    ├── tailwind-config.js    # TailwindCSS configuration
    └── offline-fallback.js   # Offline detection and fallback system

```

## 🌐 Online vs Offline

The portfolio is designed to work both online and offline:

### Online Mode (Primary)
- Uses CDN links for faster loading
- TailwindCSS from cdn.tailwindcss.com
- Font Awesome from cdnjs.cloudflare.com
- Google Fonts from fonts.googleapis.com

### Offline Mode (Fallback)
- Automatically detects when CDN resources fail
- Switches to local assets in this folder
- Maintains full functionality without internet
- Service worker caches resources for offline use

## 🔧 How It Works

1. **Automatic Detection**: The `offline-fallback.js` script detects if CDN resources are available
2. **Smart Fallback**: If CDN fails, local resources are loaded automatically
3. **Service Worker**: Caches all resources for true offline functionality
4. **Seamless Experience**: Users won't notice the difference between online/offline modes

## 📦 Included Resources

### CSS Frameworks
- **TailwindCSS**: Complete utility-first CSS framework
- **Font Awesome**: All essential icons for the portfolio
- **Inter Font**: Modern, readable font family

### JavaScript
- **Tailwind Config**: Custom configuration for dark mode and colors
- **Offline Fallback**: Smart resource loading system

### Fonts
- **Font Awesome Fonts**: Solid, brands, and regular icon fonts
- **Inter Font**: Multiple weights (300, 400, 500, 600, 700)

## 🚀 Benefits

- ✅ **Works Offline**: Full functionality without internet
- ✅ **Fast Loading**: Local resources load instantly
- ✅ **Reliable**: No dependency on external CDNs
- ✅ **Automatic**: No manual switching required
- ✅ **Complete**: All features work in offline mode

## 📝 Notes

- The online CDN links are kept as primary for better performance when online
- Local assets serve as fallback when CDNs are unavailable
- Service worker provides additional caching for better offline experience
- All fonts and icons are included for complete offline functionality