/*global B2pick, Backbone*/

B2pick.Models = B2pick.Models || {};

(function () {
    'use strict';

    B2pick.Models.BoundingBox = Backbone.Model.extend({

        defaults: {
          name: 'Bounding box'
        }

    },{
        buildFromGoogleRectangle: function(rectangle) {
          var attributes = {
              southWestLatitude:  rectangle.getBounds().getSouthWest().lat(),
              southWestLongitude: rectangle.getBounds().getSouthWest().lng(),
              northEastLatitude:  rectangle.getBounds().getNorthEast().lat(),
              northEastLongitude: rectangle.getBounds().getNorthEast().lng()
          };

          return new B2pick.Models.BoundingBox(attributes);
        }
    });
})();
