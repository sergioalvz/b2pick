/*global B2pick, Backbone*/

B2pick.Models = B2pick.Models || {};

(function () {
    'use strict';

    B2pick.Models.BoundingBox = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
