$(document).ready(function(){
	var map = new Map();
	map.create();
});

function Map(){
	this.map = null;
	this.drawingManager = null;
}

Map.prototype.create = function(){
	var centerPoint = new google.maps.LatLng(43.354810, -5.851805); // Oviedo, Asturias, Spain.
	var options = {
		zoom : 3,
		heading : 90,
		tilt : 45,
		center : centerPoint,
		mapTypeControl : false,
		zoomControl : true,
		zoomControlOptions : {
			style : google.maps.ZoomControlStyle.LARGE
		},
		streetViewControl: false,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};

	// Initialize variables
	this.map = new google.maps.Map($('#map_canvas')[0], options);
	this.drawingManager = new google.maps.drawing.DrawingManager({
	  drawingControl: true,
	  drawingControlOptions: {
	    position: google.maps.ControlPosition.TOP_CENTER,
	    drawingModes: [google.maps.drawing.OverlayType.RECTANGLE]
	  }
	});
	this.drawingManager.setMap(this.map);

	google.maps.event.addListener(this.drawingManager, 'rectanglecomplete', function(rectangle) {
		var swLong = rectangle.getBounds().getSouthWest().lng().toFixed(2);
		var swLat  = rectangle.getBounds().getSouthWest().lat().toFixed(2);
		var neLong = rectangle.getBounds().getNorthEast().lng().toFixed(2);
		var neLat  = rectangle.getBounds().getNorthEast().lat().toFixed(2); 
		
  		alert(swLong + "," + swLat + "@@" + neLong + "," + neLat);
	});
};