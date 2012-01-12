hogan = require 'hogan.js'
{BaseLanguage} = require './base'

class exports.HoganJsLanguage extends BaseLanguage
  compile: (file, callback) ->
    @readFile file, (error, data) =>
      return callback error if error?
      callback null, hogan.compile data
