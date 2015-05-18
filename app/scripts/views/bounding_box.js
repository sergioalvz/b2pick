/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBox = Backbone.View.extend({

        template: JST['app/scripts/templates/bounding_box.hbs'],

        tagName: 'li',

        className: 'bounding-box',

        initialize: function () {
            this.currentNameView = null;

            this.listenTo(this.model, 'editName', this.onEditBoundingBoxName);
            this.listenTo(this.model, 'saveName', this.onSaveBoundingBoxName);
        },

        onEditBoundingBoxName: function() {
          this.clearNameWrapper();
          this.renderNameView('Edition');
        },

        onSaveBoundingBoxName: function() {
          this.clearNameWrapper();
          this.renderNameView('Regular');
        },

        clearNameWrapper: function() {
          this.$( '.js-name-wrapper' ).empty();

          this.currentNameView.undelegateEvents();
          this.currentNameView.stopListening();
        },

        formatCoordinate: function(coordinate) {
            return coordinate.toFixed(2);
        },

        renderNameView: function(type) {
          var nameView = "BoundingBox" + type + "Name";

          this.currentNameView = new B2pick.Views[nameView]({ model: this.model });
          this.currentNameView.setElement(this.$( '.js-name-wrapper' )).render();
        },

        viewAttributes: function() {
            return {
                northEastLatitude:  this.formatCoordinate(this.model.get('northEastLatitude')),
                northEastLongitude: this.formatCoordinate(this.model.get('northEastLongitude')),
                southWestLatitude:  this.formatCoordinate(this.model.get('southWestLatitude')),
                southWestLongitude: this.formatCoordinate(this.model.get('southWestLongitude'))
            };
        },

        render: function () {
            this.delegateEvents();

            this.$el.html(this.template(this.viewAttributes()));

            this.renderNameView('Regular');

            return this.$el;
        }

    });

})();
