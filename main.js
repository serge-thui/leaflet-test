console.log('hello');

function init(){
    const val = {
        lati: 50.359,
        lng: 3.524
    }

    const zoomlevel = 10 ;

    const map = L.map('mapid').setView([val.lati, val.lng], zoomlevel);

    const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZHJhZ29zZXIiLCJhIjoiY2t2ODYzZWxtMXgzNzJ1czMwYjQzb3QzYSJ9.mpL153S2L-ReRzS-G2zk1g'
    });

    mainLayer.addTo(map);
}

