/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxCollection = Backbone.View.extend({
        template: JST['app/scripts/templates/bounding_box_collection.hbs'],

        events: {
            'click .js-download': 'on_download'
        },

        on_download: function(event) {
            event.preventDefault();
        },

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
        
        render_bounding_boxes: function() {
            var $bounding_boxes = this.$( '.js-bounding-boxes' );
            $bounding_boxes.empty().append( _.invoke(this.subviews(), 'render') );
        },

        render: function () {
            this.$el.html(this.template());

            this.render_bounding_boxes();

            return this.$el;
        }

    });

})();
