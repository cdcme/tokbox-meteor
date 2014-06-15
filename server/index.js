OpenTok = Npm.require('opentok');
var Future = Npm.require('fibers/future');

OpenTokClient = function OpenTokClient(key, secret) {
  this._client = new OpenTok(key, secret);
};

OpenTokClient.prototype.createSession = function(options) {
  var self = this;
  options = options || {};
  var sessionId = sync(function(done) {
    self._client.createSession(options, function(err, result) {
      done(err, result.sessionId);
    });
  });

  return sessionId;
};

OpenTokClient.prototype.generateToken = function(sessionId, options) {
  options = _.clone(options) || {};
  return this._client.generateToken(sessionId, options);
};

OpenTokClient.prototype.startArchive = function(sessionId, options) {
  var self = this;
  var archive = sync(function(done) {
    self._client.startArchive(sessionId, options, function(result) {
      done(null, result);
    });
  });

  return archive;
};

OpenTokClient.prototype.stopArchive = function(sessionId) {
  var self = this;
  var archive = sync(function(done) {
    self._client.stopArchive(sessionId, function(result) {
      done(null, result);
    });
  });

  return archive;
};

OpenTokClient.prototype.getArchive = function(archiveId) {
  return this._client.getArchive(archiveId);
};

function sync(asynFunction) {
  var future = new Future();
  var sent = false;
  var payload;

  setTimeout(function() {
    asynFunction(done);
    function done(err, result) {
      if(!sent) {
        payload = {
          result: result,
          error: err
        };

        if(future.ret) {
          //for 0.6.4.1 and older
          future.ret();
        } else {
          //for 0.6.5 and newer
          future.return();
        }
      }
    }
  }, 0);

  future.wait();
  sent = true;
  
  if(payload.error) {
    throw new Meteor.Error(500, payload.error.message);
  } else {
    return payload.result;
  }
};
