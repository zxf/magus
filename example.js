magus.calendar("second", {
  "count": ["_ms", 1000, 0],
  "loop": 60,
  "format":{
    undefined: function(v){
      return parseInt(v);
    }
  }
});

magus.calendar("minute", {
  "count": ["second", 60, 0],
  "loop": 60
});

magus.calendar("hour", {
  "count": ["minute", 60, 8 * 60],
  "loop": 24
});

magus().get("second");

magus().get("_s");