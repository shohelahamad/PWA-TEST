window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }

    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    let main_city_id = true;
    // let main_city_id = JSON.parse(window.localStorage.getItem("main_city"));
    if (main_city_id) {
        link.href = '../PWA-TEST/images/Wappen_Brey.png';
    } else {
        link.href = 'favicon.ico';
    }

    document.querySelector('#my-manifest-placeholder').setAttribute('href', '../PWA-TEST/mainfest_Brey.json');
}