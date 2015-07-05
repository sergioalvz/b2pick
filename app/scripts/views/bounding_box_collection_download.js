/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxCollectionDownload = Backbone.View.extend({
        template: JST['app/scripts/templates/bounding_box_collection_download.hbs'],

        initialize: function() {
            this.listenTo(this.collection, 'add remove', this.render);
        },

        toTwitter: function() {
            var coordinates = this.collection.chain().map(function(boundingBox) {
              return [
                boundingBox.get('southWestLongitude').toFixed(2),
                boundingBox.get('southWestLatitude').toFixed(2),
                boundingBox.get('northEastLongitude').toFixed(2),
                boundingBox.get('northEastLatitude').toFixed(2)
              ];
            }).flatten().value().join(',');

            return '&locations=' + coordinates;
        },

        viewAttributes: function() {
            return {
                hasBoundingBoxes: !this.collection.isEmpty(),
                json: JSON.stringify(this.collection, null, 2),
                twitter: this.toTwitter()
            };
        },

        render: function () {
            this.$el.html(this.template(this.viewAttributes()));
            return this.$el;
        }

    });

})();
