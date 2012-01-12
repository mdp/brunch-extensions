hogan = require 'hogan.js'
{BaseLanguage} = require './base'

class exports.HoganJsLanguage extends BaseLanguage
  compile: (file, callback) ->
    @readFile file, (error, data) =>
      return callback error if error?
      try
        content = hogan.compile data,
          asString: true
        callback null, "exports.render = function(data){ var t = new Hogan.Template(); t.r=#{content}; return t.render(data);}"
      catch error
        callback error
