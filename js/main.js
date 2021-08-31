window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
    var myDynamicManifest = {
        "name": "meinOrt Brey",
        "short_name": "brey",
        "description": "meinOrt Brey",
        "start_url": "https://shohelahamad.github.io/PWA-TEST/index.html",
        "background_color": "#000000",
        "theme_color": "#0f4a73",
        "icons": [{
            "src": "https://shohelahamad.github.io/PWA-TEST/images/Wappen_Brey.png",
            "sizes": "256x256",
            "type": "image/png"
        }]
    }
    const stringManifest = JSON.stringify(myDynamicManifest);
    const blob = new Blob([stringManifest], { type: 'application/json' });
    const manifestURL = URL.createObjectURL(blob);
    document.querySelector('#my-manifest-placeholder').setAttribute('href', manifestURL);
}