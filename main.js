/* Vienna Sightseeing Beispiel */

// Stephansdom Objekt
let stephansdom = {
    lat: 48.208493,
    lng: 16.373118,
    zoom: 12,
    title: "Domkirche St. Stephan",
};

// Karte initialisieren
let map = L.map("map").setView([stephansdom.lat, stephansdom.lng], stephansdom.zoom);


// Overlays definieren 
let overlays = {
sights: L.featureGroup().addTo(map),
lines: L.featureGroup ().addTo(map),
stops: L.featureGroup().addTo(map),
zones: L.featureGroup ().addTo(map),
hotels:L.featureGroup ().addTo(map),
}

// Layercontrol 
L.control.layers({
    "BasemapAT": L.tileLayer.provider('BasemapAT.basemap'),
    "BasemapAT grau": L.tileLayer.provider('BasemapAT.grau'),
    "BasemapAT overlay": L.tileLayer.provider('BasemapAT.overlay'),
    "BasemapAT terrain": L.tileLayer.provider('BasemapAT.terrain'),
    "BasemapAT surface": L.tileLayer.provider('BasemapAT.surface'),
    "BasemapAT highdpi": L.tileLayer.provider('BasemapAT.highdpi'),
    "BasemapAT orthofoto": L.tileLayer.provider('BasemapAT.orthofoto').addTo(map),
}, {
"Sehenswürdigkeiten": overlays.sights,
"Vienna Sightseeing Linien": overlays.lines,
"Vienna Sightseeing Haltestellen": overlays.stops,
"Fußgängerzonen": overlays.zones,
"Hotels und Unterkünfte": overlays.hotels
}).addTo(map);

// Maßstab in Karte 
L.control.scale({
imperial: false 
}).addTo(map);

// Sehenswürdigkeiten Standorte Wien 
async function loadSights(url) {
    console.log(url);
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log (jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href='https://data.wien.gv.at'>Stadt Wien</a>"
    }).addTo(overlays.sights);
}

// Liniennetz Wien
async function loadLines(url) {
    console.log(url);
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log (jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href='https://data.wien.gv.at'>Stadt Wien</a>"
    }).addTo(overlays.lines);
}

// Haltestellen Wien
async function loadStops(url) {
    console.log(url);
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log (jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href='https://data.wien.gv.at'>Stadt Wien</a>"
    }).addTo(overlays.stops);
}
// Fußgängerzonen Wien
async function loadZones(url) {
    console.log(url);
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log (jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href='https://data.wien.gv.at'>Stadt Wien</a>"
    }).addTo(overlays.zones);
}


// Hotels und Unterkünfte Wien
async function loadHotels(url) {
    console.log(url);
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log (jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href='https://data.wien.gv.at'>Stadt Wien</a>"
    }).addTo(overlays.hotels);
}

// GeoJSON laden und visualisieren
loadSights("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SEHENSWUERDIGOGD&srsName=EPSG:4326&outputFormat=json")
loadLines("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TOURISTIKLINIEVSLOGD&srsName=EPSG:4326&outputFormat=json")
loadZones("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:FUSSGEHERZONEOGD&srsName=EPSG:4326&outputFormat=json")
loadStops("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TOURISTIKHTSVSLOGD&srsName=EPSG:4326&outputFormat=json")
loadHotels("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:UNTERKUNFTOGD&srsName=EPSG:4326&outputFormat=json")