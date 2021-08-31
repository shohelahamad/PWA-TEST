window.onload = () => {
    'use strict';
    var storage = window.localStorage;
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
    document.getElementById('Brey').onclick = function() {
        storage.setItem('ort', JSON.stringify('Brey'));
        location.reload();
    }
    document.getElementById('Oberfell').onclick = function() {
        storage.setItem('ort', JSON.stringify('Oberfell'));
        location.reload();
    }

    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    let main_city_id = JSON.parse(window.localStorage.getItem("ort"));
    if (main_city_id) {
        link.href = `../PWA-TEST/images/Wappen_${main_city_id}.png`;
        document.querySelector('#my-manifest-placeholder').setAttribute('href', `../PWA-TEST/manifest_${main_city_id}.json`);
        document.querySelector('#apple-icon').setAttribute('href', `../PWA-TEST/images/Wappen_${main_city_id}.png`);
    } else {
        link.href = 'favicon.ico';
        document.querySelector('#my-manifest-placeholder').setAttribute('href', `../PWA-TEST/manifest_Oberfell.json`);
        document.querySelector('#apple-icon').setAttribute('href', `../PWA-TEST/images/Wappen_Oberfell.png`);

    }

}