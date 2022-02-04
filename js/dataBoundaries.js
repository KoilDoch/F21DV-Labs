/**************/
/* EXERCISE 7 */
/**************/
let num = [10, 50, 75, 100, 200];

let paragraph = d3.select("body")
    .selectAll("div")
    .data(num)
    .enter()
    .append("div")
    .text(function (d, i) {
        return 'cont:' + d; // return value is used to set the 'text'
    })
.style("color", function(d, i) {
    if ( d > 50 && d < 100 ) {
    return "red";
    } else {
    return "yellow";
    } 
    return 'blue';
});