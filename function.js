var fn = {};

// define functions on the fn object like this:
// fn.functionName = function() { ... }
// test with 'npm test'

fn.nothing = function(){
return
},

fn.true = function(){
return false
},
fn.emptyString = function(){
return ""
},
fn.hello = function(){
return "Hello, javascript!"
},
fn.fnord = function(){
return 23
},
fn.skiddoo = function(){
return "23 Skiddoo"
},
fn.emptyArray = function(){
return []
},
fn.oddArray = function(){
return [1,3,5,7,9]
},
fn.fibArray = function(){
return [1,1,2,3,5,8,13]
},
fn.tenThousand = function(){
    var array = [];
    for (var i = 1; i<=10000; i++){
 array.push(i)}
 return array
},

fn.emptyObject = function(){
return {}
},

fn.simpleObject = function(){
return {foo:"bar"}
},
fn.oddEvenObject = function(){
return {1:2, 3:4, 5:6, 7:8}
},

fn.alphaObject = function(){
    var myObject = {};
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (var i = 0; i<alphabet.length; i++){
    	myObject[alphabet[i]]=i+1
    }
    return myObject
},

fn.fiveArr = function(){
    var myArray = [];
for (var i =0; i<5; i++){
    myArray.push({})
}
return myArray;
},

fn.itself = function(arg1){
return arg1;
},

fn.plusOne = function(num){
return num+1;
},
fn.double = function(num){
return num*2;
},
fn.sub = function(num1, num2){
return num1-num2;
},
fn.multfour = function(num1, num2, num3, num4){
return num1*num2*num3*num4;
},
fn.tripleString = function(str){
return str+str+str;
},
fn.tripleAnything = function(anything){
    var myString ="";
    myString += anything;
    myString += anything;
    myString += anything;
    return myString

},
fn.isEven = function(string){
if (string.length%2===0){return true}
else {return false}
},
fn.ander = function(arg1, arg2){
    if (arg1==true && arg2==true){return true}
    else{return false}
},
fn.split = function(string){
return string.split("");
},
fn.xnum = function(num){
    var myString = ""
    for (var i = 0; i<num; i++){
    	myString += "x"
    }
return myString
},

fn.oneArr = function(arg){
return [arg]
},

fn.xarr = function(num){
    var myArray = [];
    for (var i = 0; i<num; i++){
        myArray.push([]);
    }
    return myArray
},
fn.foofoo = function(string){
    return "foo" + string + "foo";
},

fn.insertx = function(string){
    var myArray = string.split("");
    for (var i = 0; i< string.length-1; i++){
        myArray.splice(i+i+1,0,"x")
    }
return myArray.join("")
},

fn.doubleArr = function(array){
return array.map(function(num){return num*2})
},
fn.sumArr = function(array){
return array.reduce(function(num1, num2){
    return num1+num2;
},0)
},

fn.arrObj = function(arrayOfNums){
    var myObject = {};
    arrayOfNums.forEach(function(integer){
        var anArray = [];
        for (var i = 0; i<integer; i++){
            anArray.push("")
        }
        myObject[integer] = anArray
    })
return myObject;
},

fn.reverse = function(string){
    var myArray = string.split("");
	for (var i = 0; i< myArray.length; i++){
		var last = myArray.pop()
		myArray.splice(0+i,0,last)
	}
	return myArray.join("")
},

fn.powersOfTwo = function(number){
    var arrayOfPowers = [];
    for (var i =0; i<number; i++){
    	var power = Math.pow(2,i+1)
    	arrayOfPowers.push(power)
    }
    return arrayOfPowers
},

fn.wordLengths = function(stringOfWords){
    var emptyArray = [];
    if (stringOfWords.length>0){
        var myArray = stringOfWords.split(" ");
	       for (var i = 0; i< myArray.length; i++){
		        emptyArray.push(myArray[i].length)
	        }
    }
    return emptyArray
},

fn.doubleFunc = function(callback){
    return callback() + callback()
},

fn.addfuncs = function(function1, function2){
    return function1() + function2()
},

fn.nope = function(callback){
    if (callback()){
        return false
    }
    else{return true}
},

fn.callFunc = function(callback, arg2){
    return callback(arg2)
},

fn.getHello = function(){
    return function(){
        return "hello"
    }
},

// define a function named 'getDoubler' that returns a function that,
//  when called with a number, will return that number x 2
fn.getDoubler = function(){
    return function(number){
        return number * 2
    }
},
// fn.getKey = function(){
//
// },


module.exports = fn;
