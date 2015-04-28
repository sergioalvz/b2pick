/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.Map = Backbone.View.extend({

        template: JST['app/scripts/templates/map.hbs'],

        events: {},

        mapOptions: {
            center: {
                lat: 43.3694869,
                lng: -5.8486578
            },
            zoom: 4
        },

        initialize: function() {
            this.map = null;
        },

        renderMapCanvas: function() {
            var $mapCanvas = this.$( '.js-map-canvas' );
            this.map = new google.maps.Map($mapCanvas[0], this.mapOptions);
        },

        render: function () {
            this.$el.html(this.template());
            this.renderMapCanvas();
        }

    });

})();
