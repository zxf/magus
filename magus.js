//magus
(function(define){
  var magus = define();
  //exports
  if(typeof module !== 'undefined' && module.exports) {
    module.exports = magus;
  } else {
    this.magus = magus;
  }
})(function(){

  var extend = function(obj, attr){
    for(k in attr){
      obj[k] = attr[k];
    }
    return obj;
  };

  var Magus = function(date, calendar){
    this.date = date;
    this.calendar = calendar;
    caches = {};

    this.get = function(name, format){
      return this.calendar.get(this.date, name, format)
    };

    this.set = function(){

    };

    this.offset = function(){

    };

    this.period = function(){

    };

    this.next = function(){

    };

    this.prev = function(){

    };

    this.format = function(){

    };

  };

  var Calendar = function(){
    var defines = {};
    this.define = function(name, value){
      defines[name] = value;
    };

    this.getCount = function(date, name, _p){
      _p = _p || {};
      if(_p[name] > 1){
        throw "circle " + name;
      }
      _p[name] = _p[name] ? _p[name] + 1 : 1;

      var v = null;
      switch(name){
        case "_ms":
          v = date.getTime();
          break;
        default:
          var define = defines[name],
              count = define["count"],
              loop = define["loop"];
          v = (this.getCount(date, count[0], _p) + (count[2] || 0)) / count[1];
      }
      return v;
    };

    this.get = function(date, name, format){
      var define = defines[name] || {},
          formater = define["format"] || {},
          v = this.getCount(date, name);
          if(define["loop"]) {
            v = v % define["loop"];
          }
      if(formater[format]){
        v = formater[format](v);
      }
      return v;
    };

  };

  var magus = function(){

    var calendar = new Calendar();

    var _magus = function(date){
      return new Magus(_magus.parseDate(date), calendar);
    };

    _magus.parseDate = function(){
      return new Date();
    };

    _magus.calendar = function(name, value){
      if(typeof name == "object"){
        for(var k in name){
          calendar.define(k, name[k]);
        }
      } else {
        calendar.define(name, value);
      }
    };
    _magus.period = function(name, value){
    };

    return _magus;
  };

  return extend(magus(), {
    "magus": magus
  });

});
