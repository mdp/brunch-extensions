hogan = require 'hogan.js'
{BaseLanguage} = require './base'

class exports.HoganJsLanguage extends BaseLanguage
  compile: (file, callback) ->
    @readFile file, (error, data) =>
      return callback error if error?
      try
        content = hogan.compile data, 
          asString: true,
        callback null, "module.exports = #{content};"
      catch error
        callback error
