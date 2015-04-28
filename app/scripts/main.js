/*global B2pick, $*/

window.B2pick = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';

    var app = new B2pick.Views.App();
    app.setElement($( '.js-application' ));
    app.render();
  }
};

$(document).ready(function () {
  'use strict';
  B2pick.init();
});
