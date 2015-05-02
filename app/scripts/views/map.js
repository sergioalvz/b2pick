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
            }
        },

        initialize: function() {
            this.map = null;
            this.drawingManager = null;
        },

        onRectangleComplete: function() {
            var that = this;

            return function(rectangle) {
                var boundingBox = B2pick.mapChannel.request('map:newBoundingBox', rectangle);

                that.listenTo(boundingBox, 'removeMe', that.onRemoveBoundingBox);

                that.boundingBoxRectangles = that.boundingBoxRectangles || [];
                that.boundingBoxRectangles.push({
                    boundingBox: boundingBox,
                    rectangle: rectangle
                });
            };
        },

        onRemoveBoundingBox: function(boundingBox) {
          var boundingBoxRectangle = _.find(this.boundingBoxRectangles, function(boundingBoxRectangle) {
            return boundingBoxRectangle.boundingBox.cid === boundingBox.cid;
          });

          boundingBoxRectangle.rectangle.setMap(null);
        },

        renderMapCanvas: function() {
            var $mapCanvas = this.$( '.js-map-canvas' );
            this.map = new google.maps.Map($mapCanvas[0], this.mapOptions);

            this.drawingManager = new google.maps.drawing.DrawingManager(this.drawingManagerOptions);
            this.drawingManager.setMap(this.map);

            google.maps.event.addListener(
                this.drawingManager,
                'rectanglecomplete',
                this.onRectangleComplete()
            );
        },

        render: function () {
            this.$el.html(this.template());
            this.renderMapCanvas();
        }

    });

})();
