// Offline Fallback System
(function() {
    'use strict';
    
    // Check if we're online
    function isOnline() {
        return navigator.onLine;
    }
    
    // Load offline resources if online resources fail
    function loadOfflineResources() {
        console.log('Loading offline resources...');
        
        // Load offline TailwindCSS
        if (!document.querySelector('link[href*="tailwind.min.css"]')) {
            const tailwindLink = document.createElement('link');
            tailwindLink.rel = 'stylesheet';
            tailwindLink.href = 'assets/css/tailwind.min.css';
            document.head.appendChild(tailwindLink);
        }
        
        // Ensure Font Awesome is loaded
        if (!document.querySelector('link[href*="fontawesome"]')) {
            const faLink = document.createElement('link');
            faLink.rel = 'stylesheet';
            faLink.href = 'assets/css/fontawesome.min.css';
            document.head.appendChild(faLink);
        }
        
        // Ensure Inter font is loaded
        if (!document.querySelector('link[href*="inter.css"]')) {
            const interLink = document.createElement('link');
            interLink.rel = 'stylesheet';
            interLink.href = 'assets/fonts/inter.css';
            document.head.appendChild(interLink);
        }
    }
    
    // Test if CDN resources are available
    function testCDNResources() {
        // Test TailwindCSS
        const testTailwind = new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.tailwindcss.com';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            script.style.display = 'none';
            document.head.appendChild(script);
            
            // Timeout after 3 seconds
            setTimeout(() => resolve(false), 3000);
        });
        
        // Test Font Awesome
        const testFA = new Promise((resolve) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
            link.onload = () => resolve(true);
            link.onerror = () => resolve(false);
            link.style.display = 'none';
            document.head.appendChild(link);
            
            // Timeout after 3 seconds
            setTimeout(() => resolve(false), 3000);
        });
        
        Promise.all([testTailwind, testFA]).then(results => {
            const [tailwindLoaded, faLoaded] = results;
            
            if (!tailwindLoaded || !faLoaded) {
                console.log('CDN resources failed to load, switching to offline mode');
                loadOfflineResources();
            } else {
                console.log('CDN resources loaded successfully');
            }
        });
    }
    
    // Initialize offline fallback system
    function init() {
        if (!isOnline()) {
            console.log('Offline detected, loading local resources');
            loadOfflineResources();
        } else {
            // Test CDN availability even when online
            testCDNResources();
        }
        
        // Listen for online/offline events
        window.addEventListener('online', () => {
            console.log('Back online');
            location.reload(); // Reload to use CDN resources
        });
        
        window.addEventListener('offline', () => {
            console.log('Gone offline, local resources should be available');
            loadOfflineResources();
        });
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();