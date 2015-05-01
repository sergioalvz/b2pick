/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxEditionName = Backbone.View.extend({

        template: JST['app/scripts/templates/bounding_box_edition_name.hbs'],

        events: {},

        render: function () {
            this.$el.html(this.template({
                name: this.model.get('name')
            }));
        }

    });

})();
