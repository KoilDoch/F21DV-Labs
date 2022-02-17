/**************/
/* EXERCISE 8 */
/**************/
var myData = ['a', 4, 1, 'b', 6, 2, 8, 9, 'z'];

var p = d3.select("body")
    .selectAll("span")
    .data(myData)
    .enter()
        .append('span')
        .text(function (d, i) {
            return d;
        })
        .style("color", (d,i) => {
            console.log(typeof(d));
            if (typeof(d) == "number")
                return "green";
            else if (typeof(d) == "string")
                return "red";
        });