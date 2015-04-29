/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxCollection = Backbone.View.extend({

        template: JST['app/scripts/templates/bounding_box_collection.hbs'],

        render: function () {
            this.$el.html(this.template());
        }

    });

})();
