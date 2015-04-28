/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.Sidebar = Backbone.View.extend({

        template: JST['app/scripts/templates/sidebar.hbs'],

        tagName: 'div',

        events: {},

        render: function () {
          this.$el.html(this.template());
        }
    });

})();
