/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBox = Backbone.View.extend({

        template: JST['app/scripts/templates/bounding_box.hbs'],

        tagName: 'li',

        initialize: function () {
            this.listenTo(B2pick.sidebarChannel, 'sidebar:editBoudingBoxName', this.onEditBoundingBoxName);
        },

        onEditBoundingBoxName: function() {
          this.clearNameWrapper();
          this.renderEditionName();
        },

        clearNameWrapper: function() {
          this.$( '.js-name-wrapper' ).empty();
        },

        formatCoordinate: function(coordinate) {
            return coordinate.toFixed(2);
        },

        renderEditionName: function() {
            new B2pick.Views.BoundingBoxEditionName({ model: this.model })
                .setElement(this.$( '.js-name-wrapper' ))
                .render();
        },

        renderRegularName: function() {
            new B2pick.Views.BoundingBoxRegularName({ model: this.model })
                .setElement(this.$( '.js-name-wrapper' ))
                .render();
        },

        viewAttributes: function() {
            return {
                northEastLatitude: this.formatCoordinate(this.model.get('northEastLatitude')),
                northEastLongitude: this.formatCoordinate(this.model.get('northEastLongitude')),
                southWestLatitude: this.formatCoordinate(this.model.get('southWestLatitude')),
                southWestLongitude: this.formatCoordinate(this.model.get('southWestLongitude'))
            };
        },

        render: function () {
            this.delegateEvents();

            this.$el.html(this.template(this.viewAttributes()));

            this.renderRegularName();

            return this.$el;
        }

    });

})();
