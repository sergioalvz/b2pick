$(document).ready(function(){
	createMap();
});

var rectangles = [];
var currentRectangle = null;
var isMovingRectangle = false;

function createMap(){
	var centerPoint = new google.maps.LatLng(43.354810, -5.851805); // Oviedo, Asturias, Spain.
	var options = {
		zoom : 3,
		heading : 90,
		tilt : 45,
		center : centerPoint,
		mapTypeControl : false
	};

	// Initialize variables
	var map = new google.maps.Map($('#map_canvas')[0], options);
	var drawingManager = new google.maps.drawing.DrawingManager({
	  drawingControl: true,
	  drawingControlOptions: {
	    position: google.maps.ControlPosition.TOP_CENTER,
	    drawingModes: [google.maps.drawing.OverlayType.RECTANGLE]
	  },
	  rectangleOptions : {
	  	draggable: true,
	  	clickable: true,
	  	editable: true
	  }
	});
	drawingManager.setMap(map);

	google.maps.event.addListener(drawingManager, 'rectanglecomplete', function(rectangle){
		appendBoundingBoxInfo(rectangle);
		rectangles.push(rectangle);

		google.maps.event.addListener(rectangle, 'bounds_changed', function(){
			$('section.boxes').empty();
			$(rectangles).each(function(index, rectangle){
				appendBoundingBoxInfo(rectangle);
			});
		});
	});
}

function appendBoundingBoxInfo(rectangle){
	//Obtainig bouding boxes
	var swLong = rectangle.getBounds().getSouthWest().lng().toFixed(2);
	var swLat  = rectangle.getBounds().getSouthWest().lat().toFixed(2);
	var neLong = rectangle.getBounds().getNorthEast().lng().toFixed(2);
	var neLat  = rectangle.getBounds().getNorthEast().lat().toFixed(2); 
	
	//Creating element for the info panel
	var newBox = $(document.createElement('div'));
	$(newBox).addClass('box');
	$(newBox).append('<h3>Bounding Box</h3>');
	$(newBox).append('<p>Coordinates:</p>');
	$(newBox).append('<p>' + swLong + ', ' + swLat + ', ' + neLong + ', ' + neLat + '</p>');
	$('section.boxes').append(newBox);
}