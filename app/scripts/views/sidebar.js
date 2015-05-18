/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.Sidebar = Backbone.View.extend({

        template: JST['app/scripts/templates/sidebar.hbs'],

        initialize: function() {
          this.boundingBoxCollection = new B2pick.Collections.BoundingBox();

          B2pick.mapChannel.reply('map:newBoundingBox', this.onNewBoundingBox());
        },

        onNewBoundingBox: function() {
          var that = this;
          return function(rectangle) {
              var boundingBox = B2pick.Models.BoundingBox.buildFromGoogleRectangle(rectangle);
              that.boundingBoxCollection.add(boundingBox);

              return boundingBox;
          };
        },

        renderBoundingBoxesCollectionView: function() {
          new B2pick.Views.BoundingBoxCollection({ collection: this.boundingBoxCollection })
              .setElement($( '.js-bounding-box-collection' ))
              .render();
        },

        render: function () {
          this.$el.html(this.template());
          this.renderBoundingBoxesCollectionView();
        }
    });

})();
