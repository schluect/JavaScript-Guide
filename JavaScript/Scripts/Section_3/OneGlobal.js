//Global object
//represents outermost context for a script
//in browsers this is window object
var oneGlobal = oneGlobal || {};
oneGlobal.function1 = function () {
    var var1 = "test";

    return {
        var1: var1
    }
};