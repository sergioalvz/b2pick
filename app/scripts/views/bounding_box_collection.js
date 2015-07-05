/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxCollection = Backbone.View.extend({
        STATUS: {
          INDEX: 'index',
          DOWNLOAD: 'download'
        },

        template: JST['app/scripts/templates/bounding_box_collection.hbs'],

        events: {
            'click .js-download': 'onDownload',
            'click .js-back': 'onBack'
        },

        onDownload: function(event) {
            event.preventDefault();

            this._status = this.STATUS.DOWNLOAD;

            this.renderBoundingBoxesView('Download');
            this.renderActions();
        },

        onBack: function(event) {
            event.preventDefault();

            this._status = this.STATUS.INDEX;

            this.renderBoundingBoxesView('Index');
            this.renderActions();
        },

        initialize: function() {
            this._boundingBoxesView = null;
            this._status = this.STATUS.INDEX;
        },

        renderActions: function() {
            var $download = this.$( '.js-download' );
            var $back = this.$( '.js-back' );

            $download.toggleClass('button--hidden', this._status !== this.STATUS.INDEX);
            $back.toggleClass('button--hidden', this._status !== this.STATUS.DOWNLOAD);
        },

        renderBoundingBoxesView: function(viewType) {
          if(this._boundingBoxesView) {
              this._boundingBoxesView.undelegateEvents();
              this._boundingBoxesView.stopListening();
          }
          
          var klass = B2pick.Views['BoundingBoxCollection' + viewType];
          this._boundingBoxesView = new klass({ collection: this.collection });
          this._boundingBoxesView.setElement( this.$( '.js-bounding-boxes' ) );
          this._boundingBoxesView.render();
        },

        render: function () {
            this.$el.html(this.template());

            this.renderBoundingBoxesView('Index');
            this.renderActions();

            return this.$el;
        }

    });

})();
