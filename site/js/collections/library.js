// site/js/collections/library.js

var app = app || {};

(function () {
  'use strict';
  app.Library = Backbone.Collection.extend({
      model: app.Book
  });
})();
