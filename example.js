//define a calendar
annal.calendar = function(name, define){

};
//get calendar value
// name : solar | solar.day ...
annal.fn.get = function(name){

};
//set calendar value
annal.fn.set = function(name){

};
//offset calendar day
annal.fn.offset = function(name, value){

};
//condition: calendar values
//checkFunc: check annal(), if false: next
//timeout: timeout time
annal.fn.next = function(condition, checkFunc, timeout){

};
//format annal()
annal.fn.format = function(fmt, options){

};
//create period group
annal.period = function(){

};
//define a period 
annal.period.fn.define = function(day, define){

};
//find annal period
annal.period.fn.find = function(annal){

};
//check make check func for days
annal.period.fn.check = function(days){

};

annal.calendar("solar", {

});

annal.calendar("lunar", {

});

annal.calendar("solarTerm", {

});

annal.calendar("season", {

});

annal().get("solar.day")

annal().set("lunar.day", 8)

annal().offset("solar.day", 2).offset("solar.month", 10).getTime();

annal().offset("lunar.year", 1).set("solar.day", 2).getTime();

annal().next({
  "lunar": {
    "month": 5
  },
  "solar": {
    "day": 4
  }
});

annal().format()


var period = annal.period();

period.define("a day", {

});

var days = period.find(annal());


annal().next({
  "lunar": {
    "month": 5
  },
  "solar": {
    "day": 4
  }
}, period.check(["a day"]), 1000);

