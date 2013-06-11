Tokbox-Meteor
==============

A Meteor smart package for Tokbox

This package encapsulates

  + [The official tokbox clientside library](http://static.opentok.com/v1.1/js/TB.min.js)
  + [the official opentok-node module](https://github.com/opentok/opentok-node)


On the server side, the global OpenTok is exposed which you can use
throughout the server side.

On the client side, the *TB* global is exposed allowing access to all
client side functions.

**Differences between tokbox and cultofmetatron's opentok smart package:**

  + (minor) Updated to opentok-npm 0.3.2
  + (minor) Updated to TB.min.js 1.1.6
  + (major) Opted for the non-WebRTC version of the client-side library instead of the WebRTC version used by cultofmetatron's opentok
  + (major) Replaced the customized version of uuid.js used by cultofmetatron's opentok with the original uuid.js
  + (major) Removed TB alias client-side
  + (major) Added opentokdebug that comes with Tokbox's client-side library