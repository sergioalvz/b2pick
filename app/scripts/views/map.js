/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.Map = Backbone.View.extend({

        template: JST['app/scripts/templates/map.hbs'],

        mapOptions: {
            center: {
                lat: 43.3694869,
                lng: -5.8486578
            },
            zoom: 4
        },

        drawingManagerOptions: {
            drawingControl: true,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [ google.maps.drawing.OverlayType.RECTANGLE ]
            },
            rectangleOptions : {
                draggable: true,
                clickable: true,
                editable: true
            }
        },

        initialize: function() {
            this.map = null;
            this.drawingManager = null;

            this.listenTo(B2pick.mapChannel, 'map:boundingBoxCreated', this.onBoundingBoxCreated);
        },

        onBoundingBoxCreated: function(boundingBox) {
        },

        onRectangleComplete: function(rectangle) {
            B2pick.mapChannel.trigger('map:newBoundingBox', rectangle);
        },

        renderMapCanvas: function() {
            var $mapCanvas = this.$( '.js-map-canvas' );
            this.map = new google.maps.Map($mapCanvas[0], this.mapOptions);

            this.drawingManager = new google.maps.drawing.DrawingManager(this.drawingManagerOptions);
            this.drawingManager.setMap(this.map);

            google.maps.event.addListener(
                this.drawingManager,
                'rectanglecomplete',
                this.onRectangleComplete
            );
        },

        render: function () {
            this.$el.html(this.template());
            this.renderMapCanvas();
        }

    });

})();
