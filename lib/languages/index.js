(function() {
  var BaseLanguage, CSSLanguage, CoffeeScriptLanguage, EcoLanguage, HoganJsLanguage, JadeLanguage, JavaScriptLanguage, LESSLanguage, RoyLanguage, StylusLanguage;

  BaseLanguage = require('./base').BaseLanguage;

  CoffeeScriptLanguage = require('./coffeescript').CoffeeScriptLanguage;

  CSSLanguage = require('./css').CSSLanguage;

  EcoLanguage = require('./eco').EcoLanguage;

  JadeLanguage = require('./jade').JadeLanguage;

  JavaScriptLanguage = require('./javascript').JavaScriptLanguage;

  LESSLanguage = require('./less').LESSLanguage;

  RoyLanguage = require('./roy').RoyLanguage;

  StylusLanguage = require('./stylus').StylusLanguage;

  HoganJsLanguage = require('./hogan').HoganJsLanguage;

  module.exports = {
    BaseLanguage: BaseLanguage,
    CoffeeScriptLanguage: CoffeeScriptLanguage,
    CSSLanguage: CSSLanguage,
    EcoLanguage: EcoLanguage,
    JadeLanguage: JadeLanguage,
    JavaScriptLanguage: JavaScriptLanguage,
    LESSLanguage: LESSLanguage,
    RoyLanguage: RoyLanguage,
    StylusLanguage: StylusLanguage,
    HoganJsLanguage: HoganJsLanguage
  };

}).call(this);
