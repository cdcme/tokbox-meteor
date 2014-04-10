Tokbox-Meteor
==============

Tokbox Smart Package with Native Meteor API and 

### Native API

#### Create Tokbox Server Client

~~~ js
var openTokClient = new OpenTokClient('key', 'secret');
~~~

#### Generate a session

This can be used directly inside meteor without the use of `fibers`
~~~ js
var location = '127.0.0.1';
var options = {'p2p.preference':'enabled'};

var session = openTokClient.createSession(location, options);
~~~

#### Generate a token 

~~~ js
var sessionId = 'some-session-id';
var role = OpenTokClient.roles.PUBLISHER;
var params = {connection_data:"userId:42"};

var token = openTokClient.generateToken(sessionId, role, params);
~~~

### Low Level NPM API

If you need access to the low level [NPM module API](https://github.com/opentok/opentok-node), use `OpenTok` namespace.

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

  + Updated to opentok-npm 1.0.2
  + Updated version number to track NPM module version number
  + Removed TB.min.js to provide the option to choose between Flash & WebRTC versions
  + Added native Meteor API
  + Updated to opentok-npm 0.3.4
