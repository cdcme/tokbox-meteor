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

Npm.depends({"opentok" : "0.3.2"});

Package.on_use(function(api) {
  api.add_files('client/tokbox-client.js', 'client');
  api.add_files('server/index.js', 'server');
});


