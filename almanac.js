//almanac
(function(define){
  var almanac = define();
  //exports
  if(typeof module !== 'undefined' && module.exports) {
    module.exports = almanac;
  } else {
    this.almanac = almanac;
  }
})(function(){
  var locales = {};

  var Almanac = function(date){
    var _date = date;
    this.getSolarTerm = function(){
    };
    this.getSeason = function(){
    };
    this.getPeriod = function(){
    };
    this.getLunarYear = function(){
    };
    this.getLunarMonth = function(){
    };
    this.getLunarDay = function(){
    };
    this.getSolarYear = function(){
    };
    this.getSolarMonth = function(){
    };
    this.getSolarDay = function(){
    };
    this.setLunarYear = function(){
    };   
    this.setLunarMonth = function(){
    };   
    this.setLunarDay = function(){
    };   
    this.setSolarYear = function(){
    };   
    this.setSolarMonth = function(){
    };   
    this.setSolarDay = function(){
    };
    this.format = function(fmt, lang){
    };
  };

  var almanac = function(date){
    return new Almanac(date);
  };
  almanac.defineSolarTerms = function(){

  };

  almanac.defineLocale = function(name, values){

  };

  almanac.locale = function(name){

  };

  almanac.definePosition = function(name, pos){

  };

  almanac.position = function(){

  };

  almanac.definePeriod = function(name, day){

  };
  return almanac;
});
