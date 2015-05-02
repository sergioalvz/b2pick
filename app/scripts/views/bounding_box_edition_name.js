/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxEditionName = Backbone.View.extend({

        template: JST['app/scripts/templates/bounding_box_edition_name.hbs'],

        events: {
            'click .js-save-name': 'onSaveNameClick'
        },

        onSaveNameClick: function(event) {
            event.preventDefault();

            var name = this.$( '.js-name-input' ).val();
            this.model.set('name', name);

            this.model.trigger('saveName');
        },

        viewAttributes: function() {
          return {
              name: this.model.get('name')
          };
        },

        render: function () {
            this.$el.html(this.template(this.viewAttributes()));

            var $name = this.$( '.js-name-input' );
            var nameTextLength = $name.val().length;

            $name.focus();
            $name[0].setSelectionRange(nameTextLength, nameTextLength);

            return this.$el;
        }

    });

})();
