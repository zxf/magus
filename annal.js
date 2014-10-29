//annal
(function(define){
  var annal = define();
  //exports
  if(typeof module !== 'undefined' && module.exports) {
    module.exports = annal;
  } else {
    this.annal = annal;
  }
})(function(){
  var locales = {};

  var lookupSolarTerm = function(date, pos){
    var y = date.getUTCFullYear(),
        m = date.getUTCMonth(),
        d = date.getUTCDate();
    if(y in solarTerms) {
      if(d < (15 - (solarTerms[y][m] >> 4))){
        return m ? 2 * m - 1 : 23;
      } else if(d >= (15 + (solarTerms[y][m] & 0xF))){
        return 2 * m + 1;
      } else {
        return 2 * m;
      }
    } else {
      return null;
    }
  };

  var calcSolarTerm = function(date, pos){

  };

  var Annal = function(date){
    this.date = date;
    this.pos = pos;
    this.getSolarTerm = function(){
      var solarTerm = lookupSolarTerm(this.date, this.pos);
      if(solarTerm === null){
        solarTerm = calcSolarTerm(this.date, this.pos);
      }
      return solarTerm;
    };
    this.getSeason = function(){
    };
    this.getPeriod = function(){
    };
    this.getZodiac = function(){
    };
    this.getChineseZodiac = function(){
    };
    this.getLunarYear = function(){
    };
    this.getLunarMonth = function(){
    };
    this.getLunarDay = function(){
    };
    this.getSolarYear = function(){
      return this.date.getYear();
    };
    this.getSolarMonth = function(){
      return this.date.getMonth();
    };
    this.getSolarDay = function(){
      return this.date.getDate();
    };
    this.getWeeklyDay = function(){
      return this.date.getDay();
    };
    this.getWeek = function(){
    };
    this.getDate = function(){
      return new Date(this.date);
    };
    this.format = function(fmt, lang){
    };
    this.position = function(){
      return this;
    };
    this.locale = function(){
      return this;
    };
    this.offset = function(){
      return this;
    };
    this.set = function(){
      return this;
    };
    this.next = function(){
      return Annal();
    };
    this.prev = function(){
      return Annal();
    };
  };

  var annal = function(date){
    return new Annal(date);
  };

  annal.defineSolarTerms = function(){
  };

  annal.defineLocale = function(name, values){
  };

  annal.locale = function(name){
  };

  annal.definePosition = function(name, pos){
  };

  annal.position = function(){
  };

  annal.definePeriod = function(name, day){
  };

  return annal;
});
