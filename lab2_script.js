var mymap = L.map("map").setView([46.11426627827088, -90.95129534149272], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXRoYW53ZWRlbWF5ZXIiLCJhIjoiY2t6NG8xZDI4MGliYjMxbzJoZXNtZjd0ZyJ9.sBlw4CXwQ0wHTJbIZXdtbA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([46.108159454746456, -90.95031876990967])
    .addTo(mymap)
    .bindPopup("<b>Kelly Lake</b><br>This is a great fishing spot that my family loves to spend hours per day at.")
    .openPopup();

L.marker([46.09195327060751, -90.99510989366846])
    .addTo(mymap)
    .bindPopup("<b>Meadow Lake</b><br>This is where my family friend's cabin is. This lake has some of the best musky fishing I have ever seen.")
    .openPopup();

L.marker([46.10540248776566, -90.95873491581496])
    .addTo(mymap)
    .bindPopup("<b>Hunting Land</b><br>This is a circle showing the area of public forest that my family hunts on.")
    .openPopup();

L.marker([46.11426627827088, -90.95129534149272])
    .addTo(mymap)
    .bindPopup("<b>Wedemayer Family Cabin</b><br>This is location of my family cabin. It is my favorite place to visit because I always get to experience good family, friends, fishing, atving, and relaxing.<br>This polygon that I inserted into the map shows a rough estimate of our property's borders.")
    .openPopup();

var polygon = L.polygon([
    [46.11446744685247, -90.95012822165071],
    [46.11447796498299, -90.95382281437931],
    [46.11411771786959, -90.95402385484606],
    [46.114002017567124, -90.95015856738156]
]).addTo(mymap);

var circle = L.circle([46.10540248776566, -90.95873491581496], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 780
}).addTo(mymap);