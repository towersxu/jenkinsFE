/**
 * Created by taox on 15-12-9.
 */
var debug = {};
var env = 'test';
(function(){
  function split(str){
    return str.split('');
  }
  function reverse(str){
    return str.split("").reverse().join("");
  }
  if(env === 'test'){
    debug.reverse = reverse;
  }
}());