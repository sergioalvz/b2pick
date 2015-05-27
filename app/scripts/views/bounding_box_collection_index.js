/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxCollectionIndex = Backbone.View.extend({
        template: JST['app/scripts/templates/bounding_box_collection_index.hbs'],

        initialize: function() {
            this._subviews = {};

            this.listenTo(this.collection, 'add remove', this.render);
        },

        subviews: function() {
            var that =  this;

            return this.collection.map(function(boundingBox) {
                that._subviews[boundingBox.cid] = that._subviews[boundingBox.cid] || new B2pick.Views.BoundingBox({
                    model: boundingBox
                });

                return that._subviews[boundingBox.cid];
            });
        },

        render: function () {
            this.$el.html(this.template());

            var $boundingBoxes = this.$( '.js-collection' );
            $boundingBoxes.empty().append( _.invoke(this.subviews(), 'render') );

            return this.$el;
        }

    });

})();
