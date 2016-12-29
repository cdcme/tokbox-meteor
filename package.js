Package.describe({
  summary: "Integrate real-time communications into your website and mobile apps using the OpenTok WebRTC API",
  version: "2.10.0",
  name: "carlodicelico:tokbox",
  git: "https://github.com/carlodicelico/tokbox-meteor.git"
});

Npm.depends({"opentok" : "2.5.0"});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('server/index.js', 'server');
  api.addFiles(['client/opentok.min.js', 'client/opentok-layout.min.js'], 'client');
  api.export(['OpenTok', 'OpenTokClient'], 'server');
});
