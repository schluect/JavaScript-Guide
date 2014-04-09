var string = "I am a string",
    number = 0,
    boolean = true,
    undefinedVar,
    fun1 = function () {
        return "I am a function";
    },
    date = new Date(),
    array = [1, 2, 3, 4],
    obj = {
        count: 0, related: null
    };


if (typeof string === "string") {
    console.log("value is: "+ string);
}

if (typeof number === "number") {
    console.log("value is: " + number);
}

if (typeof boolean === "boolean") {
    console.log("value is: " + boolean);
}

if (typeof undefinedVar === "undefined") {
    console.log("value is undefined");
}

if (typeof fun1 === "function") {
    console.log("value is: " + fun1());
}

if (date instanceof Date) {
    console.log("I am a Date");
}

if (Array.isArray(array)) {
    console.log("I contain: " + array.join(","));
}



/* Older browsers includeing IE8 and below
 * function isArray(value){
	if (typeof Array.isArray === “function”){
          		return Array.isArray(value);
           } else {
		Return Object.prototype.toString.call(value) ===”[object Array]”;
	}
}

 */

if ("count" in obj) {
    console.log("I contian count");
}