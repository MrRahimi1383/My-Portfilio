// Tailwind CSS Configuration for Offline Use
window.tailwind = {
    config: {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    primary: {
                        50: '#f0f9ff',
                        500: '#667eea',
                        600: '#5a67d8',
                        700: '#4c51bf',
                    },
                    secondary: {
                        500: '#764ba2',
                        600: '#6b46c1',
                    }
                }
            }
        }
    }
};

// Basic utility functions for offline compatibility
if (typeof window !== 'undefined' && !window.tailwindLoaded) {
    // Mark as loaded to prevent multiple loads
    window.tailwindLoaded = true;
    
    // Add basic responsive classes
    const style = document.createElement('style');
    style.textContent = `
        /* Additional responsive utilities */
        @media (max-width: 640px) {
            .sm\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .sm\\:text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        }
        
        /* Custom animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out;
        }
        
        /* Custom gradients */
        .bg-gradient-purple {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .dark .bg-gradient-purple {
            background: linear-gradient(135deg, #4c51bf 0%, #6b46c1 100%);
        }
    `;
    document.head.appendChild(style);
}