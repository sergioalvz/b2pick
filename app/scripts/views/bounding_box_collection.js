/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxCollection = Backbone.View.extend({
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
          this.$el.empty();

          var rendered_views = _(this.subviews()).invoke('render');
          this.$el.append(rendered_views.value());

          return this.$el;
        }

    });

})();
