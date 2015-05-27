/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxCollection = Backbone.View.extend({
        template: JST['app/scripts/templates/bounding_box_collection.hbs'],

        events: {
            'click .js-download': 'onDownload',
            'click .js-back': 'onBack'
        },

        onDownload: function(event) {
            event.preventDefault();

            this.renderBoundingBoxesDownloadView();
            this.renderActions();
        },

        onBack: function(event) {
            event.preventDefault();

            this.renderBoundingBoxesIndexView();
            this.renderActions();
        },

        initialize: function() {
          this._boundingBoxesIndexView = null;
          this._boundingBoxesDownloadView = null;
        },

        renderActions: function() {
            // TODO
        },

        renderBoundingBoxesDownloadView: function() {
          if(!this._boundingBoxesDownloadView) {
            this._boundingBoxesDownloadView = new B2pick.Views.BoundingBoxCollectionDownload({
              collection: this.collection
            });
          }

          var $boundingBoxes = this.$( '.js-bounding-boxes' );
          this._boundingBoxesDownloadView.setElement($boundingBoxes).render();
        },

        renderBoundingBoxesIndexView: function() {
            if(!this._boundingBoxesIndexView) {
              this._boundingBoxesIndexView = new B2pick.Views.BoundingBoxCollectionIndex({
                collection: this.collection
              });
            }

            var $boundingBoxes = this.$( '.js-bounding-boxes' );
            this._boundingBoxesIndexView.setElement($boundingBoxes).render();
        },

        render: function () {
            this.$el.html(this.template());

            this.renderBoundingBoxesIndexView();

            return this.$el;
        }

    });

})();
