Tokbox-Meteor
==============

Tokbox Smart Package with Native Meteor API

### Important Note:

If you are updating from a previous version of this SDK, see [Important changes in v2.2](https://github.com/opentok/opentok-node#important-changes-in-v22).

Archiving, createSession, and generateToken functions have changed.

### Native API

#### Create Tokbox Server Client

~~~ js
var openTokClient = new OpenTokClient('key', 'secret');
~~~

#### Generate a session

This can be used directly inside meteor without the use of `fibers`
~~~ js
var options = {
    mediaMode: 'routed' //Options are 'routed' (through openTok servers) and 'relayed' (Peer to Peer)
    location: '127.0.0.1' //An IP address that the OpenTok servers will use to situate the session in the global OpenTok network.
};

var session = openTokClient.createSession(options);
~~~

#### Generate a token

~~~ js
var sessionId = 'some-session-id';
var options = {
    role: 'publisher', //The role for the token. Each role defines a set of permissions granted to the token
    data: "userId:42", 
    expireTime: Math.round(new Date().getTime() / 1000) + 86400 // (24 hours) The expiration time for the token, in seconds since the UNIX epoch. The maximum expiration time is 30 days after the creation time. The default expiration time of 24 hours after the token creation time.
};

var token = openTokClient.generateToken(sessionId, options);
~~~

#### Start an archive
Clients must be actively connected to the OpenTok session for you to successfully start recording an archive.
You can only record one archive at a time for a given session. You can only record archives of sessions that uses the OpenTok Media Router; you cannot archive peer-to-peer sessions.

~~~ js
var sessionId = 'some-session-id';
var options = {
    name: 'My archive name' //This is the name of the archive. You can use this name to identify the archive.
};

var archive = openTokClient.startArchive(sessionId, options);
~~~

#### Stop an archive
Archives automatically stop recording after 90 minutes or when all clients have disconnected from the session being archived.

~~~ js
var sessionId = 'some-session-id';

var archive = openTokClient.stopArchive(sessionId);
~~~

### Low Level NPM API

If you need access to the low level [NPM module API](https://github.com/opentok/opentok-node), use `OpenTok` namespace.
See [further documentation on the node client here](http://tokbox.com/opentok/libraries/server/node/reference/OpenTok.html).

### Client-side usage

In the `<head>` section of your app:

~~~ html
<script src="http://static.opentok.com/webrtc/v2.2/js/TB.min.js" ></script>
~~~

for the WebRTC version. The WebRTC version is recommended since Tokbox is deprecating the Flash version. However, if you still want to use the Flash version, you can do this in the `<head>` of your app:

~~~ html
<script src="http://static.opentok.com/v1.1/js/TB.min.js" ></script>
~~~

### Changelog

  + Updated to opentok-npm 2.2.2
  + Updated minor version number to track NPM module version number
  + Updated to opentok-npm 1.0.2
  + Removed TB.min.js to provide the option to choose between Flash & WebRTC versions
  + Added native Meteor API
  + Updated to opentok-npm 0.3.4
