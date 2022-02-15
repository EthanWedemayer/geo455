var mymap = L.map("map").setView([40.58972180477551, -98.5725999219944], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXRoYW53ZWRlbWF5ZXIiLCJhIjoiY2t6NG8xZDI4MGliYjMxbzJoZXNtZjd0ZyJ9.sBlw4CXwQ0wHTJbIZXdtbA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/navigation-day-v1',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([37.78480186586926, -119.5925279455094])
    .addTo(mymap)
    .bindPopup("<b>Yosemite National Park")
    .openPopup();

L.marker([36.50094126571585, -118.56104126067243])
    .addTo(mymap)
    .bindPopup("<b>Sequoia National Park")
    .openPopup();

L.marker([43.8318394798315, -102.34365450879724])
    .addTo(mymap)
    .bindPopup("<b>Badlands National Park")
    .openPopup();

L.marker([44.388479530902444, -110.59383175846068])
    .addTo(mymap)
    .bindPopup("<b>Yellowstone National Park")
    .openPopup();

L.marker([48.742287387013334, -113.7882052769047])
    .addTo(mymap)
    .bindPopup("<b>Glacier National Park")
    .openPopup();

L.marker([36.389371393373324, -117.08866409828352])
    .addTo(mymap)
    .bindPopup("<b>Death Valley National Park")
    .openPopup();

L.marker([32.78778145503418, -106.32574597521207])
    .addTo(mymap)
    .bindPopup("<b>White Sands National Park")
    .openPopup();

L.marker([36.162095306888666, -112.12367440306447])
    .addTo(mymap)
    .bindPopup("<b>Grand Canyon National Park")
    .openPopup();

L.marker([37.28486911902632, -113.02882430719481])
    .addTo(mymap)
    .bindPopup("<b>Zion National Park")
    .openPopup();

L.marker([38.72050226995045, -109.59251663872159])
    .addTo(mymap)
    .bindPopup("<b>Arches National Park")
    .openPopup();

L.marker([37.579827307926934, -112.19068205164884])
    .addTo(mymap)
    .bindPopup("<b>Bryce Canyon National Park")
    .openPopup();

L.marker([25.311966803268287, -80.90385666989124])
    .addTo(mymap)
    .bindPopup("<b>Everglades National Park")
    .openPopup();
