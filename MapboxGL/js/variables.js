var centerLON = 40.717799
var centerLAT = -73.945360
var startingVol = .19
var audioElement = document.getElementById('myTune');
var map, mapStyle;
var mapInitZoom = 8
var currentScene = 1
var scene1duration = 10000
var camSpeed = .07
var changeTextscene1;
var currentMeter, destinationMeter, steps;
var zoomingIn = true;
var places, geojson, geojsonTwo;
var text1;
var p5voice = true;
var speaker;
var scene1 = true
var scene3Markers = []
//var tickingUp;
