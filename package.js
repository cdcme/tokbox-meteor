/*
 * tokbox by Carlo DiCelico
 * based on the original opentok created
 * by cultofmetatron, blog.peterdecroos.com
 * Made with love for the meteor community!
 *
 */
Package.describe({
  summary: "Tokbox API for Meteor"
});

Npm.depends({"opentok" : "2.2.4"});

Package.on_use(function(api) {
  api.add_files(['server/index.js'], 'server');
  api.add_files(['client/opentok.min.js'], 'client');
  api.add_files(['client/opentok-layout.min.js'], 'client');
  if (typeof api.export !== 'undefined') {
    api.export(['OpenTok', 'OpenTokClient'], 'server');
  }
});
