/*global B2pick, Backbone*/

B2pick.Models = B2pick.Models || {};

(function () {
    'use strict';

    B2pick.Models.LatLng = Backbone.Model.extend({

    }, {
        parseFromGoogleLatLng: function(googleLatLng) {
            return new B2pick.Models.LatLng({
                lat: googleLatLng.lat(),
                lng: googleLatLng.lng()
            });
        }
    });
})();
