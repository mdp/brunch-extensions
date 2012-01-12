(function() {
  var BaseLanguage, hogan,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  hogan = require('hogan.js');

  BaseLanguage = require('./base').BaseLanguage;

  exports.HoganJsLanguage = (function(_super) {

    __extends(HoganJsLanguage, _super);

    function HoganJsLanguage() {
      HoganJsLanguage.__super__.constructor.apply(this, arguments);
    }

    HoganJsLanguage.prototype.compile = function(file, callback) {
      var _this = this;
      return this.readFile(file, function(error, data) {
        var content;
        if (error != null) return callback(error);
        try {
          content = hogan.compile(data, {
            asString: true
          });
          return callback(null, "exports.render = function(data){ var t = new Hogan.Template(); t.r=" + content + "; return t.render(data);}");
        } catch (error) {
          return callback(error);
        }
      });
    };

    return HoganJsLanguage;

  })(BaseLanguage);

}).call(this);
