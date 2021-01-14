"use strict";
document.getElementById('lbsInput').addEventListener('input', ({ target }) => {
    // @ts-ignore
    const lbs = target.value; //variable lbs = function(ouput) pass with .target.value
    OutputConversion(lbs); // running function
});
/**
* @param {number} lbs
*/
function OutputConversion(lbs) {
    document.getElementById('gramsOutput').innerHTML = ("~ " + lbs * 454).toLocaleString(); //converts to grams, adds commas
    document.getElementById('kilogramsOutput').innerHTML = ("~ " + lbs / 2.205).toLocaleString(); //converts to kilograms, adds commas
    document.getElementById('ouncesOutput').innerHTML = (lbs * 16).toLocaleString(); //converts to ounces, adds commas
}
