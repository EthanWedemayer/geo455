
var lrmap = L.map('map').setView([35, -95], 5);
        L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw')
        .addTo(lrmap);
        
var data = [
{"from":[41.84012, -87.81687],"to":[43.06729126, -89.41812134],"labels":[Cook County, Dane County],"color":"#9e9ac8","value":407.0},
{"from":[42.32324, -88.00356],"to":[43.06729126, -89.41812134],"labels":[Lake County, Dane County],"color":"#bcbddc","value":103.0},
{"from":[42.33626, -89.16087],"to":[43.06729126, -89.41812134],"labels":[Winnebago County, Dane County],"color":"#9e9ac8","value":492.0},
{"from":[43.96954, -89.7704],"to":[43.06729126, -89.41812134],"labels":[Adams County, Dane County],"color":"#9e9ac8","value":260.0},
{"from":[43.46661, -89.33373],"to":[43.06729126, -89.41812134],"labels":[Columbia County, Dane County],"color":"#54278f","value":10219.0},
{"from":[43.41629, -88.7075],"to":[43.06729126, -89.41812134],"labels":[Dodge County, Dane County],"color":"#756bb1","value":2340.0},
{"from":[43.75359, -88.48827],"to":[43.06729126, -89.41812134],"labels":[Fond du Lac County, Dane County],"color":"#9e9ac8","value":269.0},
{"from":[42.86748, -90.70622],"to":[43.06729126, -89.41812134],"labels":[Grant County, Dane County],"color":"#9e9ac8","value":408.0},
{"from":[42.68001, -89.60222],"to":[43.06729126, -89.41812134],"labels":[Green County, Dane County],"color":"#54278f","value":5452.0},
{"from":[43.80038, -89.04486],"to":[43.06729126, -89.41812134],"labels":[Green Lake County, Dane County],"color":"#bcbddc","value":111.0},
{"from":[43.00047, -90.13538],"to":[43.06729126, -89.41812134],"labels":[Iowa County, Dane County],"color":"#54278f","value":3253.0},
{"from":[43.02081, -88.77586],"to":[43.06729126, -89.41812134],"labels":[Jefferson County, Dane County],"color":"#54278f","value":5623.0},
{"from":[43.92461, -90.11379],"to":[43.06729126, -89.41812134],"labels":[Juneau County, Dane County],"color":"#bcbddc","value":159.0},
{"from":[42.6605, -90.13172],"to":[43.06729126, -89.41812134],"labels":[Lafayette County, Dane County],"color":"#756bb1","value":520.0},
{"from":[43.81958, -89.39875],"to":[43.06729126, -89.41812134],"labels":[Marquette County, Dane County],"color":"#756bb1","value":542.0},
{"from":[43.00713, -87.96677],"to":[43.06729126, -89.41812134],"labels":[Milwaukee County, Dane County],"color":"#756bb1","value":878.0},
{"from":[44.41609, -88.46494],"to":[43.06729126, -89.41812134],"labels":[Outagamie County, Dane County],"color":"#bcbddc","value":233.0},
{"from":[43.38404, -87.95082],"to":[43.06729126, -89.41812134],"labels":[Ozaukee County, Dane County],"color":"#bcbddc","value":139.0},
{"from":[43.37564, -90.42948],"to":[43.06729126, -89.41812134],"labels":[Richland County, Dane County],"color":"#9e9ac8","value":463.0},
{"from":[42.67123, -89.07156],"to":[43.06729126, -89.41812134],"labels":[Rock County, Dane County],"color":"#54278f","value":9427.0},
{"from":[43.42666, -89.94822],"to":[43.06729126, -89.41812134],"labels":[Sauk County, Dane County],"color":"#54278f","value":4377.0},
{"from":[42.66849, -88.5419],"to":[43.06729126, -89.41812134],"labels":[Walworth County, Dane County],"color":"#756bb1","value":686.0},      
{"from":[43.36848, -88.23077],"to":[43.06729126, -89.41812134],"labels":[Washington County, Dane County],"color":"#9e9ac8","value":358.0},
{"from":[43.01822, -88.30451],"to":[43.06729126, -89.41812134],"labels":[Waukesha County, Dane County],"color":"#756bb1","value":1506.0},
{"from":[44.06888, -88.64466],"to":[43.06729126, -89.41812134],"labels":[Winnebago County, Dane County],"color":"#bcbddc","value":165.0},
{"from":[44.45533, -90.04155],"to":[43.06729126, -89.41812134],"labels":[Wood County, Dane County],"color":"#bcbddc","value":118.0}];


data = data.map(item => { return {...item, value: parseInt(Math.random()*20)}});

var migrationLayer = new L.migrationLayer({
            map: lrmap,
            data: data,
            pulseRadius:30,
            pulseBorderWidth:3,
            arcWidth:1,
            arcLabel:true,
            arcLabelFont:'10px sans-serif',
            maxWidth:10
            }
        );
        migrationLayer.addTo(lrmap);


        function hide(){
            migrationLayer.hide();
        }
        function show(){
            migrationLayer.show();
        }
        function play(){
            migrationLayer.play();
        }
        function pause(){
            migrationLayer.pause();
        }
        
   