/*global B2pick, Backbone*/

B2pick.Collections = B2pick.Collections || {};

(function () {
    'use strict';

    B2pick.Collections.BoundingBox = Backbone.Collection.extend({

        model: B2pick.Models.BoundingBox

    });

})();
