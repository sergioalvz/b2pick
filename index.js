$(document).ready(function(){
	createMap();
});

var boundingBoxesCounter = 0;

function createMap(){
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

	google.maps.event.addListener(drawingManager, 'rectanglecomplete', rectangleCompleteHandler);
}

function rectangleCompleteHandler(rectangle){
	boundingBoxesCounter += 1;

	var swLong = rectangle.getBounds().getSouthWest().lng().toFixed(2);
	var swLat  = rectangle.getBounds().getSouthWest().lat().toFixed(2);
	var neLong = rectangle.getBounds().getNorthEast().lng().toFixed(2);
	var neLat  = rectangle.getBounds().getNorthEast().lat().toFixed(2); 
	
	var newBox = $(document.createElement('div'));
	$(newBox).addClass('box');
	$(newBox).attr('id', 'box_' + boundingBoxesCounter);
	$(newBox).append('<h3>Box</h3>');
	$(newBox).append('<p>Coordinates for Twitter:</p>');
	$(newBox).append('<p>' + swLong + ', ' + swLat + ', ' + neLong + ', ' + neLat + '</p>');

	$('section.boxes').append(newBox);

	google.maps.event.addListener(rectangle, 'click', function(event){
		console.log($('#box_1'));
	});
}