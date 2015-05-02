/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.App = Backbone.View.extend({

        template: JST['app/scripts/templates/app.hbs'],

        events: {},

        renderSidebar: function() {
            new B2pick.Views.Sidebar()
              .setElement(this.$( '.js-sidebar' ))
              .render();
        },

        renderMap: function() {
            new B2pick.Views.Map()
              .setElement(this.$( '.js-map' ))
              .render();
        },

        render: function () {
            this.$el.html(this.template());
            this.renderSidebar();
            this.renderMap();
        }
    });

})();
