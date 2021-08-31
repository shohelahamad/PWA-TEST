window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
    document.querySelector('#my-manifest-placeholder').setAttribute('href', '../mainfest_Brey.json');
}