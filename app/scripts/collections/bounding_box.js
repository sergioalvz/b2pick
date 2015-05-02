/*global B2pick, Backbone*/

B2pick.Collections = B2pick.Collections || {};

(function () {
    'use strict';

    B2pick.Collections.BoundingBox = Backbone.Collection.extend({

        model: B2pick.Models.BoundingBox,

        initialize: function() {
            this.on('removeMe', this.onRemoveBoundingBox);
        },

        onRemoveBoundingBox: function(boundingBox) {
          this.remove(boundingBox);
        }

    });

})();
