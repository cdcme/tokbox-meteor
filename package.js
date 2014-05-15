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

Npm.depends({"opentok" : "1.0.x"});

Package.on_use(function(api) {
  api.add_files(['server/index.js'], 'server');
  if (typeof api.export !== 'undefined') {
    api.export(['OpenTok', 'OpenTokClient'], 'server');
  }
});


