"use strict";

function test(message, j) {
    if (j == 5) {
        var i = 42;
    }
    console.log(message + i);
    
    document.getElementById("result").textContent = message + i;
}
// test("valeur : ");
