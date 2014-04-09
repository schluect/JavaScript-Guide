//Equality operations
// === vs ==
var num = 1,
    numAsString = "1";

if (num == 1) {
    console.log("num == 1");
} else {
    console.log("num == 1 is false");
}

if (num === 1) {
    console.log("num === 1");
} else {
    console.log("num === 1 is false");
}

if (numAsString == 1) {
    console.log("numAsString == 1");
} else {
    console.log("numAsString == 1 is false");
}

if (numAsString === 1) {
    console.log("numAsString === 1");
} else {
    console.log("numAsString === 1 is false");
}