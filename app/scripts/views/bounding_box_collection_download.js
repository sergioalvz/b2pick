/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxCollectionDownload = Backbone.View.extend({
        template: JST['app/scripts/templates/bounding_box_collection_download.hbs'],

        viewAttributes: function() {
          return {
            json: JSON.stringify(this.collection, null, 2)
          }
        },

        render: function () {
            this.$el.html(this.template(this.viewAttributes()));
            return this.$el;
        }

    });

})();
