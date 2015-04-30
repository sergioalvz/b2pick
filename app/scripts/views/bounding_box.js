/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBox = Backbone.View.extend({

        template: JST['app/scripts/templates/bounding_box.hbs'],

        tagName: 'li',

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        viewAttributes: function() {
            return _.extend(this.model.toJSON(), {
                name: this.model.get('name') || 'Bounding box'
            });
        },

        render: function () {
            this.$el.html(this.template(this.viewAttributes()));
            return this.$el;
        }

    });

})();
