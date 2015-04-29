/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.Sidebar = Backbone.View.extend({

        template: JST['app/scripts/templates/sidebar.hbs'],

        initialize: function() {
          this.boundingBoxCollection = new B2pick.Collections.BoundingBox();

          this.listenTo(B2pick.mapChannel, 'map:newBoundingBox', this.onNewBoundingBox);
        },

        onNewBoundingBox: function(rectangle) {
          var boundingBox = B2pick.Models.BoundingBox.buildFromGoogleRectangle(rectangle);
          this.boundingBoxCollection.add(boundingBox);

          B2pick.mapChannel.trigger('map:boundingBoxCreated', boundingBox);
        },

        renderBoundingBoxesCollectionView: function() {
          new B2pick.Views.BoundingBoxCollection({ collection: this.boundingBoxCollection })
              .setElement($( '.js-bounding-boxes' ))
              .render();
        },

        render: function () {
          this.$el.html(this.template());
          this.renderBoundingBoxesCollectionView();
        }
    });

})();
