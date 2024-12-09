let mapOptions = {
    center: [-7.051100, 110.392865],
    zoom: 10
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

// let customIcon = {
//     iconUrl: "pin.svg",
//     iconSize: [40, 40]
// }

// let myIcon = L.icon(customIcon);
//let myIcon = L.divIcon();

// let iconOptions = {
//     title: "company name",
//     draggable: true,
//     icon: myIcon
// }

let circle = new L.circle([-7.05135, 110.43933], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
});
circle.addTo(map)

let marker = new L.Marker([-7.12734, 110.40504]);
marker.addTo(map);
marker.bindPopup("Petai").openPopup();

let popup = L.popup().setLatLng([-7.051187, 110.40]).setContent("<p>new popup</br> more complicated</p>").openOn(map);

//http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png